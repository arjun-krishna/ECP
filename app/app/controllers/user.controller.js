angular.module('App')
  .controller('UserCtrl',['$route','$scope', '$routeParams', '$rootScope', '$location', '$http' ,function ($route, $scope, $routeParams, $rootScope, $location, $http) {
    console.log("hello user" + $routeParams.id);
    if($rootScope.user == null){
    	$location.path('/login');
    }
    $scope.username = $routeParams.id;
    
    $scope.complaints = []
    $scope.add_complaint = function () {
    	$location.path('/addcomplaint');
    }

    $scope.gotocomplaint = function(complaint){
    	console.log(complaint)
    	$location.path('/complaint/'+complaint._id)
    }

    $scope.upvote = function(complaint){
    	$http({
    		'method' 	: 'GET',
    		'url'		: 'http://127.0.0.1:3000/complaint/'+complaint._id+'/upvote/'	
    	})
    	.then(function (resp){
    		console.log("upvoted")
    		complaint.upvotes+=1
    		complaint.upvoted = true
    	}, function (err){
    		console.log(err)
			$route.reload()
    	})
    }

    function oninit(){
    	$http({
    		'method' 	: 'GET',
    		'url'		: 'http://127.0.0.1:3000/newsfeed/'+$rootScope.user.name	
    	})
    	.then(function (resp){
    		console.log("got 'em all")
    		$scope.complaints = resp.data
    	}, function (err){
    		console.log(err)
			alert("Wrong")
    	})
    }

    oninit()


  }]);
