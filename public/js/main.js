var app = angular.module('cto', ['ngResource']);
app.controller('ContatosController', function($scope, $resource) {
	
	var Contato = $resource('/contatos/:id');

	$scope.total = 0;
	$scope.contatos = Contato.query();
	$scope.contato = new Contato();

	$scope.grava = function(contato) {
		$scope.contato.$save(function() {
			$scope.contato = new Contato();
			$scope.total++;	
			$scope.contatos = Contato.query();
		});
		
	};

	$scope.seleciona = function(contato) {
		$scope.contato = contato;
	}

	$scope.remove = function(contato) {
		contato.$delete({id: contato._id}, function() {
			$scope.contatos = Contato.query();
		});
	}
});