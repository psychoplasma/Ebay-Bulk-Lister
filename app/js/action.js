window.$ = window.jQuery = require('./../../bower_components/jquery/dist/jquery.min.js')
const ipcRenderer = require('electron').ipcRenderer
const Token = require('../js/ebay_api/authorization/token.js')
const ebayInventoryClient = require('../js/ebay_api/inventory_api/inventoryItem.js')
const ebayAccountClient = require('../js/ebay_api/account_api/fulfillmentPolicy.js')
const ebayPaymentPolicyClient = require('../js/ebay_api/account_api/paymentPolicy.js')
const ebayReturnPolicyClient = require('../js/ebay_api/account_api/returnPolicy.js')
const testPolicies = require('../js/ebay_api/account_api/testPolicies.js')
const ebayOfferClient = require('../js/ebay_api/inventory_api/offer.js')
const {dialog} = require('electron').remote

var userToken = new Token()
var div

$(document).ready(function() {
  console.log("DOM ready");
  div = document.getElementById('content')

  ipcRenderer.send('request-user-token')

})

function success(msg) {
  console.log("Made a call successfully! " + JSON.stringify(msg))
  dialog.showMessageBox({
                type: 'info',
                buttons: ['Ok'],
                title: 'Server Response',
                message: JSON.stringify(msg)
            })
}

function failure(err) {
  console.log("Call failed! " + err)
  dialog.showMessageBox({
                type: 'error',
                buttons: ['Ok'],
                title: 'Error',
                message: err
            })
}

ipcRenderer.on('valid-user-token', (event, token) => {
	try {
		userToken.clone(token)

    makeCall()

	} catch (ex) {
		console.log("Exception Thrown: " + ex);
	}
})

function makeCall() {
    let itemSKU = "test-1"

    let jsonData = {
      "product": {
        "title": "My item",
        "upc": ["Does not apply"],
        "aspects": {
          "Brand": ["testBrand"]
        },
        "description": "<font rwr=\"1\" style=\"font-family:Arial\" size=\"4\"><img src=\"http://www.wooriaro.cafe24.com/holic/ebay_top.jpg\"><br><br><br><u><a href=\"http://stores.ebay.com/koreabeautyholic\" target=\"_new\"><font color=\"#F30094\"><b>GO TO <font color=\"#00B8EF\">OUR STORE </font><font color=\"#00429A\">&hearts;</font></b></font></a></u><br><br><u><a href=\"http://stores.ebay.com/koreabeautyholic/_i.html?rt=nc&amp;LH_Auction=1\" target=\"_new\"><font color=\"#F30094\"><b>GO TO <font color=\"#00B8EF\">Auction Products</font><font color=\"#00429A\"> Start $0.99</font></b></font></a></u><br><br><p>This is description. This is description. This is description. This is description. This is description.</p><p>This is description. This is description. This is description. This is description. This is description.</p><br><h3>Volume</h3><p>2g</p><br><h3>Options</h3><ol><li>Option-Red</li><li>Option-Black</li><li>Option-White</li><li>Option-Blue</li><li>Option-Green</li></ol><br><h3>Description</h3><ul><li>Ideal for sensitive and extremely dry skin.</li><li>Delivers deep nourishment.</li><li>Can be used on both face and body</li><li>Easier to use than oil.</li><li>Provides long lasting moisture.</li></ul><br><h3>How to use</h3><p>Take a small amount and warm up between your palms of fingers until it transforms into oil.</p><p>Gently spread over severely dry, dehydrated areas.</p><br><br><img src=\"http://www.wooriaro.cafe24.com/holic/ebay_under.jpg\"><br><p></p></font>",
        "imageUrls": [
          "https://upload.wikimedia.org/wikipedia/commons/8/83/Simple_icon_location.svg"
        ]
      },
      "condition": "NEW",
      "availability": {
        "pickupAtLocationAvailability": [],
        "shipToLocationAvailability": {
          "quantity": 50
        }
      }
    }

    let jsonData_ = {
      "requests": [{
        "offers": [{
          "availableQuantity": 12,
          "offerId": "5072128010",
          "price":
            {
            "currency": "USD",
            "value": "713"
            }
          }
        ],
        "availability": {
          "shipToLocationAvailability": {
            "quantity": 51
          }
        },
        "sku": "my-first-item-test"
        }
      ]
    }

  //ebayInventoryClient.addReplaceItem(userToken.getToken(), itemSKU, jsonData, success, failure)
  //ebayInventoryClient.getItems(userToken.getToken(), 15, 0, success, failure)
  //ebayInventoryClient.getItem(userToken.getToken(), itemSKU, success, failure)
  //ebayInventoryClient.deleteItem(userToken.getToken(), "{SKU}", success, failure)

  //ebayAccountClient.createPolicy(userToken.getToken(), fulfillmentPolicy, success, failure)
  //ebayAccountClient.getPolicyById(userToken.getToken(), policyId, success, failure)
  //ebayAccountClient.getPolicyByName(userToken.getToken(), "x Fulfillment Policy", "EBAY_US", success, failure)
  //ebayAccountClient.getPoliciesByMarketPlace(userToken.getToken(), "EBAY_US",success, failure)
  //ebayAccountClient.updatePolicy(userToken.getToken(), policyId, fulfillmentPolicy, success, failure)
  //ebayAccountClient.deletePolicy(userToken.getToken(), policyId, success, failure)

  //ebayPaymentPolicyClient.createPolicy(userToken.getToken(), testPolicies.paymentPolicy, success, failure)
  //ebayPaymentPolicyClient.getPolicyById(userToken.getToken(), "5574760000", success, failure)
  //ebayPaymentPolicyClient.getPolicyByName(userToken.getToken(), "minimal Payment Policy", "EBAY_US", success, failure)
  //ebayPaymentPolicyClient.getPoliciesByMarketPlace(userToken.getToken(), "EBAY_US",success, failure)
  //ebayPaymentPolicyClient.updatePolicy(userToken.getToken(), "5597847000", testPolicies.paymentPolicy, success, failure)
  //ebayPaymentPolicyClient.deletePolicy(userToken.getToken(), "5597847000", success, failure)

  // ebayReturnPolicyClient.createPolicy(userToken.getToken(), testPolicies.returnPolicy, success, failure)
  // ebayReturnPolicyClient.getPolicyById(userToken.getToken(), "5574008000", success, failure)
  // ebayReturnPolicyClient.getPolicyByName(userToken.getToken(), "Returns Accepted,Buyer,14 Days,Money Back", "EBAY_US", success, failure)
  // ebayReturnPolicyClient.getPoliciesByMarketPlace(userToken.getToken(), "EBAY_US",success, failure)
  // ebayReturnPolicyClient.updatePolicy(userToken.getToken(), "5598384000", testPolicies.returnPolicy, success, failure)
  // ebayReturnPolicyClient.deletePolicy(userToken.getToken(), "5598384000", success, failure)

  // ebayOfferClient.createOffer(userToken.getToken(), testPolicies.offer, success, failure)
  // ebayOfferClient.getOffer(userToken.getToken(), "5072128010", success, failure)
  // ebayOfferClient.getOffers(userToken.getToken(), "my-first-item-test", success, failure)
  // ebayOfferClient.deleteOffer(userToken.getToken(), "5072129010", success, failure)
  // ebayOfferClient.publishOffer(userToken.getToken(), "5072261010", success, failure)
  // ebayOfferClient.updateOffer(userToken.getToken(), "5072261010", testPolicies.offer, success, failure)
}
