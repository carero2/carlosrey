// Rebuild every experiment from its lab.js builder file in experiments/src.
// Usage: node tools/build-experiments.mjs
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

// id (also the URL folder) -> source file and page title
const STUDIES = [
  { id: 'loss-attention1B', src: 'loss-attention1B.json', title: 'Loss attention 1B' },
  { id: 'loss-attention2', src: 'loss-attention2.json', title: 'Loss attention 2' },
]

for (const s of STUDIES) {
  execFileSync(process.execPath, [
    path.join(root, 'tools', 'labjs-export.mjs'),
    path.join(root, 'experiments', 'src', s.src),
    path.join(root, 'experiments', s.id),
    s.id,
    s.title,
  ], { stdio: 'inherit' })
}
