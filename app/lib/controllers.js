angular.module("usuarioCRUD")
			.controller("userCtrl", function($scope, $http, $location) {
				$scope.result1 = '';
    			$scope.options1 = null;
    			$scope.details1 = '';
				$scope.app = "Lista Usuários";	
				$scope.ptype_header = "fisica";
				$scope.fisPtrn = /\d{3}.\d{3}.\d{3}-\d{2}/;
				$scope.jurPtrn = /\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}/;
				
				
				$scope.adicionarUsuario = function(usuario){
					$http.post('/rest/insert', usuario)
    					.success(function(data, status, headers, config) {
      					$location.url("/");
    				});
				};
				$scope.apagarUsuario = function(usuarios){
					$scope.usuario = usuarios.filter(function (usuario){
						if(!usuario.selecionado) return usuario;
					});
				};

				$scope.isUsuarioSelecionado = function(usuarios) {
					return usuarios.some(function(usuario){
						return usuario.selecionado;
					});
				};

				$scope.fillAll = function(userForm)
				{
					//response = false;
					response = (userForm.nome.$dirty && userForm.bday.$dirty && userForm.ptype.$dirty && userForm.addr.$dirty) ? true : false;
					return response;
				};

			});