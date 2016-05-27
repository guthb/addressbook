app.controller("AddressNewCtrl", function($scope, $http, $location, addressStorage){
  $scope.title = "New Address";
  $scope.submitButtonText = "Update New Item";
  $scope.newAddress ={
    name: "",
    lastName: "",
    lastUpdate: "",
    biz: "",
    location: "",
    city: "",
    facts: ""
  };

  $scope.addNewAddress = function(){
    addressStorage.postNewAddress($scope.newAddress)
      .then(function successCallback(response) {
        console.log(response);
        $location.url("/addressbook/list");
      });
    };
});