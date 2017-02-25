angular.module('App')
  .controller('ComplaintCtrl',['$route','$routeParams', '$scope', '$http', '$rootScope', '$location', function ($route,$routeParams, $scope, $http, $rootScope, $location) {
    console.log("hello complaint" + $routeParams.id);
    $scope.newcomment  = {}
    if($rootScope.user == null){
    	$location.path('/login');
    }
    $scope.complaint = {
    }

    $scope.submit_comment = function(){
    	$scope.newcomment.name = $rootScope.user.name
    	$http({
    		'method' 	: 'POST',
    		'url'		: 'http://127.0.0.1:3000/complaint/'+$routeParams.id+'/newcomment/',
    		'data'		: $scope.newcomment
    	})
    	.then(function(resp){
    		$route.reload()
    	}, function(err){
    		console.log(err);
    		// error
    	})
    }
    function oninit(){
    	$http({
    		'method' 	: 'GET',
    		'url'		: 'http://127.0.0.1:3000/complaint/'+$routeParams.id		
    	})
    	.then(function(resp){
    		console.log(resp.data)
    		$scope.complaint = resp.data
    	}, function(err){
    		console.log(err);
    		alert("wrong")
    	})
    }

    oninit();


  }]);
