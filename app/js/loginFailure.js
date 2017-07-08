window.$ = window.jQuery = require('./../../bower_components/jquery/dist/jquery.min.js')
const ipcRenderer = require('electron').ipcRenderer

$(document).ready(function() {
  console.log("DOM ready");
})

ipcRenderer.on('main-process-data', (event, arg) => {
  var errMsg = JSON.stringify(arg)
  document.getElementById('errMsg').innerHTML = errMsg
})
