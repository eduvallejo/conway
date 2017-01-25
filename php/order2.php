<?php 
//este es el order pero mejorado. pone delante lo de despues del guion y al reves. tb pone las comillas y ()
//input file
$file = fopen("treesCat", "r");
if(!$file)	//same that if(!pfile)
{
	printf("couldn't open output");
	return 1;
}

//output
$output = fopen("ordered2Cat", "w");


// while( fscanf($file, "%s", $word) != EOF)
while(!feof($file))
{
	//get each time one line 
	$linea =(fgets($file));

	// we store the position into the string of our token (-)
	$pos = strpos($linea,'(');

	//substring(file, posición desde donde se lee, longitud de lo q se lee)
	$sublinea1 = substr($linea, 
								$pos, //+2 para no leer el guion ni el SP
										strlen($linea)-($pos + 3)); //longitud necesaria para dar el formato nombreComun (nombreCientufico)

	//corregimos el hecho de q algunos nombres, en el original, comienzan con minuscula
	$sublinea1 = ucfirst($sublinea1);

	printf("%s\n", $sublinea1);
	fwrite($output, '"');	
	fwrite($output, $sublinea1);	
	
	//el -1 es para borrar el SP y q el nombre quede pegado al )
	// fwrite($output, ' (');	
	fwrite($output, substr($linea, 1, $pos-1));
	fwrite($output, '",');
	fwrite($output, "\n");



	//this outputs nombreCientifo at the begining
	//strpos finds the needle and returns its position into string
	// if (strpos($linea,'-') !== false) {
	// 	//substr recorta el string 
	// 	//1er parametro-el string de entrada
	// 	//2º parametro-el punto a partir del q se recorta( lo de +2 para quitar el - y el sp)

	// 	$sublinea1 = substr($linea, strpos($linea, '-')+2);
	// 	fwrite($output, $sublinea1);
	// 	// fwrite($output, "\n");
	// 			// print($linea);
 //    }	
			
}
//this prints resource id#5
// print($file);

fclose($file);
fclose($output);






 ?>