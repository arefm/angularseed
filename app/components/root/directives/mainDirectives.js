"use stricts";

App
	.directive("directvename", function ($rootScope, $location){
		return {
			restrict: "A",
			link: function ($scope, element, attrs) {
				element.bind("click" , function(e) {
					e.preventDefault();
				});
			}
		}
	});