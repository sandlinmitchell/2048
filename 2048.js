function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}
include(processingjs/processing.js);

var screen = 1;
var score = 0;
var x = 0;
var Tiles = [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]];
/** Randomize the Array **/ 
var randomArray = function(){           
       var r1= floor(random(0,4));
       var r2= floor(random(0,4));
       var r3= floor(random(0,4));
       var r4= floor(random(0,4));
       var num1= random(0,2);
       var num2= random(0,2);

       if(Tiles[r1][r2]===0){
        if(num1 === 0){
            Tiles[r1][r2]=2; 
        }
        if(num1 === 1){
         Tiles[r1][r2]=4;   
        }
       }
       if(Tiles[r3][r4] === 0){
        if(num2 === 0){
            Tiles[r3][r4]=2; 
        }
        if(num2 === 1){
         Tiles[r3][r4]=4;   
        }
       }
   };
   randomArray();
/**/
draw = function() {
    
/** Title Screen **/    
    if(screen === 0){
    background(209, 208, 198);
    //Title
    fill(0, 0, 0);
    textSize(100);
    text("2048",94,100);
    
    //Play Button
    noStroke();
    fill(255, 213, 0);
    rect(68,122,267,60);
    fill(255, 255, 255);
    textSize(33);
    text("Classic Mode",119,165);
    rect(100,155,15,15);
    rect(100,136,15,15);
    rect(82,155,15,15);
    rect(82,136,15,15);
    
    //Time Trial
    fill(237, 117, 52);
    rect(68,201,267,60);
    fill(255, 255, 255);
    textSize(33);
    text("Time Trial",141,241);
    fill(237, 117, 52);
    strokeWeight(3);
    stroke(255, 255, 255);
    arc(101,231,50,50,100,459);
    line(100,212,100,230);
    line(115,241,100,230);
    fill(255, 0, 0);
    textSize(17);
    }

/**  **/
    if(mousePressed && mouseX>71 && mouseY>124 && mouseX<331 && mouseY<181){
            screen = 1;
    }
    
    if(screen === 1){
     background(255, 255, 255);   
     
     //Logo
     noStroke();
     fill(255, 204, 0);
     rect(23,12,90,90,9);
     fill(255, 255, 255);
     textSize(40);
     text("2048", 24,73);
     
     //Scores
     fill(189, 176, 176);
     rect(152,15,100,50,9);
     fill(255, 255, 255);
     textSize(21);
     text("Score",173,37);
     fill(189, 176, 176);
     rect(273,15,100,50,9);
     fill(255, 255, 255);
     textSize(21);
     text("Best",299,37);
     
     //Main Menu Button
     fill(255, 140, 0);
     rect(153,68,100,34,9);
     fill(255, 255, 255);
     text("Menu",174,93);
     fill(255, 0, 0);
    if(mousePressed && mouseX>157 && mouseY>71 && mouseX<250 && mouseY<100){
        screen = 0;
    }
     //Leader Board
     fill(255, 140, 0);
     rect(274,68,100,34,9);
     fill(255, 255, 255);
     textSize(14);
     text("Click To Win",283,90);
     fill(255, 0, 0);
     
    //PLaying area
     fill(135, 135, 135);
     rect(70,113,270,270,10);
     fill(189, 189, 189);
  
/** Number Tiles **/
     for(var i=0; i<Tiles.length;i++){
         for(var j=0;j<Tiles[i].length;j++){
             rect(78+65*i,120+65*j,60,60,4);
       if(Tiles[j][i]===2){
            fill(212, 212, 212);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("2",93+65*i,168+65*j);
           fill(184, 184, 184);
       }
       if(Tiles[j][i]===4){
            fill(240, 230, 192);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("4",94+65*i,168+65*j);
           fill(184, 184, 184);
       }
       if(Tiles[j][i]===8){
            fill(255, 171, 125);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("8",93+65*i,168+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===16){
            fill(255, 100, 61);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("16",75+65*i,168+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===32){
            fill(255, 87, 87);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("32",77+65*i,168+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===64){
            fill(255, 51, 51);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(55);
            text("64",78+65*i,168+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===128){
            fill(255, 248, 110);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(38);
            text("128",75+65*i,162+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===256){
            fill(255, 237, 74);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(35);
            text("256",79+65*i,162+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===512){
            fill(255, 234, 43);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(35);
            text("512",79+65*i,162+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===1024){
            fill(255, 227, 48);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(28);
            text("1024",76+65*i,160+65*j);
           fill(184, 184, 184);
       }
              if(Tiles[j][i]===2048){
            fill(255, 213, 0);
            rect(78+65*i,120+65*j,60,60,4);
            fill(0, 0, 0);
            textSize(27);
            text("2048",79+65*i,160+65*j);
           fill(184, 184, 184);
       }
     }
     }
/** Key Codes **/

     if(keyPressed && keyCode === RIGHT){
         for(var i=0; i<Tiles.length;i++){
         for(var j=0;j<Tiles[i].length-1;j++){
             if(Tiles[i][j] !== 0){
                 Tiles[i][j+1]= Tiles[i][j];
                 Tiles[i][j] =0;
             }
     }
         }
     }

          if(keyPressed && keyCode === LEFT){
         for(var z=0; z<Tiles.length;z++){
         for(var q=Tiles[z].length-1;q>0;q--){
             if(Tiles[z][q] !== 0){
                 Tiles[z][q-1] = Tiles[z][q];
                 Tiles[z][q] = 0;
             }
         
     }
         }
     }
    if(keyPressed && keyCode === UP){
         for(var v=3; v>0;v--){
         for(var z=0;z<4;z++){
             if(Tiles[v][z] !== 0){
                 Tiles[v-1][z]= Tiles[v][z];
                 Tiles[v][z] =0;
             }
         
     }
         }
     }
          if(keyPressed && keyCode === DOWN){
         for(var i=0; i<Tiles.length-1;i++){
         for(var j=0;j<Tiles[i].length;j++){
             if(Tiles[i][j] !== 0){
                 Tiles[i+1][j]= Tiles[i][j];
                 Tiles[i][j] =0;
             }
         
     }
         }
     }
     
/** Score **/
     if(score<99){
         x=0;
     }
     if(score>9){
         x=-5;
     }
     if(score>99){
         x=-11;
     }
     if(score>999){
         x=-19;
     }
     if(score===10000){
         x=-25;
     }
     if(score>10000){
         score=10000;
     }
     fill(255, 255, 255);
textSize(21);
text(score,196+x,56);
fill(189, 189, 189);
}

/** Leader board **/
     if(mousePressed && mouseX>278 && mouseY>69 && mouseX<367 && mouseY<100){
            score= 10000;
        }
    
    if(screen === 2){
        background(255, 255, 255);
        
        //back
        fill(194, 194, 194);
        rect(8,7,84,32,9);
        fill(255, 255, 255);
        textSize(25);
        text("Back",22,31);
        
        //Fake Leader Board
        
        if(mousePressed && mouseX>11 && mouseY>11 && mouseX<90 && mouseY<37){
                screen=1;
        }
    }

};
/** Score **/
if(score === 10000 && screen === 1){
        fill(161, 161, 161,80);
        rect(0,0,400,400);
        fill(224, 224, 224);
        rect(121,200,175,60,15);
        fill(0, 0, 0);
        text("You win!",165,237);
}


   // var label = mouseX +"," + mouseY;
   // ellipse(mouseX, mouseY, 12, 12); 
   //  text(label,mouseX + 10,mouseY);
