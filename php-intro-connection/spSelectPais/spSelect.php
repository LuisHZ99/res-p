<?php
  include ('spConnect.php');
  
  //var_dump($_SERVER);
  $PaisNombre = $_GET['PaisNombre'];

  if($_SERVER["REQUEST_METHOD"] == "GET"){
  $sql = "CALL `u174842698_world`.`spGetPaisG`('$PaisNombre');"; 
  $query = $conn -> prepare($sql); 
  $query -> execute(); 
  $results = $query -> fetchAll(PDO::FETCH_OBJ); 

$resultsJson = json_encode($results);
echo $resultsJson;
  }
?>