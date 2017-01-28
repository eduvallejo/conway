<?php 

$targetName = $_GET["name"];
// echo "TARGET: " . $targetName ."<br>";

$path = (loopDirs("../../structures"));
//loop dirs
function loopDirs($dir){
	$targetName = $_GET["name"];
	foreach(glob(dirname(__FILE__) . "/" . $dir . "/*") as $filename){
	   	// echo "base: " . basename($filename) ."<br>";
	   	if(!is_dir($filename)){
	   		if (basename($filename) == $targetName) {//caber2.lif
	   			// echo "<br> FOUND BARBER!!!!<option value='" . $filename . "'>".$filename."</option>";
	   			// echo "<br>eo" . strpos($filename, basename($filename));
	   			// echo "Found in: " . $dir . "<br>";
	   			$filename = substr($filename, strpos($filename, basename($filename)));
				// echo "newString: " . $filename . "<br>"; 
				$pathFound = $dir . "/" . $filename . "<br>"; 
				// echo "FOUND : " . basename($filename) ."<br>";
				return $pathFound;
	   		}else{
	   			// echo "not target : " . $filename ."<br>" ;
	   		}
	   	}else if(is_dir($filename)) {
	   		// echo 'is_dir: ';
	   		// echo "is_dir: " . $filename ."<br>" ;
	   		$newDir = $dir . "/" . basename($filename) ;
	   		// echo "newDir del loop: " . $newDir . "<br>";
			$pathFound= loopDirs($newDir);
	   	}
	}
	return $pathFound;
}

/////
// echo "PATH: " . $path;
// echo "correct path: ../../structures/" . $_GET["name"] . "<br>";
$file = fopen("../../structures/" . $targetName,"r");
// $file = fopen($path, "r");
while(!feof($file)){
	//get each time one line 
	$linea =(fgets($file));
	if ($linea[0] != "#" && $linea[0] != "x" && $linea[0] != "y") {
			# code...
		// we store the position into the string of our token: parentesis, comas, etc..
		$pos = strpos($linea, "\n");
		//filtramos solo los q llevan una coma
		if ($pos !== false) {
		
			$sublinea = substr($linea, 0, $pos); 
			echo $sublinea;
		}
	}
}
	







 ?>