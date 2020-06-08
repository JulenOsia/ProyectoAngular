<?php

if(isset($_POST['anadirJugador'])) {

    $data = json_decode(file_get_contents("php://input"));
    $nombre = mysql_real_escape_string($data->nombre);
    $apellido = mysql_real_escape_string($data->apellido);
    $email = mysql_real_escape_string($data->email);
    $mensaje = mysql_real_escape_string($data->mensaje);
    mysql_connect("localhost", "root", "") or die(mysql_error());
    mysql_select_db("anaitasunajo") or die(mysql_error());
    mysql_query("INSERT INTO deportes * VALUES ('$nombre', '$apellido','$email','$mensaje')");
    Print "Your information has been successfully added to the database."; 


}