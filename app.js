var anaitasunaApp = angular.module('anaitasunaApp', ['ngRoute']);

anaitasunaApp.factory('contactoDataService', function ($http){
	var contactoData = {};

	contactoData.registrar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/contacto.php', data: datosUsuario});
		return promise;
	}
	return contactoData;
})

anaitasunaApp.factory('socioDataService', function ($http){
	var socioData = {};

	socioData.comprobar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/socios.php', data: datosUsuario});
		return promise;
	}
	return socioData;
})

anaitasunaApp.controller('mainController', function($scope, $http) {

	$scope.bienvenida = 'Bienvenido a la web de Anaitasuna';

	$scope.socio = {};

	$scope.validar = function (){
		$scope.nombreError = false;
		$scope.dniError = false;
		$scope.esSocio = false;
		$scope.noSocio = false;

		if (!$scope.formSocio.dni.$valid) {
			$scope.dniError = true;
		}
		if (!$scope.formSocio.nombre.$valid) {
			$scope.nombreError = true;
		}

		if ($scope.formSocio.$valid) {

			var promise = socioDataService.comprobar($scope.socio);

			promise.then(function(){
				if (promise == 'true') {
					$scope.esSocio = true;
				} else {
					$scope.noSocio = true;
				}
			
			},function(data) {
				
				$scope.errorPromise = "Parece que ha habido un problema con tu petición";

				if(data.status == 404)
					$scope.errorPromise = "Parece que no se ha encontrado el recurso solicitado";
				
				$scope.mostrarMensajeError = true;
			});

			$scope.doShow = true;
		}
	}


	/* var noticiasData = {};

	noticiasData.comprobar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/socios.php', data: datosUsuario});
		return promise;
	}
	
	$http.get('php/noticias.php').then(function(datos){

		$scope.noticias = datos.data;
			
	})
	*/

});

anaitasunaApp.controller('contactoController', function($scope, contactoDataService){

	$scope.contacto = {};

	$scope.validar = function (){
		$scope.nombreError = false;
		$scope.apellidoError = false;
		$scope.emailError = false;
		$scope.mostrarMensajeExito = false;
		$scope.mostrarMensajeError = false;

		if (!$scope.formContacto.nombre.$valid) {
			$scope.nombreError = true;
		}
		if (!$scope.formContacto.apellidos.$valid) {
			$scope.apellidoError = true;
		}
		if (!$scope.formContacto.email.$valid) {
			$scope.emailError = true;
		}

	if ($scope.formContacto.$valid) {

			var promise = contactoDataService.registrar($scope.contacto);

			promise.then(function () {
				$scope.mostrarMensajeExito = true;
				
			},function(data) {
				
				$scope.errorPromise = "Parece que ha habido un problema con tu petición";

				if(data.status == 404)
					$scope.errorPromise = "Parece que no se ha encontrado el recurso solicitado";
				
				$scope.mostrarMensajeError = true;
			});

			$scope.doShow = true;
		}
	}
	
});

anaitasunaApp.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl : 'paginas/noticias.html',
			controller : 'mainController'
		})

		.when('/secciones', {
			templateUrl : 'paginas/secciones.html',
			controller : 'seccionesController'
		})

		.when('/instalaciones', {
			templateUrl : 'paginas/instalaciones.html',
			controller : 'instalacionesController'
		})

		.when('/contacto', {
			templateUrl : 'paginas/contacto.html',
			controller : 'contactoController'
		});
});

anaitasunaApp.controller('seccionesController', function($scope, $http){

	$scope.secciones = {};

	$scope.secciones.datos = [
		{ value: "balonmano", label: "Balonmano" },
          { value: "gimnasia", label: "Gimnasia Rítmica" },
          { value: "montañismo", label: "Montañismo"},
		  { value: "ciclismo", label: "Ciclismo"},
		  { value: "futbol", label: "Fútbol Sala"},
		  { value: "halterofilia", label: "Halterofilia"},
		  { value: "judo", label: "Judo"},
		  { value: "natacion", label: "Natacion"},
		  { value: "padel", label: "Padel"}
	]

	$scope.añadirJugador = function (){

		if ($_POST['nombre'] !== "" && $_POST['apellidos'] !== "" && $_POST['edad'] !== "" && $_POST['email'] !== "" && $_POST['deporte'] !== "" && $_POST['socio'] !== ""){
			
			if ($_POST['socio'] == "si"){
				socio = $scope.secciones.si
			} else if ($_POST['socio'] == "no"){
				socio = $scope.secciones.no
			}

			$http.post('php/secciones.php',{
				'nombre': $scope.secciones.nombre,
				'apellidos': $scope.secciones.apellidos,
				'edad': $scope.secciones.edad,
				'email': $scope.secciones.email,
				'mensaje': $scope.secciones.deporte,
				'socio' : $socio
			})
			.then(function(data, status, headers, config){
				if (data.msg != ''){
					$scope.secciones.push(data);
					alert("Se enviaron datos");
				}
				alert("No se enviaron datos");
			});
		} else {
			alert("Por favor, no se permiten campos vacios en el formulario");
		}
	}



});

anaitasunaApp.controller('instalacionesController', function($scope, $http){

	$scope.cabecera = 'Nuestras instalaciones';

});



function comprobarNombres (nombre){
	let numeros = "0123456789";

	for(i=0; i<nombre.length; i++){
		if (numeros.indexOf(nombre.charAt(i),0) !== -1){
			return true;
		}
	}
	return false;
}

