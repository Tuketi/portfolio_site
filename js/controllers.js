'use strict';

var portfolioAppControllers = angular.module('portfolioAppControllers', []);

portfolioAppControllers.controller('projectList', function($scope, $http){
	$http.get('json/getProjects.php').success(function(data){
	 	$scope.projects = data;
	 	$scope.orderProj = 'project_date';
	});

});

portfolioAppControllers.controller('ProjectCtrl', ['$scope', '$routeParams'], 
	function($scope, $routeParams){
		$scope.projectID = $routeParams.projectID;
	});