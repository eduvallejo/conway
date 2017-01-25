<?php 
//este es el order pero mejorado. pone delante lo de despues del guion y al reves. tb pone las comillas y ()
//input file
$file = fopen("../structures/edu/still/block", "r");
if(!$file)	//same that if(!pfile)
{
	printf("couldn't open output");
	return 1;
}

// while( fscanf($file, "%s", $word) != EOF)
while(!feof($file))
{
	//get each time one line 
	$linea =(fgets($file));
	echo($linea) . "hola";
	// echo $linea;
	

	// we store the position into the string of our token (-)
	// $pos = strpos($linea,'(');

	// //substring(file, posición desde donde se lee, longitud de lo q se lee)
	// $sublinea1 = substr($linea, 
	// 							$pos, //+2 para no leer el guion ni el SP
	// 									strlen($linea)-($pos + 3)); //longitud necesaria para dar el formato nombreComun (nombreCientufico)

	//corregimos el hecho de q algunos nombres, en el original, comienzan con minuscula
	// $sublinea1 = ucfirst($sublinea1);

	// printf("%s\n", $sublinea1);
	// fwrite($output, '"');	
	// fwrite($output, $sublinea1);	
	
	// //el -1 es para borrar el SP y q el nombre quede pegado al )
	// // fwrite($output, ' (');	
	// fwrite($output, substr($linea, 1, $pos-1));
	// fwrite($output, '",');
	// fwrite($output, "\n");
}
//this prints resource id#5
// print($file);

fclose($file);






 ?>