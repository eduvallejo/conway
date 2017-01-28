<?php 
// $target = "structures/jslife/fuses/1803278.lif"
$target = "caber2.lif";
$dir    = 'structuresDebug/jslife/applications/'; //3 elementos en esta folder
// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      echo "filename:" . $file . "<br>";
      if($file == $target ) echo "TARGET! <br>";
    }
    closedir($dh);
  }
}

 ?>