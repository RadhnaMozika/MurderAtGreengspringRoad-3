var player, panel, choice, answer, map, mapObj;

var pattersonImg, pabstImg, harwImg, hegannImg, cameronImg;
var kitImg, iraImg, bertImg, gerardImg, peterImg, policeImg, jenkinImg;
var earringImg, scalpelImg, fireRemains, mapImg;

var circleImg, characterImg;
var startImg, endImg, choiceBG, bgImg;

var gameState = -1;


function preload(){
  //loading background images
  bgImg = loadImage("images/Greenspring-Dawnice.png");
  choiceBG = loadImage("images/choiceBG.jpg");
  endImg = loadImage("images/end.jpg");
  startImg = loadImage("images/start.jpg");

  //loading character and place mini avatar
  characterImg = loadImage("images/character.png");
  circleImg = loadImage("images/circle.png");

  //loading character images
  harwImg = loadImage("images/DennisHarw.png");
  pattersonImg = loadImage("images/VernePatterson.png");
  pabstImg = loadImage("images/JonathonPabst.png");
  hegannImg = loadImage("images/KatherineHegann.png");
  cameronImg = loadImage("images/LaverneCameron.png");

  iraImg = loadImage("images/Ira.png");
  kitImg = loadImage("images/Kit.png");
  bertImg = loadImage("images/Bert.png");
  gerardImg = loadImage("images/GerardPlankton.png");
  peterImg = loadImage("images/PeterHugh.png");
  policeImg = loadImage("images/police.png");
  jenkinImg = loadImage("images/jenkin.png");

  //loading clue images
  scalpelImg = loadImage("images/scalpelImg.png");
  earringImg = loadImage("images/earring.png");
  fireImg = loadImage("images/fire.png");

  mapImg = loadImage("images/map.png");
}


function setup() {
  createCanvas(1350, 650);

  //creating map object
  mapObj = createSprite(0, 0, 20, 20);
  mapObj.addImage(mapImg);
  mapObj.scale = 0.18;
  
  //creating objects from the classes
  player = new Player();
  panel = new Panel();
  choice = new Choice();
  map = new Map();
	
}


function draw() {
  background(0);

  //console.log("X "+player.body.x);
  //console.log("Y "+player.body.y);

  //calling function to write instructions for the game
  if(gameState === -1){
    instructions();
  }

  //calling function to show the map when gamestate is 0
  if(gameState === 0){
    map.showMap();
    mapObj.visible = false;
  }

  //showing map if mouse presses over map object
  if(mousePressedOver(mapObj)){
    gameState = 0;
    player.body.x = width/2;
    player.body.y = height/2;
    map.showMap();
  }

  //gamestate 1 
  if(gameState === 1){  
    mapObj.visible = true;
  
    //setting screen image
    image(bgImg, 0, 0, 10000, 10000);

    //making player, map object and panel move
    player.move();
    panel.movement();
    panel.write();

    mapObj.x = player.body.x-width/2+40;
    mapObj.y = player.body.y-height/2+50;

    drawSprites();

    //calling functions to show the accounts of the npcs when player is touching them
    if(player.body.isTouching(panel.laverneCameron)){
      panel.laverne_Account();
    }

    if(player.body.isTouching(panel.jonathonPabst)){
      panel.jonathon_Account();
    }

    if(player.body.isTouching(panel.vernePatterson)){
      panel.verne_Account();
    }

    if(player.body.isTouching(panel.katherineMiriumHegann)){
      panel.katherine_Account();
    }

    if(player.body.isTouching(panel.dennisHarw)){
      panel.dennis_Account();
    }
    if(player.body.isTouching(panel.police)){
      panel.police_Account();
    }
    
    if(player.body.isTouching(panel.byStander1)){
      panel.Account1();
    }
    if(player.body.isTouching(panel.byStander2)){
      panel.Account2();
    }
      if(player.body.isTouching(panel.byStander3)){
      panel.Account3();
    }
    if(player.body.isTouching(panel.byStander4)){
      panel.Account4();
    }
    if(player.body.isTouching(panel.byStander5)){
      panel.Account5();
    }
    if(player.body.isTouching(panel.bert)){
      panel.bert_Account();
    }

    if(player.body.isTouching(player.earring1)){
      panel.earring1_Account();
    }
    if(player.body.isTouching(player.earring2)){
      panel.earring2_Account();
    }
    if(player.body.isTouching(player.scalpel)){
      panel.scalpel_Account();
    }

    if(player.body.isTouching(player.fireRemains)){
      panel.fire_Account();

      //when player reaches the final clue
      //pressing enter will make gamestate 2
      if(keyDown("enter")){
        gameState = 2;
      }  
    }

  }

   if(gameState === 2){
     //removing player and map body
     map.body.remove();
     player.body.remove();

     //setting background and camera position
     background(choiceBG);
     camera.x = width/2;
     camera.y = height/2;

     //calling function to make decision
     choice.answer();

      drawSprites();
   }
   

  textFont("Garamond");
  fill(255);
  textSize(60)
     
  //player wins
  if(gameState === 3){
    background(endImg);
    //calling function to remove the sprites
    choice.remove();
    text("YOU  WIN", 520,320)
  }

  if(gameState === 4){
    background(endImg);
    choice.remove();

    text("YOU  LOSE", 500, 320);

    //second line depends on the var answer
    if(answer === 2){
      textSize(30);
      text("Verne Patterson was not the killer", 450, 350);
    }
    else if(answer === 3){
      textSize(30);
      text("Katherine Mirium Heganns was suspicious, but she was not the killer", 230, 350);
    }
  }

}

function instructions(){
  //displaying all text
  background(startImg);

  textSize(50);
  fill(255)
  textFont("Garamond");
  text("Murder At Greenspring Road", 370, 100);

  textSize(30);
  text("You are a detective who has been hired to solve a murder at GreenSpring, Deeplagoon", 150, 200);
  text("Talk to townsfolk and discover clues. ", 430, 250);
  text("For transportation, click on the map in the top-left corner.", 310, 280);
  text("Good luck, Detective.", 550, 400);
  text("Press space to begin game", 530, 520);

  textSize(15);
  //honest comment
  text("This is a short, horrible, and boring game, turn back now", 5, height-10);

  //changing gamestate when space key is pressed
  if(keyDown("space")){
    gameState = 1;
  }
}
   