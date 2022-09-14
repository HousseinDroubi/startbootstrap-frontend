<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


$full_name=$_POST['full_name'];
$email=$_POST['email'];
$phone_number=$_POST['phone_number'];
$message=$_POST['message'];

$query=$mysqli->prepare("INSERT INTO form(full_name,email,phone_number,message) values(?,?,?,?)");
$query->bind_param("ssss",$full_name,$email,$phone_number,$message);
$query->execute();

$response=[];
$response["success"]=true;
echo json_encode($response);

?>