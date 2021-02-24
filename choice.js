class Choice{
    constructor(){
        //creating the three suspect sprites
        this.pabst = createSprite(width/2-400, height/2, 200, 200);
        this.patterson = createSprite(width/2, height/2, 200, 200);
        this.hegann = createSprite(width/2+400, height/2, 200, 200);

        this.pabst.visible = false;
        this.patterson.visible = false;
        this.hegann.visible = false;
    }

    answer(){
        textSize(50);
        textFont("Garamond");
        fill(255);
        text("Who was the killer?", 500, 100)

        //displaying sprites, images and text
        textSize(25);
        this.pabst.visible = true;
        this.pabst.addImage(pabstImg);
        this.pabst.scale = 0.5;
        text("Jonathon Pabst", 180, 540);
        text("Owner of Pabst' Florists", 130, 570)
        text("Enjoys visiting Dairy Steps, Dawnice", 70, 600)

        this.patterson.visible = true;
        this.patterson.addImage(pattersonImg);
        this.patterson.scale = 0.5;
        text("Verne Patterson", 585, 540);
        text("Owner of Patterson Jewlers", 530, 570)
        text("Childhood friend of Mildred", 530, 600)

        this.hegann.visible = true;
        this.hegann.addImage(hegannImg);
        this.hegann.scale = 0.5;
        text("Katherine Mirium Hegann", 950, 540);
        text("Worker at Hegann Breweries", 930, 570)
        text("Mildred's friend, inheritor of fortune", 900, 600)
        
        //changing value of global var answer according to which sprite is clicked on
        if(mousePressedOver(this.pabst)){
            answer = 1;
            gameState = 3;
        }
        else if(mousePressedOver(this.patterson)){
            answer = 2;
            gameState = 4;
        }
        else if(mousePressedOver(this.hegann)){
            answer = 3;gameState = 4;
        }
        else{
            gameState = 2;
        }
    }

    //function to remove sprites
    remove(){
        this.pabst.remove();
        this.patterson.remove();
        this.hegann.remove();
    }

}