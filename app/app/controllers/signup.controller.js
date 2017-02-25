angular.module('App')
  .controller('SignupCtrl',['$scope', '$http', '$location', "$rootScope" ,function ($scope, $http, $location, $rootScope) {
    console.log("hello signup");
    if($rootScope.user != null){
    	$location.path('/user/' + $rootScope.user.username);
    }
    $scope.username = "";
    $scope.password = "";

    $scope.submit_form = function(){
    	
    	$location.path('/user/'+$scope.username);
    	$http({
    		'method'	: 'POST',
    		'url'		: 'http://127.0.0.1:3000/citizen/signup/',
    		'data'		: $scope.user			
    	})
    	.then(function (resp) {
    		if(resp.status == 200){
    			console.log("new user added");
    			// change rootscope variable
    			$rootScope.user = resp.data
    			$location.path('/user/'+$scope.username);
    		}
    		else {
    			console.log('error')
    			$rootScope.user = { 
		    		'username'  : "Suhas", 
		    		"password" 	:  "password"
		    	}
		    	$location.path('/user/'+$rootScope.user.username);
    		}
    	}, function (err) {
    		// body...
    		console.log(err)
    	})
    }
    $scope.redirecttologin = function () {
    	$location.path('/login')
    }
  }]);
