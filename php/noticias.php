<?php
	/*$prueba = json_decode($_POST);*/
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json);

	// Conectando, seleccionando la base de datos	
	$link = mysqli_connect('localhost', 'root', '', 'anaitasunajo')
	    or die('No se pudo conectar: ' . mysql_error());
	
	// Realizar una consulta MySQL
	$query = "select titulo, descripcion from noticias"

	$result = mysqli_query($link, $query) or die('Consulta fallida: ' . mysql_error());

	$resultData = array("id"=>mysqli_insert_id($link));

	echo json_encode($resultData);


  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
 
  // Conectamos a la base de datos y hacemos un select
  $link = new mysqli("localhost", "usuario", "password", "basededatos");
 
  $query = "select titulo, descripcion from noticias"
 
  $outp = "";
  
  $result = mysqli_query($link, $query) or die('Consulta fallida: ' . mysql_error());

  // Formateamos nuestro JSON
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if ($outp != "") {$outp .= ",";}
      $outp .= '{"Titulo":"'  . $rs["titulo"] . '"<br/>';
      $outp .= $rs["descripcion"]        . '",';
  }
  $outp ='{"records":['.$outp.']}';
  $link->close();
 
  echo($outp);
?>