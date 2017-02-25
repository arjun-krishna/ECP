angular.module('App')
  .controller('UserCtrl',['$scope','$routeParams',function ($scope, $routeParams) {
    console.log("hello user " + $routeParams.id);

    $scope.username = $routeParams.id;

    $scope.issues = [{"_id": 'a',"description":"test issue", "tags":["no water","no elec"]}];
}]);
