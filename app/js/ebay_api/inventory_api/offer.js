window.$ = window.jQuery = require('./../../../../bower_components/jquery/dist/jquery.min.js')
const authManager = require('../authorization/auth.js')
const exception = require('../exceptions/errorsWarnings.js')

/* API Endpoints */
const RESOURCE_DIR = "https://api.sandbox.ebay.com/sell/inventory/v1/"
const RESOURCE_OFFER = "offer/"
const RESOURCE_PUBLISH = "/publish"

module.exports = {
  createOffer: createOffer,
  deleteOffer: deleteOffer,
  getOffer: getOffer,
  getOffers: getOffers,
  publishOffer: publishOffer,
  updateOffer
}

function createOffer(token, offer, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authToken = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(offer)

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

function deleteOffer(token, offerId, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + offerId,
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

function getOffer(token, offerId, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + offerId,
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

function getOffers(token, itemSKU, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + "?sku=" + itemSKU,
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

function publishOffer(token, offerId, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authToken = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + offerId + RESOURCE_PUBLISH,
    type: 'POST',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authToken
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

function updateOffer(token, offerId, offer, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_OFFER
  let authToken = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(offer)

  $.ajax({
    url: apiEndpoint + offerId,
    type: 'PUT',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      'Content-Language': 'en-US',
      'Authorization': authToken
    },
    data: dataContent,
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
