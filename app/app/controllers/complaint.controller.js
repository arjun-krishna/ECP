angular.module('App')
  .controller('ComplaintCtrl',['$routeParams',function ($routeParams) {
    console.log("hello complaint" + $routeParams.id);
  }]);
