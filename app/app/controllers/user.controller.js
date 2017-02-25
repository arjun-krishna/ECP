angular.module('App')
  .controller('UserCtrl',['$routeParams',function ($routeParams) {
    console.log("hello user" + $routeParams.id);
  }]);
