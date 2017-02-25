angular.module('App')
  .controller('LoginCtrl',['$scope', '$http', '$location' ,function ($scope, $http, $location) {
    console.log("hello login");
    $scope.username = "";
    $scope.password = "";

    $scope.submit_form = function(){
    	$location.path('/user/'+$scope.username);
    	// $http({
    	// 	'method'	: 'POST',
    	// 	'url'		: '127.0.0.1:3000/citizen/login/',
    	// 	'data'		: {'username' : $scope.username, 'password': $scope.password}			
    	// })
    	// .then(function (resp) {
    	// 	if(resp.status == 200){
    	// 		console.log("Logged in");
    	// 		// change rootscope variable
    	// 		$location.path('/user/'+$scope.username);
    	// 	}
    	// 	else {
    	// 		console.log('error')
    	// 	}
    	// }, function (err) {
    	// 	// body...
    	// 	console.log(err)
    	// })
    }
  }]);
