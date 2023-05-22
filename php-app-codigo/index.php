<?php

$curl = curl_init();

$ip = $_SERVER['REMOTE_ADDR'];

echo "La dirección IP es: " . $ip . "<br>";

$url = "http://www.geoplugin.net/json.gp?ip=$ip";

curl_setopt($curl, CURLOPT_URL, $url);

curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($curl);

$array = json_decode($result, true);
echo $array ["geoplugin_countryCode"];


curl_close($curl);

?>
