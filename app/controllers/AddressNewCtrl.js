'use strict';
app.controller("AddressNewCtrl", function($scope, $http, $location, addressStorage){
  $scope.title = "New Address";
  $scope.submitButtonText = "Update New Address";
  $scope.newAddress ={
    name: "",
    lastName: "",
    lastUpdate: "",
    biz: "",
    location: "",
    city: "",
    facts: "",
    uid:""
  };

  $scope.addNewAddress = function(){
    addressStorage.postNewAddress($scope.newAddress)
      .then(function successCallback(response) {
        console.log(response);
        $location.url("/addressbook/list");
      });
    };
});