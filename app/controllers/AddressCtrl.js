app.controller("AddressCtrl", function($scope){

  $scope.welcome = "hello";
  $scope.showAddressView = true;
  $scope.newAddress = {};
  $scope.addresses =[
    {
      id: 0,
      name: "Fred Flintstone",
      lastName: "Flintstone",
      isCurrent:true,
      lastupdate:"01/01/2016",
      biz:"quarry",
      address:"1 sandstone way",
      city:"bedrock",
      facts:["hanna, barbera, dino, wilma"]
    },
    {
      id: 1,
      name: "George Washington",
      lastName: "Washington",
      isCurrent:true,
      lastupdate:"07/04/1776",
      biz:"leader",
      address:"1 george dr",
      city:"mount vernon",
      facts:["tea, wigs, cannoes, martha"]

    },
    {
      id: 2,
      name: "John Beverly",
      lastName: "Beverly",
      isCurrent:false,
      lastupdate:"02/02/1979",
      biz:"musician",
      address:"7 pushing up daisies",
      city:"new york city",
      facts:["bass, nancy, bollocks"]

    }
  ];

  $scope.newAddress = function(){
    console.log("You clicked new address");
    $scope.showAddressView = false;
  };

  $scope.allAddress=function(){
    console.log("you clicked all addresses");
    $scope.showAddressView = true;
  };

  $scope.addNewAddress= function(){
    $scope.newAddress.isCurrent=false;
    $scope.newAddress.id = $scope.addresses.length;
    console.log("you added a new address", $scope.newAddress );
    $scope.addresses.push($scope.newAddress);
    console.log("addresses",$scope.addresses );
    $scope.newAddress="";
  };
});