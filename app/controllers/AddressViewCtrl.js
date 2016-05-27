app.controller("AddressViewCtrl", function($scope, $http, $routeParams, addressStorage){

  $scope.addresses = [];
  $scope.selectedAddress = {};
  console.log($routeParams.addressId);

  addressStorage.getAddressList().then(function(addressCollection){
    console.log("addressCollection from promise", addressCollection);
    $scope.addresses = addressCollection;

    $scope.selcetedAddress = $scope.addresses.filter(function(address){
      return item.id === $routeParams.addressId;
    })[0] ;//return the first thing in the array
  });

});