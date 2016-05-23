app.controller("AddressListCtrl", function($scope){
  $scope.addresses =[
    {
      id: 0,
      name: "Fred Flintstone",
      lastName: "Flintstone",
      isCurrent:true,
      lastUpdate:"01/01/2016",
      biz:"quarry",
      address:"1 sandstone way",
      city:"bedrock",
      facts:["hanna, barbera, dino, wilma"],

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
      facts:["tea, wigs, cannoes, martha"],

    },
    {
      id: 2,
      name: "John Beverly",
      lastName: "Beverly",
      isCurrent:false,
      lastUpdate:"02/02/1979",
      biz:"musician",
      address:"7 pushing up daisies",
      city:"new york city",
      facts:["bass, nancy, bollocks"]

    }
  ];
});