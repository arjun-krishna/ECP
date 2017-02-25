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
        css: 'app/styles/loginStyle.css'
      })
      .when('/user/:id', {
        templateUrl: 'app/views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        css: 'app/styles/userStyle.css'
      })
      .when('/complaint/:id', {
        templateUrl: 'app/views/complaint.html',
        controller: 'ComplaintCtrl',
        controllerAs: 'comp'
      })
      .when('/addcomplaint/', {
        templateUrl: 'app/views/addcomplaint.html',
        controller: 'AddComplaintCtrl',
        controllerAs: 'addcom',
        css: 'app/styles/loginStyle.css'
      })
      .when('/signup/', {
        templateUrl: 'app/views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup',
        css: 'app/styles/loginStyle.css'
      })
});

app.run(function ($rootScope){
  $rootScope.isloggedin =false;
  $rootScope.user = null;
});