angular.module('App')
  .controller('SignupCtrl',['$scope', '$http', '$location', "$rootScope" ,function ($scope, $http, $location, $rootScope) {
    console.log("hello signup");
    if($rootScope.user != null){
    	$location.path('/user/' + $rootScope.user.username);
    }
    $scope.user = {}
    $scope.submit_form = function(){
    	console.log($scope.user)
        console.log("lol")
    	// $location.path('/user/'+$scope.user.name);
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
    			$location.path('/user/'+$scope.user.name);
    		}
    		else {
    			console.log('error')
    			//error 
                // clear data
                alert("something wrong")
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
