var app = angular.module("AddressBook", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when("/addressbook/list",{
      templateUrl:"partials/address-list.html",
      controller:"AddressListCtrl"
    }).
    when("/addressbook/new",{
      templateUrl:"partials/address-new.html",
      controller:"AddressNewCtrl"
    }).
    when("/addressbook/details",{
      templateUrl:"partials/address-details.html",
      controller:"AddresssViewCtrl"
    }).
    otherwise("addressbook/list");

});