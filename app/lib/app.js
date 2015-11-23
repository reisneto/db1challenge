angular.module("usuarioCRUD", ['ngRoute', 'ngAutocomplete'])

.config(function($routeProvider) {

    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : "/views/lista_users.html",
            controller  : "userCtrl",
            resolve    : { 'userService': 'userService' },
        })
        .when('/cadastro', {
            templateUrl : "/views/main.html",
            controller  : "userCtrl"
        })
        $routeProvider.otherwise({
          redirectTo : '/'
      });
    });