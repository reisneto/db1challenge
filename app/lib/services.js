angular.module("usuarioCRUD").factory('userService', function($rootScope, $http, $q, $log) {
  				var deferred = $q.defer();
  				
  				$http.get('rest/query')
  					.success(function(data, status, headers, config) {
    			$rootScope.usuarios = data;
    			deferred.resolve();
    			$rootScope.status = '';
  				});
  				return deferred.promise;
});