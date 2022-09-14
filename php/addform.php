<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
// Get all parameters using POST method
$full_name=$_POST['full_name'];
$email=$_POST['email'];
$phone_number=$_POST['phone_number'];
$message=$_POST['message'];

// Insert parameters into form table
$query=$mysqli->prepare("INSERT INTO form(full_name,email,phone_number,message) values(?,?,?,?)");
$query->bind_param("ssss",$full_name,$email,$phone_number,$message);
$query->execute();

// Return response as JSON
$response=[];
$response["success"]=true;
// Print json response
echo json_encode($response);
?>