<?php

$curl = curl_init();

//$url = "http://www.geoplugin.net/json.gp?ip=192.99.36.15".$_SERVER['REMOTE_ADDR'];

$url = "http://www.geoplugin.net/json.gp?ip=192.99.36.15";

curl_setopt($curl, CURLOPT_URL, $url);

curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($curl);

$array = json_decode($result, true);
echo $array ["geoplugin_countryCode"];

//$array = $result; //json_decode($result);
//echo $array;

curl_close($curl);
?>