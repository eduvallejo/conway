<?php 
// $targetName = $_GET["name"];

$path = realpath('/var/www/conway/structures/');
$nameArray = array();
$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
	// echo 
	if (!strpos($name, "~")) {
		if (!is_dir($name)) {
	    	
			$name = basename($name);
			// $needles = array(".rle", ".lif", ".txt", ".zip");
			// $name = str_replace($needles, "", $name);
			// echo $name.'<br>';
			array_push($nameArray, $name);
		}    
	}
}
echo json_encode($nameArray);
?>
