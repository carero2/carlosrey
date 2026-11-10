// Convert a lab.js builder study (.json) into a static, self-hosted study folder.
// Usage: node tools/labjs-export.mjs <study.json> <outDir> <studyId> [title]
//
// Output: index.html, script.js, style.css, embedded/* (static assets).
// The lab.js library is copied to <outDir>/lib (like the builder's own export).
// Data handling is delegated to experiments/shared/datasink.js (disabled by default).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const [, , src, outDir, studyId, title = 'Experiment'] = process.argv
if (!src || !outDir || !studyId) {
  console.error('Usage: node tools/labjs-export.mjs <study.json> <outDir> <studyId> [title]')
  process.exit(1)
}

const study = JSON.parse(fs.readFileSync(src, 'utf8'))
const { components } = study

// Plugins that need an explicit library path (mirrors the builder's plugin registry)
const PLUGIN_PATHS = { fullscreen: 'lab.plugins.Fullscreen' }

const FN = new Map() // placeholder -> function source
let fnCounter = 0
const fnPlaceholder = code => {
  const key = `__FN_${fnCounter++}__`
  FN.set(key, `function anonymous(\n) {\n${code}\n}`)
  return key
}

const DROP = new Set(['id', 'children', '_tab', '_collapsed', '_template', 'skip', 'skipCondition'])

// Canvas (fabric.js) properties the builder keeps in exported studies
const CANVAS_KEYS = ['type', 'left', 'top', 'angle', 'width', 'height', 'stroke', 'strokeWidth', 'fill',
  'text', 'fontStyle', 'fontWeight', 'fontSize', 'fontFamily', 'lineHeight', 'textAlign', 'src']
const pick = (o, keys) => Object.fromEntries(keys.filter(k => k in o).map(k => [k, o[k]]))

const convertValue = (value, type) => {
  switch (type) {
    case 'number': return Number(value)
    case 'boolean': return value === 'true'
    default: return value
  }
}

function convert(id) {
  const c = components[id]
  const out = {}
  for (const [k, v] of Object.entries(c)) {
    if (DROP.has(k)) continue
    switch (k) {
      case 'files':
        out.files = Object.fromEntries((v || []).filter(f => f.localPath).map(f => [f.localPath, f.poolPath]))
        break
      case 'responses':
        // key format: "event(filter) target" -> label
        out.responses = Object.fromEntries((v || []).map(r => [
          `${r.event}${r.filter ? `(${r.filter})` : ''}${r.target ? ` ${r.target}` : ''}`, r.label ?? '',
        ]))
        break
      case 'correctResponse':
        if (v !== '' && v !== undefined && v !== null) out.correctResponse = v
        break
      case 'parameters':
        out.parameters = Object.fromEntries((v || []).filter(p => p.name)
          .map(p => [p.name, convertValue(p.value, p.type)]))
        break
      case 'messageHandlers':
        out.messageHandlers = Object.fromEntries((v || []).filter(h => h.message && h.code && h.code.trim())
          .map(h => [h.message, fnPlaceholder(h.code)]))
        break
      case 'templateParameters': {
        const cols = v.columns || []
        out.templateParameters = (v.rows || []).map(row =>
          Object.fromEntries(cols.map((col, i) => [col.name, convertValue(row[i], col.type)]).filter(([n]) => n)))
        break
      }
      case 'plugins':
        out.plugins = (v || []).map(p => ({ ...p, path: PLUGIN_PATHS[p.type] }))
        break
      case 'items':
        // the builder derives a name from the label for unnamed page items
        out.items = (v || []).map(it => (!it.name && it.label && it.type !== 'text'
          ? { ...it, name: it.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }
          : it))
        break
      case 'tardy':
        if (v) out.tardy = v
        break
      case 'timeout':
        if (v !== '' && v !== undefined && v !== null) out.timeout = v
        break
      case 'content':
        out.content = c.type === 'lab.canvas.Screen' && Array.isArray(v) ? v.map(o => pick(o, CANVAS_KEYS)) : v
        break
      default:
        out[k] = v
    }
  }
  // skip: a non-empty skip condition wins over the checkbox
  if (c.skipCondition && String(c.skipCondition).trim()) out.skip = c.skipCondition
  else if (c.skip === true) out.skip = true
  for (const k of ['files', 'responses', 'parameters']) if (!(k in out)) out[k] = {}
  if (c.type === 'lab.flow.Loop' && !('shuffleGroups' in out)) out.shuffleGroups = []
  // Nest children
  if (c.type === 'lab.flow.Loop') {
    out.template = c.children && c.children.length ? convert(c.children[0]) : undefined
  } else if (c.type === 'lab.flow.Sequence' || c.type === 'lab.flow.Parallel') {
    out.content = (c.children || []).map(convert)
  }
  return out
}

const root = convert('root')

// Serialize: JSON with `undefined` kept and function placeholders swapped for code
const json = JSON.stringify(root, (k, v) => (v === undefined ? '__UNDEF__' : v), 2)
  .replace(/"__UNDEF__"/g, 'undefined')
  .replace(/"(__FN_\d+__)"/g, (_, key) => FN.get(key))

const script = `// Generated from ${path.basename(src)} by tools/labjs-export.mjs — do not edit by hand.
// Define study
const study = lab.util.fromObject(${json})

// Data handling (disabled unless configured in experiments/shared/datasink.js)
if (window.DataSink) window.DataSink.attach(study, { studyId: ${JSON.stringify(studyId)} })

// Let's go!
study.run()
`

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'script.js'), script)

// Static files: index.html is replaced by our own template; style.css and embedded assets are written out
const files = (study.files && study.files.files) || {}
const decode = dataUrl => {
  const m = /^data:([^;,]*)(;base64)?,(.*)$/s.exec(dataUrl)
  if (!m) throw new Error('Unsupported data URL')
  return m[2] ? Buffer.from(m[3], 'base64') : Buffer.from(decodeURIComponent(m[3]), 'utf8')
}
for (const [name, f] of Object.entries(files)) {
  if (name === 'index.html') continue
  const target = path.join(outDir, name)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, decode(f.content))
}

// lab.js library (vendored once in experiments/shared/labjs)
const libSrc = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'experiments', 'shared', 'labjs')
fs.mkdirSync(path.join(outDir, 'lib'), { recursive: true })
for (const f of ['lab.js', 'lab.fallback.js', 'lab.css', 'loading.svg']) {
  fs.copyFileSync(path.join(libSrc, f), path.join(outDir, 'lib', f))
}

const esc = s => s.replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]))
fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${esc(title)}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <!-- lab.js library -->
  <script src="lib/lab.js" data-labjs-script="library"></script>
  <script src="lib/lab.fallback.js" data-labjs-script="fallback"></script>
  <link rel="stylesheet" href="lib/lab.css">
  <!-- data handling -->
  <script src="../shared/datasink.config.js"></script>
  <script src="../shared/datasink.js"></script>
  <!-- study code and styles -->
  <script src="script.js" defer></script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container fullscreen" data-labjs-section="main">
    <main class="content-vertical-center content-horizontal-center">
      <div>
        <h2>Loading experiment</h2>
        <p>The experiment is loading and should start in a few seconds.</p>
      </div>
    </main>
  </div>
</body>
</html>
`)
console.log(`Wrote ${outDir} (${Object.keys(files).length - 1} static files)`)
