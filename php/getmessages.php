<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$query=$mysqli->prepare("SELECT message from form");
$query->execute();
$array=$query->get_result();

$response=[];
while($a = $array->fetch_assoc()){
    $response[]= $a;
}
echo json_encode($response);
?>