var app = angular.module('App', [
  'ngRoute'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo : '/login',
      })
      .when('/login', {

      })
});