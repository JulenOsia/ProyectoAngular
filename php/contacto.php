<?php
	/*$prueba = json_decode($_POST);*/
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json);

	// Conectando, seleccionando la base de datos	
	$link = mysqli_connect('localhost', 'root', '', 'anaitasunajo')
	    or die('No se pudo conectar: ' . mysql_error());
	
	// Realizar una consulta MySQL
	$query = "insert into contacto(nombre, apellidos, email, mensaje) values ('$obj->nombre', '$obj->apellidos', '$obj->email', '$obj->mensaje')";

	$result = mysqli_query($link, $query) or die('Consulta fallida: ' . mysql_error());

	$resultData = array("id"=>mysqli_insert_id($link));

	echo json_encode($resultData);
?>