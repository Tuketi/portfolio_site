'use strict';

var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/projects/', {redirectTo: '/projects/1/0'})
			.when('/art/', {redirectTo: '/projects/3/1'})
			.when('/about/', {templateUrl: 'partials/about.html'})
			.when('/contact/', {templateUrl: 'partials/contact.html'})
			.when('/projects/:projectID/1', {templateUrl: 'partials/project_info.html', controller: 'projectCtrl'})
			.when('/projects/:projectID/0', {templateUrl: 'partials/project_info.html', controller: 'projectCtrl'})
			.otherwise({redirectTo: '/projects/'});
	}]);

portfolioApp.controller('projectCtrl', function($scope, $routeParams, $http, $sce){
		$http.get('json/getProjects.php?id=' + $routeParams.projectID).success(function(dataz){
	 		$scope.project_info = dataz[0];
	 		$scope.project_info.project_brief = $sce.trustAsHtml($scope.project_info.project_brief);
	 	});
});

portfolioApp.controller('projectListCtrl', function($scope, $http){
	var jsonurl;
 	if (window.location.hash.slice(-1) == 1 || window.location.hash.slice(-4) == "art/"){
		jsonurl = "json/getProjects.php?art";
		console.log(jsonurl);
	}else{
		jsonurl = "json/getProjects.php";
	}

		$http.get(jsonurl).success(function(data){
		 	$scope.projects = data;
		});
});