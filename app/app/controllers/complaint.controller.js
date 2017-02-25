angular.module('App')
  .controller('ComplaintCtrl',['$routeParams', '$scope', '$http', function ($routeParams, $scope, $http) {
    console.log("hello complaint" + $routeParams.id);
    $scope.complaint = {
    	'title' 		: 'Hello world!!!',
    	'description' 	: 'Hello i am not any thing wrong. I am mad and isane and i dont regret to tell u u   r a dead aman',
    	'ward'			: 'DCF lab',
    	'area'			: 'IIT madras',
    	'city'			: 'Chennai',
    	'state'			: 'Tamil Nadu',
    	'tags'			: ['sad', 'roads not clean']
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
    		$scope.complaint = {
		    	'title' 		: 'Hello world!!!',
		    	'description' 	: 'Hello i am not any thing wrong. I am mad and isane and i dont regret to tell u u   r a dead aman',
		    	'ward'			: 'DCF lab',
		    	'area'			: 'IIT madras',
		    	'city'			: 'Chennai',
		    	'state'			: 'Tamil Nadu',
		    	'tags'			: ['sad', 'roads not clean']
		    }
    	})
    }

    oninit();


  }]);
