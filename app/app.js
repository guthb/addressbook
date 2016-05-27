var app = angular.module('AddressBookApp', ['ngRoute'])
.constant ('firebaseURL', 'https://ng-bg-addressbook.firebaseio.com/');

app.config(function($routeProvider){
  $routeProvider.
    when('/addressbook/list',{
      templateUrl:'partials/address-list.html',
      controller:'AddressListCtrl'
    }).
    when('/addressbook/new',{
      templateUrl:'partials/address-new.html',
      controller:'AddressNewCtrl'
    }).


    when('/addressbook/:addressId/edit', {
      templateUrl:'partials/address-new.html',
      controller:'AddressEditCtrl'
    }).


    when('/addressbook/:addressId', {
      templateUrl:'partials/address-details.html',
      controller:'AddressViewCtrl'
    }).

    // when("/addressbook/:details",{
    //   templateUrl:"partials/address-details.html",
    //   controller:"AddressViewCtrl"
    // }).



    otherwise('addressbook/list');

});