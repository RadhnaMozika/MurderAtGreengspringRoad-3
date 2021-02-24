class Map{
    constructor(){
        //creating sprites for the different places in the map
        this.body = createSprite(width/2, height/2, 20, 20);
        
        this.darkHarbour = createSprite(width/2-400, height/2-150);
        this.darkHarbour.addImage(circleImg);
        this.darkHarbour.scale = 0.05;

        this.upperDistrict = createSprite(width/2-280, height/2+100);
        this.upperDistrict.addImage(circleImg);
        this.upperDistrict.scale = 0.05;

        this.greenspring = createSprite(width/2-80, height/2-110);
        this.greenspring.addImage(circleImg);
        this.greenspring.scale = 0.05;

        this.coast = createSprite(200, 50);
        this.coast.addImage(circleImg);
        this.coast.scale = 0.05;

        this.sixCourts = createSprite(width/2-160, height/2+250);
        this.sixCourts.addImage(circleImg);
        this.sixCourts.scale = 0.05;

        this.oldFair = createSprite(width/2+300, height/2+500);
        this.oldFair.addImage(circleImg);
        this.oldFair.scale = 0.05;

        this.castle = createSprite(width/2+520, height/2+580);
        this.castle.addImage(circleImg);
        this.castle.scale = 0.05;

        this.dairySteps = createSprite(width/2+650, height/2+600);
        this.dairySteps.addImage(circleImg);
        this.dairySteps.scale = 0.05;
    }

    //function to hide all sprites
    hideSprites(){
        this.darkHarbour.visible = false;
        this.upperDistrict.visible = false;
        this.greenspring.visible = false;
        this.sixCourts.visible = false;
        this.oldFair.visible = false;
        this.castle.visible = false;
        this.dairySteps.visible = false;
        this.coast.visible = false;
    }

    //function to show all sprites
    showSprites(){
        this.darkHarbour.visible = true;
        this.upperDistrict.visible = true;
        this.greenspring.visible = true;
        this.sixCourts.visible = true;
        this.oldFair.visible = true;
        this.castle.visible = true;
        this.dairySteps.visible = true;
        this.coast.visible = true;
    }

    

    showMap(){
        //setting camera and player position
        camera.x = player.body.x;
        camera.y = player.body.y;

        camera.x = this.body.x;
        camera.y = this.body.y;

        //showing all sprites
        this.showSprites();
        
        //arrow key to move the screen up and down
        image(bgImg, 0, 0, 1350, 1050);
        if(keyDown("up")){
            this.body.y = this.body.y-10
        }

        if(keyDown("down")){
            this.body.y = this.body.y+10
        }

        drawSprites();

        //calling function to make player appear in the different places 
        //according to which sprite is clicked
        if(mousePressedOver(this.darkHarbour)){
            this.DarkHarbour();
        }
        if(mousePressedOver(this.upperDistrict)){
            this.UpperDistrict();
        }
        if(mousePressedOver(this.greenspring)){
            this.Greenspring();
        }
        if(mousePressedOver(this.sixCourts)){
            this.SixCourts();
        }
        if(mousePressedOver(this.oldFair)){
            this.OldFair();
        }
        if(mousePressedOver(this.castle)){
            this.Castle();
        }
        if(mousePressedOver(this.dairySteps)){
            this.DairySteps();
        }
        if(mousePressedOver(this.coast)){
            this.Coast();
        }
    }

    //functions to make the player appear at the different locations
    DarkHarbour(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 980;
        player.body.y = 2600
    }

    UpperDistrict(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 3060;
        player.body.y = 4060
    }
    Greenspring(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 5000;
        player.body.y = 1460
    }

    SixCourts(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 3600;
        player.body.y = 5620
    }

    OldFair(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 6780;
        player.body.y = 7920;
    }

    Castle(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 8800;
        player.body.y = 8100
    }
    DairySteps(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 9660;
        player.body.y = 9060
    }
    Coast(){
        this.hideSprites();
        gameState = 1;
        player.body.x = 1340;
        player.body.y = 440;
    }
    
}