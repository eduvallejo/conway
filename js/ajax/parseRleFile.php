<?php 
// $_GET['patternName'];
// $file = fopen("sampleTuring","r");
$file = fopen("turing.rle","r");

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
		printf($sublinea);
		// echo (json_encode($sublinea)) . "\n";
		echo $sublinea;
	}
}
}



 ?>