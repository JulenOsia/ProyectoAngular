var anaitasunaApp = angular.module('anaitasunaApp', ['ngRoute']);

//Rutas de la aplicación web
anaitasunaApp.config(function($routeProvider){

	$routeProvider
		.when('/', {
			//Sección Inicio
			templateUrl : 'paginas/noticias.html',
			controller : 'mainController'
		})

		.when('/secciones', {
			//Sección Deportes
			templateUrl : 'paginas/secciones.html',
			controller : 'seccionesController'
		})

		.when('/contacto', {
			//Sección Contacto
			templateUrl : 'paginas/contacto.html',
			controller : 'contactoController'
		});
});

// Factoría del formulario de contactos
anaitasunaApp.factory('contactoDataService', function ($http){
	var contactoData = {};

	contactoData.registrar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/contacto.php', data: datosUsuario});
		return promise;
	}
	return contactoData;
})

// Factoría del formulario de socios
anaitasunaApp.factory('socioDataService', function ($http){
	var socioData = {};

	socioData.comprobar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/socios.php', data: datosUsuario});
		return promise;
	}
	return socioData;
	
})

// Factoría del formulario de comprobación de socios
anaitasunaApp.factory('registroDataService', function ($http){
	var registroData = {};

	registroData.registrar = function (datosUsuario) {

		var promise = $http({method: 'POST', url: 'php/secciones.php', data: datosUsuario});
		return promise;
	}
	return registroData;
	
})

// Controlador de la página principal - Inicio
anaitasunaApp.controller('mainController', function($scope, $http, socioDataService) {

	//Configuración de las noticias

	$scope.importar = function (){

		$http.get('lib/noticias.json').then(function(datos){
			
			$scope.noticias = datos.data;
			
		})
	}
	$scope.importar();

	$scope.mostrar3 = true;
	$scope.mostrarTodo = true;
	$scope.boton = false;

	$scope.mostrarMas = function() {
		$scope.mostrar3 = false;
		$scope.mostrarTodo = false;
		$scope.boton = true;
	} 

	//Configuración de la comprobación de socios
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
				console.log(promise);
				if (promise === 'false') {
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


});


//Controlador de la página de Contacto
anaitasunaApp.controller('contactoController', function($scope, contactoDataService){

	$scope.contacto = {};

	$scope.validar = function (){

		$scope.cajaErrores = false;
		$scope.nombreError = false;
		$scope.apellidoError = false;
		$scope.emailError = false;
		$scope.mensajeError = false;
		$scope.mostrarMensajeExito = false;
		$scope.mostrarMensajeError = false;

		if (!$scope.formContacto.nombre.$valid) {
			$scope.cajaErrores = true;
			$scope.nombreError = true;
		}

		if (!$scope.formContacto.apellidos.$valid && !$scope.cajaErrores) {
			$scope.cajaErrores = true;
			$scope.apellidoError = true;
		} else if(!$scope.formContacto.apellidos.$valid && $scope.cajaErrores) {
			$scope.apellidoError = true;
		}

		if (!$scope.formContacto.email.$valid && !$scope.cajaErrores) {
			$scope.cajaErrores = true;
			$scope.emailError = true;
		} else if(!$scope.formContacto.email.$valid && $scope.cajaErrores) {
			$scope.emailError = true;
		}
		
		if (!$scope.formContacto.mensaje.$valid && !$scope.cajaErrores) {
			$scope.cajaErrores = true;
			$scope.mensajeError = true;
		} else if(!$scope.formContacto.mensaje.$valid && $scope.cajaErrores) {
			$scope.mensajeError = true;
		}

	if ($scope.formContacto.$valid) {

			var promise = contactoDataService.registrar($scope.contacto);
			console.log(promise);
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


//Controlador de la página de Deportes
anaitasunaApp.controller('seccionesController', function($scope, registroDataService){

	$scope.secciones = {};

	$scope.secciones.eleccion = [
		{ value: "1", label: "Balonmano" },
          { value: "2", label: "Gimnasia Rítmica" },
          { value: "3", label: "Montañismo"},
		  { value: "4", label: "Ciclismo"},
		  { value: "5", label: "Fútbol Sala"},
		  { value: "6", label: "Halterofilia"},
		  { value: "7", label: "Judo"},
		  { value: "8", label: "Natacion"},
		  { value: "9", label: "Padel"}
	]

	$scope.validar = function (){
		
		$scope.cajaErrores = false;
		$scope.dniError = false;
		$scope.nombreError = false;
		$scope.apellidoError = false;
		$scope.edadError = false;
		$scope.emailError = false;
		$scope.mostrarMensajeExito = false;
		$scope.mostrarMensajeError = false;

		if (!$scope.formAnadirSocio.dni.$valid) {
			$scope.cajaErrores = true;
			$scope.dniError = true;
		}

		if (!$scope.formAnadirSocio.nombre.$valid  && !$scope.cajaErrores) {
			$scope.cajaErrores = true;
			$scope.nombreError = true;
		} else if(!$scope.formAnadirSocio.nombre.$valid && $scope.cajaErrores) {
			$scope.nombreError = true;
		}

		if (!$scope.formAnadirSocio.apellido.$valid) {
			$scope.cajaErrores = true;
			$scope.apellidoError = true;
		} else if(!$scope.formAnadirSocio.apellido.$valid && $scope.cajaErrores) {
			$scope.apellidoError = true;
		}

		if (!$scope.formAnadirSocio.edad.$valid) {
			$scope.cajaErrores = true;
			$scope.edadError = true;
		} else if(!$scope.formAnadirSocio.edad.$valid && $scope.cajaErrores) {
			$scope.edadError = true;
		}

		if (!$scope.formAnadirSocio.email.$valid) {
			$scope.cajaErrores = true;
			$scope.emailError = true;
		} else if(!$scope.formAnadirSocio.email.$valid && $scope.cajaErrores) {
			$scope.emailError = true;
		}

		if ($scope.formAnadirSocio.$valid) {

			var promise = registroDataService.registrar($scope.secciones);

			promise.then(function () {
				$scope.mostrarMensajeExito = true;

			}, function(data) {

				$scope.errorPromise = "Parece que ha habido un problema con tu petición";

				if(data.status == 404)
					$scope.errorPromise = "Parece que no se ha encontrado el recurso solicitado";
				
				$scope.mostrarMensajeError = true;
			});

			$scope.doShow = true;
		}

	}
});



