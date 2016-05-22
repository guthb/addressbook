app.controller("NavCtrl", function($scope){
  $scope.navAddress =[
  {
    name: "Logout",
    url:"#/logout"
  },
  {
    name: "Addresses",
    url:"#/addressbook/list"
  },
  {
    name: "New Address",
    url:"#/addressbook/new"
  }
  ];
});