<?php 
// $targetName = $_GET["name"];

// $path = realpath('/srv/disk11/1909506/www/eduardovallejo.atwebpages.com/structures/');
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
//eliminamos patterns duplicados
$nameArray = array_unique($nameArray);
//ordenar alfabeticamente el array
sort($nameArray);
echo json_encode($nameArray);
?>
