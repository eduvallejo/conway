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
$pattern = [];//haremos un array con 3, el 0 sera x , el 1 la y y el 3 el rle
for ($i=0; $i < 3; $i++) { 
	$pattern[$i] = "";
}
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
			$pattern[2] = $pattern[2] . $sublinea;
			// echo $pattern[2];
			// echo '--- <br>';
		}
	}else if($linea[0] == "x" || $linea[0] == "y"){
		$posEqualx = strpos($linea, "=");
		// echo $posEqualx . "<br>";
		$posCommaX = strpos($linea, ",");
		// $posY = strpos($linea, "y");
		// echo $posY . "<br>";
		$pattern[0] = substr($linea, $posEqualx + 2, ($posCommaX - $posEqualx)-2);
		// echo "X = " . $pattern[0]  . "<br>";

		$posEqualY = strpos($linea, "=",  $posCommaX);
		// echo $posEqualY . "<br>";
		$posCommaY = strpos($linea, ",", $posEqualY);
		// echo $posCommaY . "<br>";
		$posY = strpos($linea, "y");
		// echo $posY . "<br>";
		$pattern[1] = substr($linea, $posEqualY + 2, ($posCommaY - $posEqualY)-2);
		// echo "Y = " . $pattern[1] . "<br>";
	}
}
// echo $pattern;

// foreach ($pattern as $key => $value) {
// 	echo  $value ;
// }

// $ar = array($pattern[0], $pattern[1], $pattern[2]);
// echo json_encode($ar);

echo json_encode($pattern);

// echo $pattern[0];	
// echo $pattern[1];	
// echo $pattern[2];	







 ?>