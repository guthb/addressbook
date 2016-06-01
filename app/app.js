var app = angular.module('AddressBookApp', ['ngRoute'])
.constant ('firebaseURL', 'https://ng-bg-addressbook.firebaseio.com/');

let isAuth = (AuthFactory) => new  Promise ((resolve, reject) =>  {
  if (AuthFactory.isAuthenticated()){
    console.log("User is authenticated resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl:'partials/address-list.html',
      controller:'AddressListCtrl',
      resolve: {isAuth}
    }).

    when('/addressbook/list',{
      templateUrl:'partials/address-list.html',
      controller:'AddressListCtrl',
      resolve: {isAuth}
    }).

    when('/addressbook/new',{
      templateUrl:'partials/address-new.html',
      controller:'AddressNewCtrl',
      resolve: {isAuth}
    }).

    when('/addressbook/:addressId', {
      templateUrl:'partials/address-details.html',
      controller:'AddressViewCtrl',
      resolve: {isAuth}
    }).


    when('/addressbook/:addressId/edit', {
      templateUrl:'partials/address-new.html',
      controller:'AddressEditCtrl',
      resolve: {isAuth}
    }).

    when('/login', {
      templateUrl:"partials/login.html",
      controller:"LoginCtrl"
    }).

    when('/logout', {
      templateUrl:"partials/login.html",
      controller:"LoginCtrl"
    }).

    otherwise('/');


});

app.run(($location) => {
  let addressRef = new Firebase('https://ng-bg-addressbook.firebaseio.com/');
  addressRef.unauth();
  addressRef.onAuth( authData => {
    console.log("RUN");
    if(!authData) {
      console.log("after auth check");
      $location.path('/login');
    }
  }) //firebase method
});

