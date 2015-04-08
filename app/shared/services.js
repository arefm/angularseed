"use strict";

App
	.service('ServiceName', function($rootScope, $http){

		this.apiAction = function(data)
		{
			var url = 
			{
				api: $rootScope.apiUrl + "/"
			};

			return $http.get(url.api)
				.then(function(response){
					return response;
				});
		}

	});