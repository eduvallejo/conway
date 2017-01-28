$file = fopen("../../structures/" . $fileName,"r");
while(!feof($file)){
	//get each time one line 
	$linea =(fgets($file));
	if ($linea[0] != "#" && $linea[0] != "x" && $linea[0] != "y") {
			# code...
		// we store the position into the string of our token: parentesis, comas, etc..
		$pos = strpos($linea, "\n");
		//filtramos solo los q llevan una coma
		if ($pos !== false) {
		
			$sublinea = substr($linea, 
										0 ,
												$pos); 
			echo $sublinea;
		}
	}
}