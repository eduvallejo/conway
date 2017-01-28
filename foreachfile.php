<?php 

// $target = "caber2.lif";
// $dir    = 'structuresDebug/jslife/applications/'; //3 elementos en esta folder
// // Open a directory, and read its contents
// if (is_dir($dir)){
//   if ($dh = opendir($dir)){
//     while (($file = readdir($dh)) !== false){
//       echo "filename:" . $file . "<br>";
//       if($file == $target ) echo "TARGET! <br>";
//     }
//     closedir($dh);
//   }
// }
// loopDirs("/var/www/conway/structuresDebug");
loopDirs("structuresDebug");
function loopDirs($dir){
	// echo $dir;
	foreach(glob(dirname(__FILE__) . "/" . $dir . "/*") as $filename){
	   	// $filename = basename($filename);
	   	if (is_dir($filename)) {
	   		// echo 'is_dir: ';
	   		// echo "<option value='" . $filename . "'>".$filename."</option>";
	   		$newDir = $dir . "/" . basename($filename) ;
	   		// echo $newDir;
	   		loopDirs($newDir);
	   	}else{
	   		if (basename($filename) == "barbershop.lif") {
	   			echo "<br> FOUND BARBER!!!!<option value='" . $filename . "'>".$filename."</option>";
	   			echo "<br>eo" . strpos($filename, basename($filename));
	   			$filename = substr($filename, strpos($filename, basename($filename)));
				echo "newString: " . $filename; 
	   			
	   		}else{
		   		// echo 'not_dir';
		   		// echo "<option value='" . $filename . "'>".$filename."</option>";
	   		}
	   	}
	}
}
 ?>	

