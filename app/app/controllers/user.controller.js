angular.module('App')
  .controller('UserCtrl',['$scope', '$routeParams', '$rootScope', '$location' ,function ($scope, $routeParams, $rootScope, $location) {
    console.log("hello user" + $routeParams.id);
    $scope.username = $routeParams.id;
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

    $scope.add_complaint = function () {
    	$location.path('/addcomplaint');
    }

    $scope.gotocomplaint = function(complaint){
    	console.log(complaint)
    	$location.path('/complaint/'+complaint.id)
    }

  }]);
