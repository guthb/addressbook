app.controller("AddressListCtrl", function($scope, $http, $location, addressStorage){
  $scope.addresses =[];

  addressStorage.getAddressList().then(function(addressCollection){
      console.log("Address collection from promise ub getAddressList", addressCollection);
      $scope.addresses = addressCollection;
    });

   // getItems();
     $scope.addressDelete = function(addressId){
      //console.log("itemId",itemId );
      addressStorage.deleteAddress(addressId).then(function(response){
            // $scope.items =[]
          addressStorage.getAddressList().then(function(addressCollection){
            $scope.addresses = addressCollection;
          });
      });

    };

    $scope.inputChange = function(address){
      addressStorage.updateIsCurrent(address)
      .then(function(response){
        console.log("response in inputchange", response);
      });
    };

});

