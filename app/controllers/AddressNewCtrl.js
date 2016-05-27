'use strict';
app.controller("AddressNewCtrl", function($scope, $http, $location, addressStorage){
  $scope.title = "New Address";
  $scope.asubmitButtonText = "Update New Item";
  $scope.newAddress ={
    name: "",
    lastName: "",
    lastUpdate: "",
    biz: "",
    location: "",
    city: "",
    facts: ""
  };

  // $scope.addNewAddress= function(){
  //   $scope.newAddress.isCurrent=false;
  //   $scope.newAddress.id = $scope.addresses.length;
  //   console.log("you added a new address", $scope.newAddress );
  //   $scope.addresses.push($scope.newAddress);
  //   console.log("address",$scope.addresses );
  //   $scope.newAddress="";
  // };

  $scope.addNewAddress = function(){
    addressStorage.postNewAddress($scope.newAddress)
      .then(function successCallback(response) {
        console.log(response)
        $location.url("/addressbook/list");
      });
    };
});