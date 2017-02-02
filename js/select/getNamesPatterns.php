<?php 
// $targetName = $_GET["name"];

// $path = realpath('/var/www/html/conway/structuresDebug/');
$path = dirname(__FILE__); //echoes path: /var/www/html/conway/js/select
$path = str_replace("js/select", "structures", $path);

// ../../structures/
$nameArray = array();
$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
	// echo 
	if (!strpos($name, "~")) {
		if (!is_dir($name)) {
			$name = basename($name);
			array_push($nameArray, $name);
		}    
	}
}
echo json_encode($nameArray);
?>
