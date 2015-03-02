angular.module('myApp', ['ngAnimate'])
	.controller('myCtrl', function ($scope, $http) {
		

		$scope.searchInstagram = function (query) {

			$scope.querried = false;
			$scope.searched = query;
			if (!$scope.myForm.$valid){
				$scope.error = true;
				return;
			} else {
				$scope.error = false;
			}
				

			var search = query.replace(/\s+/g, '_').toLowerCase();

			var url ='https://api.instagram.com/v1/tags/' + search + '/media/recent';

			
			var request = {
				callback: 'JSON_CALLBACK',
				client_id: '5ff146fd7a2e4c4ab1df99fa150d806a',

			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			})
			.success( function (data){
				$scope.images = data.data;
				$scope.querried = true;
				$scope.query = "";
				
			})
			.error(function () {
				$scope.querried = false;

				console.log('error');
			});
		};

	});


