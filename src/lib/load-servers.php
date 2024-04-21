<?php
// needs to be changed to the absolute path of your servers.php file
include_once "/var/www/html/pokemon-showdown-client/config/servers.inc.php";

$json = json_encode($PokemonServers, JSON_FORCE_OBJECT);
if ($json === false) print("{}");
else print($json);
