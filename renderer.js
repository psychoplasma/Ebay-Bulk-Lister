const app = angular.module('ebayBulkLister-app', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/action', {
      templateUrl: 'action.html'
    })
    .when('/product_info', {
      templateUrl: 'product_info.html'
    })
    .when('/payment', {
      templateUrl: 'payment.html'
    })
    .when('/shipping', {
      templateUrl: 'shipping.html'
    })
    .when('/return_policy', {
      templateUrl: 'return_policy.html'
    })
})
