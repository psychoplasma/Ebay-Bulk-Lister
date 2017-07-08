window.$ = window.jQuery = require('./../../../../bower_components/jquery/dist/jquery.min.js')
const authManager = require('../authorization/auth.js')
const exception = require('../exceptions/errorsWarnings.js')

/* API Endpoints */
const RESOURCE_DIR = "https://api.sandbox.ebay.com/sell/inventory/v1/"
const RESOURCE_BULK_UPTADE = "bulk_update_price_quantity"
const RESOURCE_ITEM = "inventory_item/"

module.exports = {
  addReplaceItem: addReplaceItem,
  updateItemPriceAndQuantity: updateItemPriceAndQuantity,
  getItem: getItem,
  getItems: getItems,
  deleteItem: deleteItem
}

function addReplaceItem(token, itemSKU, jsonData, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_ITEM
  let authToken = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(jsonData)

  $.ajax({
    url: apiEndpoint + itemSKU,
    type: 'PUT',
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

// TODO: fiyat güncelleniyor ama miktar güncellenmiyor. Aynı sorun API Explorerda da var
function updateItemPriceAndQuantity(token, itemSKU, jsonData, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_BULK_UPTADE
  let authCode = authManager.createUserAuthToken(token)
  let dataContent = JSON.stringify(jsonData)

  $.ajax({
    url: apiEndpoint,
    type: 'POST',
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

function getItem(token, itemSKU, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_ITEM
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + itemSKU,
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

function getItems(token, limit, offset, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_ITEM
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + "?limit=" + limit + "&offset=" + offset,
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

function deleteItem(token, itemSKU, succeded, failed) {
  let apiEndpoint = RESOURCE_DIR + RESOURCE_ITEM
  let authCode = authManager.createUserAuthToken(token)

  $.ajax({
    url: apiEndpoint + itemSKU,
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
