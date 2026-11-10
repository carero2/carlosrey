// Data storage settings for all experiments.
// While `enabled` is false, responses stay in the participant's browser and are discarded.
//
// mode: 'transmit' -> lab.js native transmission (incremental + full) to a lab.js-compatible backend
//                     (e.g. the lab.js PHP backend, Open Lab or JATOS-like endpoints).
//       'post'     -> one JSON POST at the end of the study to `url`
//                     (e.g. a Supabase/Firebase function, Google Apps Script, a small API).
window.DATASINK_CONFIG = {
  enabled: false,
  mode: 'post',
  url: '',
  headers: {},
  // Show a small "demo" notice while data is not being stored
  showDemoNotice: true,
}
