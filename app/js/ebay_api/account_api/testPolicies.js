module.exports = Object.freeze({
  shippingPolicy: {
    "name": "Test Fulfillment Policy",
    "marketplaceId": "EBAY_US",
    "categoryTypes": [{
      "name": "ALL_EXCLUDING_MOTORS_VEHICLES"
    }],
    "handlingTime": {
      "value": 10,
      "unit": "DAY"
    },
    "marketplaceID": "EBAY_US",
    "shippingOptions": [{
        "costType": "FLAT_RATE",
        "optionType": "DOMESTIC",
        "shippingServices": [{
            "sortOrder": "1",
            "freeShipping": "true",
            "shippingCost": {
              "currency": "USD",
              "value": "0.0"
            },
            "shippingServiceCode": "EconomyShippingFromOutsideUS"
          },
          {
            "sortOrder": "2",
            "shippingServiceCode": "StandardShippingFromOutsideUS",
            "shippingCost": {
              "currency": "USD",
              "value": "3.0"
            }
          },
          {
            "sortOrder": "3",
            "shippingServiceCode": "ExpeditedShippingFromOutsideUS",
            "shippingCost": {
              "currency": "USD",
              "value": "25.0"
            }
          }
        ]
      },
      {
        "costType": "FLAT_RATE",
        "optionType": "INTERNATIONAL",
        "shippingServices": [{
            "sortOrder": "1",
            "freeShipping": "true",
            "shippingCost": {
              "currency": "USD",
              "value": "0.0"
            },
            "shipToLocations": {
              "regionIncluded": [
                {
                "regionName": "WORLDWIDE"
                }
              ]
            },
            "shippingServiceCode": "OtherInternational"
          },
          {
            "sortOrder": "2",
            "shippingServiceCode": "StandardInternational",
            "shippingCost": {
              "value": "3.0",
              "currency": "USD"
            },
            "additionalShippingCost": {
              "value": "3.0",
              "currency": "USD"
            },
            "freeShipping": false,
            "shipToLocations": {
              "regionIncluded": [
                {
                  "regionName": "WORLDWIDE"
                }
              ]
            },
            "buyerResponsibleForShipping": false,
            "buyerResponsibleForPickup": false
          }
        ]
      }
    ]
  },
  paymentPolicy: {
    "name": "x Payment Policy",
    "marketplaceId": "EBAY_US",
    "categoryTypes": [
      {
        "name": "ALL_EXCLUDING_MOTORS_VEHICLES"
      }
    ],
    "paymentMethods": [
      {
        "paymentMethodType": "CREDIT_CARD",
        "brands": [
            "VISA",
            "MASTERCARD",
            "AMERICAN_EXPRESS",
            "DISCOVER"
          ]
      }
    ]
  },
  returnPolicy: {
      "name": "x Return Policy",
      "description": "yyyyyyy",
      "marketplaceId": "EBAY_US",
      "categoryTypes": [
        {
          "name": "ALL_EXCLUDING_MOTORS_VEHICLES",
          "default": true
        }
      ],
      "returnsAccepted": true,
      "returnPeriod": {
        "value": 60,
        "unit": "DAY"
      },
      "extendedHolidayReturnsOffered": false,
      "restockingFeePercentage": "0.0",
      "refundMethod": "MONEY_BACK",
      "returnShippingCostPayer": "BUYER"
  },
  offer: {
      "sku": "test-1",
      "marketplaceId": "EBAY_US",
      "format": "FIXED_PRICE",
      "listingDescription": "<font rwr=\"1\" style=\"font-family:Arial\" size=\"4\"><img src=\"http://www.wooriaro.cafe24.com/holic/ebay_top.jpg\"><br><br><br><u><a href=\"http://stores.ebay.com/koreabeautyholic\" target=\"_new\"><font color=\"#F30094\"><b>GO TO <font color=\"#00B8EF\">OUR STORE </font><font color=\"#00429A\">&hearts;</font></b></font></a></u><br><br><u><a href=\"http://stores.ebay.com/koreabeautyholic/_i.html?rt=nc&amp;LH_Auction=1\" target=\"_new\"><font color=\"#F30094\"><b>GO TO <font color=\"#00B8EF\">Auction Products</font><font color=\"#00429A\"> Start $0.99</font></b></font></a></u><br><br><p>This is description. This is description. This is description. This is description. This is description.</p><p>This is description. This is description. This is description. This is description. This is description.</p><br><h3>Volume</h3><p>2g</p><br><h3>Options</h3><ol><li>Option-Red</li><li>Option-Black</li><li>Option-White</li><li>Option-Blue</li><li>Option-Green</li></ol><br><h3>Description</h3><ul><li>Ideal for sensitive and extremely dry skin.</li><li>Delivers deep nourishment.</li><li>Can be used on both face and body</li><li>Easier to use than oil.</li><li>Provides long lasting moisture.</li></ul><br><h3>How to use</h3><p>Take a small amount and warm up between your palms of fingers until it transforms into oil.</p><p>Gently spread over severely dry, dehydrated areas.</p><br><br><img src=\"http://www.wooriaro.cafe24.com/holic/ebay_under.jpg\"><br><p></p></font>",
      "availableQuantity": 50,
      "quantityLimitPerBuyer": 10,
      "pricingSummary": {
        "price": {
          "value": "41",
          "currency": "USD"
        }
      },
      "listingPolicies": {
        "paymentPolicyId": "5575553000",
        "returnPolicyId": "5574008000",
        "fulfillmentPolicyId": "5575548000"
      },
      "categoryId": "172031",
      "merchantLocationKey": "store-1"
  }
})
