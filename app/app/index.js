var app = angular.module('App', [
  'ngRoute'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo : '/login'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/user/:id', {
        templateUrl: 'app/views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/complaint/:id', {
        templateUrl: 'app/views/complaint.html',
        controller: 'ComplaintCtrl',
        controllerAs: 'comp'
      })
      .when('/addcomplaint/', {
        templateUrl: 'app/views/addcomplaint.html',
        controller: 'AddComplaintCtrl',
        controllerAs: 'addcom'
      })
});