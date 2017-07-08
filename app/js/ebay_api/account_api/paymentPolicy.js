window.$ = window.jQuery = require('./../../../../bower_components/jquery/dist/jquery.min.js')
const authManager = require('../authorization/auth.js')
const exception = require('../exceptions/errorsWarnings.js')

/* API Endpoints */
const RESOURCE_DIR = "https://api.sandbox.ebay.com/sell/account/v1/"
const RESOURCE_PAYMENT_POLICY = "payment_policy/"

module.exports = {
  createPolicy: createPolicy,
  getPolicyByName: getPolicyByName,
  getPolicyById: getPolicyById,
  getPoliciesByMarketPlace: getPoliciesByMarketPlace,
  updatePolicy: updatePolicy,
  deletePolicy: deletePolicy
}

function createPolicy(token, policy, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authToken = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(policy)

  $.ajax({
    url: apiEndpoint,
    type: 'POST',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      'Content-Language': 'en-US',
      'Authorization': authToken
    },
    data: dataContent,
    success: function (data, textStatus, jqXHR) {
      succeded(jqXHR.responseText)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}

function getPolicyByName(token, policyName, marketPlace, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + "get_by_policy_name?name=" + policyName +
                       "&marketplace_id=" + marketPlace,
    type: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authCode
    },
    success: function (data, textStatus, jqXHR) {
      succeded(data)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}

function getPolicyById(token, policyId, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + policyId,
    type: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authCode
    },
    success: function (data, textStatus, jqXHR) {
      succeded(data)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}

function getPoliciesByMarketPlace(token, marketPlace, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + "?marketplace_id=" + marketPlace,
    type: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authCode
    },
    success: function (data, textStatus, jqXHR) {
      succeded(data)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}

function updatePolicy(token, policyId, policy, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authCode = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(policy)

  $.ajax({
    url: apiEndpoint + policyId,
    type: 'PUT',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      'Content-Language': 'en-US',
      'Authorization': authCode
    },
    data: dataContent,
    success: function (data, textStatus, jqXHR) {
      succeded(jqXHR.responseText)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}

function deletePolicy(token, policyId, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_PAYMENT_POLICY
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + policyId,
    type: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authCode
    },
    success: function (data, textStatus, jqXHR) {
      succeded(jqXHR.responseText)
    },
    error: function (jqXHR, textStatus, errorThrown) {
      failed(jqXHR.responseText)
    },
    beforeSend: function (jqXHR, settings) {
      console.log("AJAX obj: " + JSON.stringify(this))
    }
  })
}
