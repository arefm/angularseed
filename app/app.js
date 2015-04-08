"use stricts";

var appname = "App Name";
var App = angular.module(appname, ['ngRoute', 'ngCookies', 'ngProgress']);

App.componentsBasePath = "/app/components/";

App.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/', {
			templateUrl: App.componentsBasePath + "root/views/main.html",
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/'
	    });

	$locationProvider.html5Mode(true);
});

App.run(function ($rootScope, $location, $timeout, ngProgress) {

	$rootScope.apiUrl = "";

	$rootScope.$on('$locationChangeStart', function(){
		ngProgress.start();
		angular.element("#content_holder").fadeOut(200);
		var newRoute = arguments[1];
		var path = newRoute.split("/");
	});

	$rootScope.$on('$routeChangeSuccess', function(e, current, pre){
		var path = String($location.path());
	});

	$rootScope.$on('$viewContentLoaded', function(e, current, pre){
		ngProgress.complete();
		angular.element("#content_holder").fadeIn(200);
	});

	var path = $location.path().split("/");
});

angular.element(document).ready(function(){
	angular.bootstrap(document, [appname]);
});
