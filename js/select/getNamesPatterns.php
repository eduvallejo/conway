<?php 
// $targetName = $_GET["name"];

$nameArray = array();
for ($i=0; $i < 256; $i++) { 
	array_push($nameArray, $i);	
}
//eliminamos patterns duplicados
$nameArray = array_unique($nameArray);
//ordenar alfabeticamente el array
sort($nameArray);
echo json_encode($nameArray);
?>
