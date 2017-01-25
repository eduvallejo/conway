<?php 
$sample = "#N Turing machine
#O Paul Rendell
#C A pattern capable of turing-complete computation. Created in April 
#C 2000.
#C www.conwaylife.com/wiki/index.php?title=Turing_machine
x = 1714, y = 1647, rule = s23/b3
247b2o1465b$248bo1465b$248bobo1463b$249b2o1463b6$257b2o1455b$256b2o
1456b$258bo1455b5$265bo1448b$264b2o1448b$264bobo1447b6$272b2o1440b$
271b2o1441b$273bo1440b5$280bo1433b$279b2o1433b$279bobo1432b6$287b2o";
$strlen = strlen($sample);
printf("strlen = " . (strlen($sample))."\n");
// for( $i = 0; $i <= strlen($sample); $i++ ) {
for( $i = 0; $i <= $strlen; $i++ ) {
    $char = substr( $sample, $i, 1 );
    // $char contains the current character, so do your processing here
	// printf($char . ", ");	
	// echo json_encode($char);
	if (($char) == "\n") {
		printf("new line after: " . substr( $sample, $i-1, 1 ) . "\n");
		
	}
}

// echo json_encode($sample);
printf("\n");

 ?>