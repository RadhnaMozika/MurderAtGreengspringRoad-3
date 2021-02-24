class Player{
    constructor(){
        //creating player sprite
        this.body = createSprite(5000, 1460, 20, 20);
        this.body.addImage(characterImg);
        this.body.scale = 0.09;
        this.body.setCollider("rectangle", 0, 0, 1000, 1000)

        //creating clues
        this.earring1 = createSprite(4310, 2020, 20, 20);
        this.earring1.shapeColor = 0;
        this.earring1.setCollider("rectangle", 0, 0, 100, 100);

        this.earring2 = createSprite(2350, 3320, 20, 20);
        this.earring2.shapeColor = 0;
        this.earring2.setCollider("rectangle", 0, 0, 100, 100);

        this.fireRemains = createSprite(9730, 8840, 40, 40);
        this.fireRemains.shapeColor = 0;
        this.fireRemains.setCollider("rectangle", 0, 0, 100, 100);
        
        this.scalpel = createSprite(2950, 4150, 20, 20);
        this.scalpel.shapeColor = 0;
        this.scalpel.setCollider("rectangle", 0, 0, 100, 100);

        //setting values for permission and name
        this.name = "player";
        this.movePermission = true;

    }

    //function to move player and camera
    move(){
        if(this.movePermission === true){
            if(keyDown("up")){
                this.body.y = this.body.y-20;
            }
            if(keyDown("down")){
                this.body.y = this.body.y+20;
            }
            if(keyDown("left")){
                this.body.x = this.body.x-20;
            }
            if(keyDown("right")){
                this.body.x = this.body.x+20;
            }
        }       

        camera.x = this.body.x;
        camera.y = this.body.y;
    }

}