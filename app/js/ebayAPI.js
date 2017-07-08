window.$ = window.jQuery = require('./../../bower_components/jquery/dist/jquery.min.js')
const dataParser = require('./support/dataParser.js')
const EbayToken = require('./ebay_api/authorization/token.js')

/* EBAY application credentials & URLs */
const REDIRECT_URI = "Mustafa_Morca-MustafaM-EbayBu-gueitiqe"
const USER_AUTH_URL = "https://api.sandbox.ebay.com/identity/v1/oauth2/token"
const API_SCOPE = "https://api.ebay.com/oauth/api_scope"
const CLIENT_ID = "MustafaM-EbayBulk-SBX-80916cf10-f7008c1c"
const CLIENT_SECRET = "SBX-69e0185b0485-703e-43c7-8135-f6ad"

/* EBAY API ULRs*/
const SELL_ITEM_INVERTORY_URL = "https://api.sandbox.ebay.com/sell/inventory/v1/inventory_item/"
const PUBLISH_OFFER_URL = "https://api.ebay.com/sell/inventory/v1/offer/"

/* EBAY response attributes */
const authStatusAttr = "isAuthSuccessful"
const codeAttr = "code"
const userTokenAttr = "access_token"
const tokenTypeAttr = "token_type"
const refreshTokenAttr = "refresh_token"
const expiresInAttr = "expires_in"
const refreshTokenExpiresInAttr= "refresh_token_expires_in"


/* EBAY response attribute values */
const TOKEN_TYPE_USER = "User token"
const TOKEN_TYPE_APP = "Application Access Token"

module.exports = {
  getAuthCode: getAuthCode,
  requestUserAuthToken: requestUserAuthToken,
  addReplaceInventoryItem: addReplaceInventoryItem
}

function getAuthCode(uri, err) {
  let attrVal = dataParser.getValueFromUri(authStatusAttr, uri)
  let code = ""

  if (attrVal != null) {
    console.log("Field Value: " + attrVal)
    isLoggedIn = true
    if (attrVal == "true") {
      code = dataParser.getValueFromUri(codeAttr, uri)
      console.log("Code Value: " + code)
    } else {
      err()
    }
  } else {
    err()
  }

  return code
}

function requestUserAuthToken(code, succeded, failed) {
  $.ajax({
    url: USER_AUTH_URL,
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': createAuthCredential(CLIENT_ID, CLIENT_SECRET)},
    data: "grant_type=authorization_code&code=" + code + "&redirect_uri=" + REDIRECT_URI,
    success: function (data, textStatus, jqXHR) {
              succeded(getUserAuthToken(JSON.stringify(data)))
             },
    error: function (jqXHR, textStatus, errorThrown) {
            console.log("Request Status: " + textStatus + " Error: " + errorThrown)
            console.log("XHTTP: " + JSON.stringify(jqXHR.responseText));
            failed(jqXHR.responseText)
           },
    beforeSend: function (jqXHR, settings) {
                  console.log("url: " + JSON.stringify(this.url));
                  console.log("headers: " + JSON.stringify(this.headers));
                  console.log("data: " + JSON.stringify(this.data));
                }
  })
}

function addReplaceInventoryItem(token, itemSKU, jsonData, succeded, failed) {
  let authorization = createAuthToken(token)
  let dataContent = JSON.stringify(jsonData)

  $.ajax({
    url: SELL_ITEM_INVERTORY_URL + itemSKU,
    type: 'PUT',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      'Content-Language': 'en-US',
      'Authorization': authorization
    },
    data: dataContent,
    success: function (data, textStatus, jqXHR) {
              console.log("Status: " + textStatus)
              succeded(jqXHR.responseText)
             },
    error: function (jqXHR, textStatus, errorThrown) {
            console.log("Status: " + textStatus)
            failed(jqXHR.responseText)
           },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this));
                  console.log("data: " + this.data);
                }
  })
}

function createAuthCredential(clientId, clientSecret) {
  let credential = clientId + ':' + clientSecret
  return 'Basic ' + btoa(credential)
}

function createAuthToken(token) {
  return 'Bearer ' + token
}

function getUserAuthToken(jsonStr) {
  let jsonObj = JSON.parse(jsonStr)

  let token = new EbayToken()
  token.setToken(jsonObj.access_token)
  token.setExpiry(jsonObj.expires_in, refreshToken)
  token.setRefreshToken(jsonObj.refresh_token)
  token.setRefreshExpiry(jsonObj.refresh_token_expires_in, goToLoginPage)

  return token
}

function refreshToken(refresh_token) {
  //TODO: refresh the token
}

function goToLoginPage() {
  //TODO: load the login page
}
