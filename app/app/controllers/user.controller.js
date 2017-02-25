angular.module('App')
  .controller('UserCtrl',['$scope', '$routeParams', '$rootScope', '$location', '$http' ,function ($scope, $routeParams, $rootScope, $location, $http) {
    console.log("hello user" + $routeParams.id);
    $scope.username = $routeParams.id;
    
    $scope.complaints = []

    $scope.add_complaint = function () {
    	$location.path('/addcomplaint');
    }

    $scope.gotocomplaint = function(complaint){
    	console.log(complaint)
    	$location.path('/complaint/'+complaint.id)
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
			$scope.complaints = [
		    	{
		    		'id' : 1,
		    		'title' : 'HEllo comp1',
		    		'description' : 'I am telling u i dont likt the shit'
		    	},
		    	{
		    		'id'	: 2,
		    		'title' : 'HEllo comp2',
		    		'description' : 'I am tefk this shitling u i dont likt the shit'
		    	}
		    ]
    	})
    }

    oninit()


  }]);
