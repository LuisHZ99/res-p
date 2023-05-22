<?php
//VARIABLES PARA EL HOST
//$servername = "sql768.main-hosting.eu";
//$username = "u174842698_admin";
//$password = "Admin1234$";
//$database = "u174842698_world";

$servername = "localhost";
$username = "admin";
$password = "admin1234$";
$database = "world";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>