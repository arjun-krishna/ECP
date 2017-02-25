angular.module('App')
  .controller('AddComplaintCtrl',['$http', '$scope', function ($http, $scope) {
    console.log("hello add complaint");
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
    	$http({
    		'method'	:'POST',
    		'url'		:'http://127.0.0.1:3000/complaint/new',
    		'data'		:$scope.complaint
    	})
    	then(function (resp){
    		console.log("Submittedd successfully");
    	}, function (err){
    		console.log(err);
    	})
    }
  }]);
