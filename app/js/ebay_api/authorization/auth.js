window.$ = window.jQuery = require('./../../../../bower_components/jquery/dist/jquery.min.js')
const DataParser = require('./../../support/dataParser.js')
const EbayToken = require('./token.js')

/* API Endpoints */
const RESOURCE_USER_AUTH = "https://api.sandbox.ebay.com/identity/v1/oauth2/token"
const RESOURCE_API_SCOPE = "https://api.ebay.com/oauth/api_scope"

/* EBAY application credentials */
const REDIRECT_URI = <YOUR_REDIRECT_URI>
const CLIENT_ID = <YOUR_EBAY_CLIENT_ID>
const CLIENT_SECRET = <YOUR_EBAY_SECRET>

/* Attributes */
const ATTR_AUTH_STATUS = "isAuthSuccessful"
const ATTR_CODE = "code"

module.exports = {
  getAuthCode: getAuthCode,
  requestUserAuthToken: requestUserAuthToken,
  requestAppAuthToken: requestAppAuthToken,
  createUserAuthToken: createUserAuthToken,
  createAppAuthToken: createAppAuthToken
}

function getAuthCode(uri, error) {
  let attrVal = DataParser.getValueFromUri(ATTR_AUTH_STATUS, uri)
  let code = ""

  if (attrVal != null) {
    if (attrVal == "true") {
      code = DataParser.getValueFromUri(ATTR_CODE, uri)
      console.log("Authorization Code: " + code)
    } else {
      error()
    }
  } else {
    error()
  }

  return code
}

function requestUserAuthToken(code, succeded, failed) {
  $.ajax({
    url: RESOURCE_USER_AUTH,
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': createAuthCredential(CLIENT_ID, CLIENT_SECRET)
    },
    data: "grant_type=authorization_code&code=" + code + "&redirect_uri=" + REDIRECT_URI,
    success: function (data, textStatus, jqXHR) {
      succeded(getUserAuthToken(data))
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX object: " + JSON.stringify(this))
    }
  })
}

function requestAppAuthToken(code, succeded, failed) {
  $.ajax({
    url: RESOURCE_USER_AUTH,
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': createAuthCredential(CLIENT_ID, CLIENT_SECRET)
    },
    data: "grant_type=client_credentials&redirect_uri=" + REDIRECT_URI + "&scope=" + API_SCOPE,
    success: function (data, textStatus, jqXHR) {
      succeded(getAppAuthToken(data))
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX object: " + JSON.stringify(this))
    }
  })
}

function createUserAuthToken(token) {
  return 'Bearer ' + token
}

function createAppAuthToken(token) {
  return 'Bearer ' + token
}

function createAuthCredential(clientId, clientSecret) {
  let credential = clientId + ':' + clientSecret
  return 'Basic ' + btoa(credential)
}

function getUserAuthToken(jsonObj) {
  let token = new EbayToken()
  token.setToken(jsonObj.access_token)
  token.setExpiry(jsonObj.expires_in, refreshToken)
  token.setRefreshToken(jsonObj.refresh_token)
  token.setRefreshExpiry(jsonObj.refresh_token_expires_in, requestGrantAccess)

  return token
}

function getAppAuthToken(jsonObj) {
  let token = new EbayToken()
  token.setToken(jsonObj.access_token)
  token.setExpiry(jsonObj.expires_in, requestGrantAccess)

  return token
}

function refreshToken(refresh_token) {
  //TODO: refresh the token
}

function requestGrantAccess() {
  //TODO: load the login page
}
