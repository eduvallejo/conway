function getPattern(argument) {
  switch(argument) {
      case "blank":
        pattern = "!";
        break;
      case "tagalong":
        pattern = "21bo3b$18b4o3b$13bo2bob2o5b$13bo11b$4o8bo3bob2o5b$o3bo5b2ob2obobob5o$o9b2obobobo2b5o$bo2bo2b2o2bo3b3o2bob2ob$6bo2bob2o12b$6bo4b2o12b$6bo2bob2o12b$bo2bo2b2o2bo3b3o2bob2ob$o9b2obobobo2b5o$o3bo5b2ob2obobob5o$4o8bo3bob2o5b$13bo11b$13bo2bob2o5b$18b4o3b$21bo!";
        // alert(pattern);
        break;
      case "lightweightSpaceship":
        pattern = "bo2bo$o$o3bo$4o!";
        break;
      case "pufferTrain":
        pattern = "b3o11b3o$o2bo10bo2bo$3bo4b3o6bo$3bo4bo2bo5bo$2bo4bo8bo!";
        break;
      case "gosperGliderGun":
        pattern = "24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!";
        break;
      case "pentadecathlon":
        pattern = "2bo4bo2b$2ob4ob2o$2bo4bo!";
        break;
      case "104P177":
        pattern = "53bo113b$53bobo111b$53b2o112b2$17bobo147b$18b2o147b$18bo45bo102b$62b2o103b$63b2o102b8$38bo128b$38bobo42bo51b2o6b2o22b$38b2o41b2o47b2o2bo2bo4bo2bo2b2o17b$82b2o45bo2b2ob2o6b2ob2o2bo16b$127b2ob3o14b3ob2o14b$126bo4bo16bo4bo13b$129bo20bo16b$6bobo158b$7b2o33bo82bo3bo20bo3bo12b$7bo32b2o84b3o22b3o13b$41b2o124b3$120bo38bo7b$117bo3bo36bo3bo4b$42bo73bo4bo36bo4bo3b$bo40bobo71bo4bo36bo4bo3b$2bo39b2o71bo2bobo38bobo2bo2b$3o111bobo46bobob$114bob2o44b2obob$115b2o46b2o2b$115bo48bo2b$69b3o42bo50bob$69bo43bobo48bobo$62bo7bo42bobo48bobo$61b2o51bo50bob$54b3o4bobo103b$32bo21bo112b$33bo21bo111b$24bobo4b3o133b$25b2o87bo50bob$17bo7bo87bobo48bobo$18bo94bobo48bobo$16b3o95bo50bob$115bo48bo2b$115b2o46b2o2b$114bob2o44b2obob$85b3o26bobo46bobob$44b2o39bo29bo2bobo38bobo2bo2b$43bobo40bo29bo4bo36bo4bo3b$45bo70bo4bo36bo4bo3b$117bo3bo36bo3bo4b$120bo38bo7b3$45b2o120b$46b2o32bo45b3o22b3o13b$45bo33b2o44bo3bo20bo3bo12b$79bobo85b$129bo20bo16b$126bo4bo16bo4bo13b$127b2ob3o14b3ob2o14b$4b2o123bo2b2ob2o6b2ob2o2bo16b$5b2o41b2o80b2o2bo2bo4bo2bo2b2o17b$4bo42bobo85b2o6b2o22b$49bo117b8$23b2o142b$24b2o141b$23bo45bo97b$68b2o97b$68bobo96b2$33b2o132b$32bobo132b$34bo!";
        break;
      case "pinwheel":
        pattern = "6b2o4b$6b2o4b$$4b4o4b$2obo4bo3b$2obo2bobo3b$3bo3b2ob2o$3bobo2bob2o$4b4o4b$$4b2o$4b2o!";
        break;
      case "pulsar_synth":
        pattern = "128bo23b$129bo22b$127b3o22b$21b3o3b3o31b3o3b3o31b3o3b3o31b3o3b3o2b$8bo143b$6b2o11bo4bobo4bo27bo4bobo4bo27bo4bobo4bo14b3o10bo4bobo4bo$3bo3b2o10bo4bobo4bo27bo4bobo4bo14bo12bo4bobo4bo14bo12bo4bobo4bo$4bo14bo4bobo4bo27bo4bobo4bo15b2o10bo4bobo4bo15bo11bo4bobo4bo$2b3o16b3o3b3o15bobo13b3o3b3o16b2o13b3o3b3o31b3o3b3o2b$6b2o33b3o2b2o34b2o6bo61b$5b2o14b3o3b3o13bo2bo14b3o3b3o11bobo5b2o10b3o3b3o13bo17b3o3b3o2b$7bo11bo4bobo4bo10bo16bo4bobo4bo11bo5bobo7bo4bobo4bo11b2o14bo4bobo4bo$19bo4bobo4bo17bo9bo4bobo4bo27bo4bobo4bo10bobo14bo4bobo4bo$19bo4bobo4bo16b2o9bo4bobo4bo27bo4bobo4bo27bo4bobo4bo$48bobo101b$21b3o3b3o31b3o3b3o31b3o3b3o31b3o3b3o2b4$32bobo117b$33b2o117b$33bo118b2$21b3o3b3o31b3o3b3o31b3o3b3o31b3o3b3o2b$47bo104b$7bo11bo4bobo4bo16b2o9bo4bobo4bo11bo15bo4bobo4bo27bo4bobo4bo$8bo10bo4bobo4bo15b2o10bo4bobo4bo9bobo15bo4bobo4bo16bo10bo4bobo4bo$6b3o10bo4bobo4bo27bo4bobo4bo10b2o15bo4bobo4bo14b2o11bo4bobo4bo$21b3o3b3o31b3o3b3o31b3o3b3o17b2o12b3o3b3o2b$47b2o103b$9bo11b3o3b3o16bobo12b3o3b3o18bobo10b3o3b3o11bo19b3o3b3o2b$2b2o5bobo7bo4bobo4bo16bo10bo4bobo4bo16b2o9bo4bobo4bo10b2o15bo4bobo4bo$3b2o4b2o8bo4bobo4bo27bo4bobo4bo17bo9bo4bobo4bo9b2o16bo4bobo4bo$2bo16bo4bobo4bo27bo4bobo4bo27bo4bobo4bo13b2o12bo4bobo4bo$124bobo25b$21b3o3b3o31b3o3b3o16b3o12b3o3b3o16bo14b3o3b3o2b$86bo65b$87bo64b6$41b3o3b3o41b3o3b3o41b3o3b3o2b2$6bo13bo18bo4bobo4bo37bo4bobo4bo24bobo10bo4bobo4bo$4bobo14bo17bo4bobo4bo19bo17bo4bobo4bo24b2o11bo4bobo4bo$5b2o12b3o17bo4bobo4bo20bo16bo4bobo4bo25bo11bo4bobo4bo$41b3o3b3o20b3o18b3o3b3o21bo19b3o3b3o2b$122b2o28b$20b3o18b3o3b3o41b3o3b3o21b2o18b3o3b3o2b$22bo16bo4bobo4bo3b2o12b3o17bo4bobo4bo37bo4bobo4bo$21bo17bo4bobo4bo2bobo14bo17bo4bobo4bo17bo19bo4bobo4bo$39bo4bobo4bo4bo13bo18bo4bobo4bo17b2o18bo4bobo4bo$118bobo31b$41b3o3b3o41b3o3b3o41b3o3b3o2b6$76bo46bobo26b$75bo50bo25b$41b3o3b3o25b3o23b3o3b3o12bo3bo14b3o3b3o2b$126bo25b$39bo4bobo4bo21bo25bo4bobo4bo11bo2bo12bo4bobo4bo$14bo24bo4bobo4bo22bo24bo4bobo4bo12b3o12bo4bobo4bo$15bo23bo4bobo4bo20b3o24bo4bobo4bo27bo4bobo4bo$13b3o25b3o3b3o51b3o3b3o31b3o3b3o2b2$41b3o3b3o51b3o3b3o31b3o3b3o2b$16bobo20bo4bobo4bo47bo4bobo4bo27bo4bobo4bo$16b2o21bo4bobo4bo47bo4bobo4bo12b3o12bo4bobo4bo$17bo21bo4bobo4bo47bo4bobo4bo11bo2bo12bo4bobo4bo$126bo25b$41b3o3b3o51b3o3b3o12bo3bo14b3o3b3o2b$15b3o108bo25b$15bo107bobo26b$16bo135b$70b2o80b$69bobo80b$71bo80b2$141b3o3b3o2b2$139bo4bobo4bo$139bo4bobo4bo$139bo4bobo4bo$41b3o3b3o41b3o3b3o41b3o3b3o2b2$16b2o3bo17bo4bobo4bo37bo4bobo4bo39b3o3b3o2b$15bobo2b2o17bo4bobo4bo23bo13bo4bobo4bo37bo4bobo4bo$17bo2bobo16bo4bobo4bo22bobo12bo4bobo4bo37bo4bobo4bo$41b3o3b3o24bobo14b3o3b3o39bo4bobo4bo$75bo76b$41b3o3b3o41b3o3b3o22bo18b3o3b3o2b$39bo4bobo4bo37bo4bobo4bo21b2o27b$39bo4bobo4bo37bo4bobo4bo20b2o28b$39bo4bobo4bo37bo4bobo4bo50b$71b2o79b$41b3o3b3o20bobo18b3o3b3o22b3o27b$72bo51bo27b$74b3o46bo28b$74bo77b$75bo76b$111bo40b$111b2o39b$110bobo39b8$3o149b$2bo149b$bo!";
        break;
      case "R-pentomino":
        pattern = "b2o$oo$bo!";
        break;
      case "B52-Bomber":
        pattern = "b2o36b$b2o17bo18b$19bobo12bobo2b$20bo12bo5b$2o7b2o23bo2bob$2obo5b2o23bobobo$3bo23bo7bo2bo$3bo23b2o7b2ob$o2bo17b2o5bo10b$b2o18bo17b$21b3o15b$36b2ob$36b2ob$b2o36b$o2bo35b$obobo16bobo4b2o5b2o2b$bo2bo17b2o4b2o5b2obo$5bo12bo3bo15bo$2bobo12bobo18bo$18bo16bo2bo$36b2o!"
        break;
      case "QueenBeeTurningOscillator":
        pattern = "69b2o6b2o76b$67bo2bo6bo2bo74b2$70bo6bo77b$70bo6bo77b$68bo2bo4bo2bo75b$69b2o6b2o76b2$53b2o38b2o21b2o6b2o29b$52bobo38bobo20b2o6b2o29b$52bobob2o32b2obobo59b$53bobobo32bobobo60b$17b2o10b2o24bo12bo10bo12bo62b$16bo2bo2b4o2bo2bo22bo2bo9bo2bo6bo2bo9bo2bo61b$16b3o2b6o2b3o22bo6bobo7bo4bo7bobo6bo61b$19b10o25bo3bo2bo2bo6bo4bo6bo2bo2bo3bo61b$18bo10bo24bo3bo2bobo7bo4bo7bobo2bo3bo6b2o38b2o13b$18b2o8b2o24bo12bo2bo6bo2bo12bo5bobo38bobo12b$54bo2bo10bo10bo10bo2bo5bobob2o11b3o4b3o11b2obobo12b$23b2o30bo36bo7bobobo10bo2bo4bo2bo10bobobo13b$22b3o28bobobo32bobobo7bo12b2o2bo2bo2b2o12bo15b$21bo3bo26bobob2o32b2obobo6b2o9b2o3b2o2b2o3b2o9b2o15b$21bo3bo26bobo38bobo6b3o7bo2bo10bo2bo7b3o15b$21bo3bo27b2o38b2o7b3o7bo2bo10bo2bo7b3o15b$22b3o44b2o31b3o7bo2bo10bo2bo7b3o15b$37b2o29b2obo30b3o8b2o3b2o2b2o3b2o8b3o15b$37bo29b2o2b2o29b2o11b2o2bo2bo2b2o11b2o15b$35bobo30bo2b2o6b2o21bo12bo2bo4bo2bo12bo15b$35b2o32b3o7bo20bobobo11b3o4b3o11bobobo13b$8b2o13bo46bo9b3o16bobob2o32b2obobo12b$8b2o12bobo14b2o7bo3b2o6b2o20bo16bobo38bobo12b$12b2o7bo3bo13b2o5b3o3b2o5bobo14b2o22b2o38b2o13b$21bo3bo19bo13bo11bo4b2o77b$21bo3bo19b2o11b2o11bo83b$21bo3bo27b2o100b$21bo3bo11b2o12bob2o55b3ob2o10b2o27b$12b2o7bo3bo7bo3b2o12bo37b2o24bo10bo28b$8b2o12bobo9b3o2bo11bo22b2o36bo14b3o25b$8b2o13bo10bob3o12bo2bo12bo6bobo10bo3bo15b2o2b2o4bo11bo25b$32bo5bo13b2o12bo9bo10bo4bo13bob3o3bo3bo4b2o30b$32b2obo30b3o7b2o11bobobo8bo3bo3bo2bobo2bo4b2o30b$32b2ob2o53bobobo5b3o2b2o3bo3bo3bo36b$34bo56bo4bo2bo11bo5bo37b$22b3o47b2o18bo3bo2b2o11bo3bo38b$21bo3bo42b4o4b2o35b3o39b$21bo3bo42b3ob2o2b2o15b2o2bo23b2o32b$21bo3bo12b2o33bo22bobo22bobo31b$22b3o13bo58b2o2b2o20bo31b$23b2o14b3o59b2o20b2o30b$41bo113b$18b2o8b2o125b$18bo10bo29bo59b2o34b$19b10o11b2o5b2o11b2o53b2obo2bob2o7b2o4b2o4b2o9b$16b3o2b6o2b3o9bo5b2o10b2o54b2o2bo4bo6bo2bobo4bobo2bo8b$16bo2bo2b4o2bo2bo9bobo76bo10b3o10b3o8b$17b2o10b2o11b2o77bobo10b2o6b2o11b$46b2o85bo2b6o2bo10b$45bobo85b2o8b2o10b$46bo74bo33b$9b2o4b2o4b2o65bo32b3o31b$8bo2bobo4bobo2bo18b2o10bo31b2o36bo30b$8b3o10b3o16bob2o11b2o30b2o19b3o12b2o30b$11b2o6b2o18bo14b2o52bo46b$10bo2b6o2bo20bo66bo18bo26b$10b2o8b2o16b2obo55bo29bobo25b$38b2o55b2o25bo4bo2bo24b$96b2o22b2ob2o3b4o23b$120b2ob2o6bo7bo15b$109b2o9b2o2bo4bo2bo5b3o14b$109b2o11b2o5bobo5b2ob2o11b2o$130bo5b2o3b2o10b2o$137b2ob2o13b$29b2o78b3o43b$29bo51bo28b2o43b$15bo11bobo52b2o23b2o7b2o37b$14b3o10b2o52b2o24b3o7bo37b$2o11b2ob2o90bobo3b3o5b2o13b2ob2o13b$2o10b2o3b2o12b2o7bo3b2o22b2o10bo28b2o3bo7b2o12b2o3b2o10b2o$13b2ob2o13b2o5b3o3b2o23b2o9bobo54b2ob2o11b2o$37bo30bo12bobo42b2o10b3o14b$37b2o42bo2bo40bobo11bo15b$44b3o34bobo4b2o35bo29b$45b2o33bobo4b2o35b2o29b$13b2ob2o24b2o36bo8bo65b$2o10b2o3b2o5bo17b3o110b$2o11b2ob2o5bobo5b2o10bobo109b$14b3o5bo2bo4bo2b2o9b2o109b$15bo7bo6b2ob2o120b$23b4o3b2ob2o79b3o38b$24bo2bo4bo84bo37b$25bobo55b2o28bo3bo15b2o8b2o10b$26bo55b2o28bobo2bo15bo2b6o2bo10b$84bo25bo2bobo18b2o6b2o11b$30b2o78bo3bo16b3o10b3o8b$30bo79bo20bo2bobo4bobo2bo8b$31b3o77b3o18b2o4b2o4b2o9b$33bo74bo46b$10b2o8b2o85bobo45b$10bo2b6o2bo85b2o46b$11b2o6b2o25b2o63b2o11b2o10b2o17b$8b3o10b3o10b2o11b2o62bobo9bo2bo2b4o2bo2bo16b$8bo2bobo4bobo2bo6b2obo2bob2o6bo59b2o5bo9b3o2b6o2b3o16b$9b2o4b2o4b2o7b2o2bo4bo16bo49b2o5b2o11b10o19b$35bo21bo39b3o25bo10bo18b$36bobo16b3o41bo25b2o8b2o18b$98bo14bo41b$30b2o20b2o59b3o14b2o23b$31bo20b2o2b2o58bo13b3o22b$31bobo22bobo22b2o32b2o12bo3bo21b$32b2o23bo19b4o4b2o42bo3bo21b$39b3o19bo15b3ob2o2b2o42bo3bo21b$38bo3bo11b2o4bobo19bo47b3o22b$37bo5bo11bo3bo3bo41b2o13bo34b$36bo3bo3bo3b2o2b3o5bo3bo21bo17b2o12b2ob2o32b$30b2o4bo2bobo2bo3bo3bo8bo3bo11b2o7b3o17bo12bob2o32b$30b2o4bo3bo3b3obo13bo3bo11bo9bo12b2o13bo5bo32b$25bo11bo4b2o2b2o15bobo12bobo6bo13b2o13b3obo10bo13b2o8b$25b3o14bo21bo14b2o34bo2b3o9bobo12b2o8b$28bo10bo76b2o3bo7bo3bo7b2o12b$27b2o10b2ob3o57b2o12b2o11bo3bo21b$100bob2o25bo3bo21b$83bo11b2o3bo7b2o19bo3bo21b$77b2o4bo11bo4bo8bo19bo3bo21b$13b2o38b2o22b2o14bobo4bo2bo2b3o5b2o13bo3bo7b2o12b$12bobo38bobo16bo20b2o6b2o3bo7b2o14bobo12b2o8b$12bobob2o32b2obobo16b3o9bo46bo13b2o8b$13bobobo11b3o4b3o11bobobo20bo7b3o32b2o35b$15bo12bo2bo4bo2bo12bo21b2o6b2o2bo30bobo35b$15b2o11b2o2bo2bo2b2o11b2o29b2o2b2o29bo37b$15b3o8b2o3b2o2b2o3b2o8b3o30bob2o29b2o37b$15b3o7bo2bo10bo2bo7b3o31b2o44b3o22b$15b3o7bo2bo10bo2bo7b3o7b2o38b2o27bo3bo21b$15b3o7bo2bo10bo2bo7b3o6bobo38bobo26bo3bo21b$15b2o9b2o3b2o2b2o3b2o9b2o6bobob2o32b2obobo26bo3bo21b$15bo12b2o2bo2bo2b2o12bo7bobobo32bobobo28b3o22b$13bobobo10bo2bo4bo2bo10bobobo7bo36bo30b2o23b$12bobob2o11b3o4b3o11b2obobo5bo2bo10bo10bo10bo2bo54b$12bobo38bobo5bo12bo2bo6bo2bo12bo24b2o8b2o18b$13b2o38b2o6bo3bo2bobo7bo4bo7bobo2bo3bo24bo10bo18b$61bo3bo2bo2bo6bo4bo6bo2bo2bo3bo25b10o19b$61bo6bobo7bo4bo7bobo6bo22b3o2b6o2b3o16b$61bo2bo9bo2bo6bo2bo9bo2bo22bo2bo2b4o2bo2bo16b$62bo12bo10bo12bo24b2o10b2o17b$60bobobo32bobobo53b$59bobob2o32b2obobo52b$29b2o6b2o20bobo38bobo52b$29b2o6b2o21b2o38b2o53b2$76b2o6b2o69b$75bo2bo4bo2bo68b$77bo6bo70b$77bo6bo70b2$74bo2bo6bo2bo67b$76b2o6b2o!";
        break;
      case "172P9":
        pattern = "18bo9bo$18b3o5b3o$21bo3bo$20bo2bo2bo$20bo5bo2$21bo3bo$22b3o5$22b3o$21bo3bo2$22bobo2$19b2obobob2o$2o20bobo20b2o$bo15bo2bobobobo2bo15bo$bob2o12bobo2bobo2bobo12b2obo$2bo3bo6bo8bobo8bo6bo3bo$7bo4bo2bob5o3b5obo2bo4bo$3bo3bo4bo21bo4bo3bo$7bo4bo2bob5o3b5obo2bo4bo$2bo3bo6bo8bobo8bo6bo3bo$bob2o12bobo2bobo2bobo12b2obo$bo15bo2bobobobo2bo15bo$2o20bobo20b2o$19b2obobob2o2$22bobo2$21bo3bo$22b3o5$22b3o$21bo3bo2$20bo5bo$20bo2bo2bo$21bo3bo$18b3o5b3o$18bo9bo!"
        break;
  }   
  drawPattern(pattern);
}

//para debugear con body onload y no tener q clickar un boton cada vez
function pattern(argument) {
  //tagalong
  //pattern = "21bo3b$18b4o3b$13bo2bob2o5b$13bo11b$4o8bo3bob2o5b$o3bo5b2ob2obobob5o$o9b2obobobo2b5o$bo2bo2b2o2bo3b3o2bob2ob$6bo2bob2o12b$6bo4b2o12b$6bo2bob2o12b$bo2bo2b2o2bo3b3o2bob2ob$o9b2obobobo2b5o$o3bo5b2ob2obobob5o$4o8bo3bob2o5b$13bo11b$13bo2bob2o5b$18b4o3b$21bo!";
//lighjtweight
  // pattern = "bo2bo$o$o3bo$4o!";
  // pattern = "oo$ooob!" //muere en 3gen
  // pattern = "bo2bo$o$o3bo$4o!";
   //pattern = "o$o$o!" //m
	//glider
	pattern = "o$obo$oo!";
 	// pattern = "ooo!";
  	//pattern = "o$o$o!"
  	//pufferTrain
  	// pattern = "b3o11b3o$o2bo10bo2bo$3bo4b3o6bo$3bo4bo2bo5bo$2bo4bo8bo!";
  	//pattern = "o$o$o!";
  drawPattern(pattern);
}
function drawPattern(pattern) {
  console.log("drawPattern : " + pattern);
  decodeRle(pattern);
 
  drawVeryFirstGrid();
  // //despues de imprimir la primera gen se empieza el bucle de grid1 grid2
  drawPixels1();
  //drawPixels es las dos de abajo: check y draw
  // checkRules();
  // //
  // drawGrid();
}
