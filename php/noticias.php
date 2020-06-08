<?php
	/*$prueba = json_decode($_POST);*/
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json);

	// Conectando, seleccionando la base de datos	
	$link = mysqli_connect('localhost', 'root', '', 'anaitasunajo')
	    or die('No se pudo conectar: ' . mysql_error());
	
	// Realizar una consulta MySQL
	$query = "SELECT CASE WHEN EXISTS (
        SELECT dni,nombre
        FROM socios
        WHERE dni = '$obj->dni' AND nombre = '$obj->nombre'
    )
    THEN CAST('true')
    ELSE CAST('false')
    END";

	$result = mysqli_query($link, $query) or die('Consulta fallida: ' . mysql_error());

	$resultData = array("id"=>mysqli_insert_id($link));

	echo json_encode($resultData);
?>