<?php
$curl = curl_init();

$appid = "6f536d535ab5b4ecd70142d1eceed058";
$q = "Pachuca";
$url = "https://api.openweathermap.org/data/2.5/weather?";
$urlParameters = $url."appid=".$appid."&q=".$q;


curl_setopt($curl, CURLOPT_URL, $urlParameters);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($curl);

//var_dump($result);
//echo $result;

$array = json_decode($result,true);
//var_dump($array);
echo "<h1>Ciudad: ".$array['name']."</h1>";
echo "<h1>Longitud: ".$array['coord']['lon']."</h1>";
echo "<h1>Latitud: ".$array['coord']['lat']."</h1>";

curl_close($curl);
?>