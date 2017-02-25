var app = angular.module('App', [
  'ngRoute', 'angularCSS'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo : '/login'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        css: 'app/styles/login.css'
      })
      .when('/signup/', {
        templateUrl: 'app/views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup',
        css: 'app/styles/loginStyle.css'
      })
      .when('/user/:id', {
        templateUrl: 'app/views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        css: 'app/styles/user.css'
      })
      .when('/complaint/:id', {
        templateUrl: 'app/views/complaint.html',
        controller: 'ComplaintCtrl',
        controllerAs: 'comp'
      })

});

app.run(function ($rootScope){
  $rootScope.isloggedin =false;
  $rootScope.user = null;
});