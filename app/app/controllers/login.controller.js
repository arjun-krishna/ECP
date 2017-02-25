angular.module('App')
  .controller('LoginCtrl',['$scope', '$http', '$location', "$rootScope" ,function ($scope, $http, $location, $rootScope) {
    console.log("hello login");
    if($rootScope.user != null){
    	$location.path('/user/' + $rootScope.user.username);
    }
    $scope.username = "";
    $scope.password = "";

    $scope.submit_form = function(){
    	
    	// $location.path('/user/'+$scope.username);
    	$http({
    		'method'	: 'POST',
    		'url'		: 'http://127.0.0.1:3000/citizen/login/',
    		'data'		: {'name' : $scope.username, 'password': $scope.password}			
    	})
    	.then(function (resp) {
    		if(resp.status == 200){
    			console.log("Logged in");
    			// change rootscope variable
                $rootScope.user = {
                    'name'  : $scope.username, 
                    "password"  : $scope.password
                }
    			$location.path('/user/'+$scope.username);
    		}
    		else {
    			console.log('error')
    			// error
    		}
    	}, function (err) {
    		// body...
    		console.log(err)
            alert("wrong")
    	})
    }
    $scope.redirecttosignup = function(){
    	console.log("loll")
    	$location.path('/signup')
    }

  }]);
