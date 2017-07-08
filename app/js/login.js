window.$ = window.jQuery = require('./../../bower_components/jquery/dist/jquery.min.js')
const ebayClient = require('../js/ebay_api/authorization/auth.js')
const ebayToken = require('../js/ebay_api/authorization/token.js')
const ipcRenderer = require('electron').ipcRenderer

var isLoggedIn = false

$(document).ready(function() {
  console.log("DOM ready");
  var wb = document.getElementById('login')

  wb.addEventListener('console-message', (e) => {
     var srcFile = e.sourceId.replace(/^.*[\\\/]/, '')
     console.log('webview: ' + srcFile +'(' + e.line + '): ' + e.message)
  })

  wb.addEventListener("did-get-response-details", (details) => {
      console.log(details)

      if (!isLoggedIn) {
        let code = ebayClient.getAuthCode(details.newURL, () => {
          console.log("Cannot get authorization code!");
        })
        if (code != "") {
          //TODO: request Application token too
          //ebayClient.requestAppAuthToken(code, loginSuccess, loginFailure)
          ebayClient.requestUserAuthToken(code, loginSuccess, loginFailure)
        }
      }
  })
})

function loginSuccess(data) {
  ipcRenderer.send('login-succeded', data)
}

function loginFailure(err) {
  ipcRenderer.send('login-failed', err)
}
