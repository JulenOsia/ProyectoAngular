<?php

require __DIR__ . 'conexion.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

class Socios {

    private $db;


    public function __construct()
    {
        $this->db = new Database
    }

    public function checkSocio($dni, $nombre){
        $this->db->conectar();
        $dni = $_POST['DNI'];
        $nombre = $_POST['nombre'];
        $consulta = ""
    }
    

}

$response = [];

if(isset($_POST) && isset($_POST['DNI'])) {
    $dni = $_POST['DNI'];
    if($_POST['DNI'] == "73589639F") {
        $resultado = "Usted es socio de Anaitasuna";
    }
    else {
        $resultado = "Usted no es socio de Anaitasuna";
    }
    return $resultado;
}

print_r($resultado);