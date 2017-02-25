angular.module('App')
  .controller('AddComplaintCtrl',['$http', '$scope', '$location', "$rootScope" , function ($http, $scope, $location, $rootScope) {
    console.log("hello add complaint");
    if($rootScope.user == null){
    	$location.path('/login');
    }
    $scope.complaint = {
    	'tags' : []
    }

    $scope.add_tag = function (){
    	$scope.complaint.tags.push($scope.newtag)
    }

    $scope.remove_tag = function (i){
    	$scope.complaint.tags.splice(i, i+1)
    }

    $scope.submit_complaint = function(){
    	// form check
    	console.log($scope.complaint)
    	$scope.complaint.filled_by = $rootScope.user.name;
    	$http({
    		'method'	:'POST',
    		'url'		:'http://127.0.0.1:3000/complaint/new/',
    		'data'		:$scope.complaint
    	})
    	.then(function (resp){
    		if(resp.status == 406){
    			console.log("some invalid stuff")
    			// error process
    		}
    		else if(resp.status == 200){
    			console.log("submitted properly")
    			$location.path('/user/'+$rootScope.user.name)
    		}
    	}, function (err){
    		console.log(err);
    		// error 
    	})
    }
  }]);
