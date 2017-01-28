<?php 
// $target = "structures/jslife/fuses/1803278.lif"
$target = 'caber2.lif';
// $target = str_replace(array("\r", "\n"), "", $target);
$dir    = 'structuresDebug/'; //3 elementos en esta folder
// $files = scandir($dir);
// print_r($files);
// echo "<br>";

listFolderFiles($dir, $target);

function listFolderFiles($dir, $target){
    
    $ffs = scandir($dir);
    echo '<ol>';
    foreach($ffs as $ff){
        if($ff != '.' && $ff != '..'){
            echo '<li>';
            echo $ff . '<br>'; //imprimen tanto si es file como folder
            //comprobamos si es el archivo"\r",
            if ($ff === $target) {
                echo 'TARGET OK';
            }
            if(is_dir($dir.'/'.$ff)) {
                listFolderFiles($dir.'/'.$ff);
            }
            echo '</li>';
        }
    }
    echo '</ol>';
}

 ?>