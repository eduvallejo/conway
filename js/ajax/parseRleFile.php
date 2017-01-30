<?php 
//tb tratar te pasar el tamaño del pattern (x, y)
$file = fopen("hotel2.lif","r");
$pattern[]= array("rle" => "", "x" => "", "y" => "");
// while( fscanf($file, "%s", $word) != EOF)
while(!feof($file))
{
	//get each time one line 
	$linea =(fgets($file));
	if ($linea[0] != "#" && $linea[0] != "x" && $linea[0] != "y") {
			# code...
		// we store the position into the string of our token: parentesis, comas, etc..
		$pos = strpos($linea, "\n");
		//filtramos solo los q llevan una coma
		if ($pos !== false) {
			//substring(file, posición desde donde se lee, longitud de lo q se lee)
			$sublinea = substr($linea, 
										0 , //+2 para no leer el guion ni el SP
												$pos); 
			// printf($sublinea);
			// echo $sublinea . "<br>";
			$pattern["rle"] = $sublinea; //
			// echo $pattern["rle"];//
		}
	}else if($linea[0] == "x" || $linea[0] == "y"){
		echo'TEST<br>';
		$posEqualx = strpos($linea, "=");
		echo $posEqualx . "<br>";
		$posCommaX = strpos($linea, ",");
		// $posY = strpos($linea, "y");
		// echo $posY . "<br>";
		$pattern["x"] = substr($linea, $posEqualx + 1, ($posCommaX - $posEqualx)-1);
		echo "Xtimes2 " . $pattern["x"]*2 . "<br>";

		$posEqualY = strpos($linea, "=",  $posCommaX);
		// echo $posEqualY . "<br>";
		$posCommaY = strpos($linea, ",", $posEqualY);
		// echo $posCommaY . "<br>";
		$posY = strpos($linea, "y");
		// echo $posY . "<br>";
		$pattern["y"] = substr($linea, $posEqualY + 1, ($posCommaY - $posEqualY)-1);
		echo "Xtimes2= " . $pattern["y"]*2 . "<br>";
	}
		echo $pattern["rle"];
}



 ?>