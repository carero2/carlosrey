// Pluggable data handling for lab.js studies.
// Every study calls DataSink.attach(study, { studyId }) before study.run().
// Configure behaviour in datasink.config.js; nothing is sent while it is disabled.
(function () {
  var config = window.DATASINK_CONFIG || { enabled: false }

  function sessionId() {
    try { return crypto.randomUUID() } catch (e) { return String(Date.now()) + Math.random().toString(16).slice(2) }
  }

  function demoNotice() {
    var el = document.createElement('div')
    el.textContent = 'Demo version · responses are not stored'
    el.setAttribute('role', 'note')
    el.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:9999;padding:4px 10px;' +
      'font:12px/1.4 system-ui,sans-serif;color:#555;background:rgba(255,255,255,.9);' +
      'border:1px solid rgba(0,0,0,.12);border-radius:999px;pointer-events:none'
    document.body.appendChild(el)
  }

  function attach(study, opts) {
    var studyId = (opts && opts.studyId) || 'study'
    var session = sessionId()
    var meta = { id: session, study: studyId }

    if (!config.enabled || !config.url) {
      if (config.showDemoNotice !== false) {
        if (document.body) demoNotice()
        else document.addEventListener('DOMContentLoaded', demoNotice)
      }
      return
    }

    if (config.mode === 'transmit') {
      // lab.js native transmission; also makes the builder's "Data transmission" screens work
      study.plugins.add(new lab.plugins.Transmit({ url: config.url, metadata: meta, headers: config.headers }))
      return
    }

    // 'post': send everything once, when the study ends
    study.on('end', function () {
      var body = JSON.stringify({
        study: studyId,
        session: session,
        finishedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        data: study.options.datastore.data,
      })
      fetch(config.url, {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, config.headers || {}),
        body: body,
        keepalive: true,
      }).catch(function (err) { console.error('DataSink: could not send data', err) })
    })
  }

  window.DataSink = { attach: attach }
})()
