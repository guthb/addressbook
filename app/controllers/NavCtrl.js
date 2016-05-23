app.controller("NavCtrl", function($scope){
  console.log("NavCtrl", $scope.navItems );
  $scope.navItems =[
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