<?php

if (isset($_GET["value"])) {
    //PASA EL VALOR GET A VARIABLE
	$ciudad = $_GET["value"];
	
$curl = curl_init();

date_default_timezone_set("America/Mexico_City");

$appid = "6f536d535ab5b4ecd70142d1eceed058";
$q = $ciudad;
$url = "https://api.openweathermap.org/data/2.5/weather?";
$urlParameters = $url."appid=".$appid."&q=".$q."&units=metric";


curl_setopt($curl, CURLOPT_URL, $urlParameters);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl);


//var_dump($result);
//echo $result;
//var_dump($array);

$array = json_decode($result,true);
echo "<h1>Ciudad: ".$array['name']."</h1>";
echo "<h1>Longitud: ".$array['coord']['lon']."</h1>";
echo "<h1>Latitud: ".$array['coord']['lat']."</h1>";
echo "<h1>Temperatura: ".$array['main']['temp']."°C</h1>";
echo "<h1>Hora en que amanece: ".date("H:i:s",$array['sys']['sunrise'])."</h1>";
echo "<h1>Hora en que anochece: ".date("H:i:s",$array['sys']['sunset'])."</h1>";
echo "<h1>Hora de actualizacion: ".date("H:i:s",$array['dt'])."</h1>";

curl_close($curl);
} else {

    echo "<h1>No esta registrada esa cuidad</h1>";
}
?>
