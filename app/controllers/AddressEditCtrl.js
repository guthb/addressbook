app.controller("AddressEditCtrl", function($scope, $http, $location, $routeParams, addressStorage){

$scope.title="Edit Item";
$scope.submitButtonText = "Update";

$scope.newAddress = {};

addressStorage.getSingleAddress($routeParams.addressId)
     .then(function successCallback(response){
      $scope.newAddress = response;
     });

  $scope.addNewAddress = function(){
    addressStorage.putAddress($routeParams.addressId, $scope.newAddress)
      .then(function successCallback(response) {
          console.log(response);
          $location.url("/addressbook/list");
      });
    };

});