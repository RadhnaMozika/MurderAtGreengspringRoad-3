class Panel{
    constructor(){
        //image for the panel
        this.border = loadImage("images/border.png");

        //creating panel and adding images
        this.panel = createSprite(player.body.x+340, player.body.y, 500, 600);
        this.panel.shapeColor = "white";
        this.panel.addImage(this.border);
        this.panel.scale = 0.5;

        //creating victim sprites
        this.victim1 = createSprite(4820, 1600, 50, 20);
        this.victim1.shapeColor=0;
        this.victim2 = createSprite(4820, 1630, 50, 20);
        this.victim2.shapeColor=0;

        //creating townsfolk and bystanders
        this.jonathonPabst = createSprite(3200, 4450, 20, 20);
        this.jonathonPabst.addImage(characterImg);
        this.jonathonPabst.scale = 0.09;

        this.vernePatterson = createSprite(3100, 3900, 20, 20);
        this.vernePatterson.addImage(characterImg);
        this.vernePatterson.scale = 0.09;

        this.katherineMiriumHegann = createSprite(2600, 3650, 20, 20);
        this.katherineMiriumHegann.addImage(characterImg);
        this.katherineMiriumHegann.scale = 0.09;

        this.laverneCameron = createSprite(3750, 2650, 20, 20);
        this.laverneCameron.addImage(characterImg);
        this.laverneCameron.scale = 0.09; 

        this.dennisHarw = createSprite(1300, 200, 20, 20);
        this.dennisHarw.addImage(characterImg);
        this.dennisHarw.scale = 0.09; 

        this.police = createSprite(4870, 1540, 20, 20);
        this.police.addImage(characterImg);
        this.police.scale = 0.09;
        
        this.byStander1 = createSprite(3430, 3120, 20, 20);
        this.byStander1.addImage(characterImg);
        this.byStander1.scale = 0.09; ;

        this.byStander2 = createSprite(2280, 4200, 20, 20);
        this.byStander2.addImage(characterImg);
        this.byStander2.scale = 0.09;

        this.byStander3 = createSprite(1140, 2580, 20, 20);
        this.byStander3.addImage(characterImg);
        this.byStander3.scale = 0.09; 
        
        this.byStander4 = createSprite(3640, 5850, 20, 20);
        this.byStander4.addImage(characterImg);
        this.byStander4.scale = 0.09; 

        this.byStander5 = createSprite(6940, 7700, 20, 20);
        this.byStander5.addImage(characterImg);
        this.byStander5.scale = 0.09; 
        
        this.bert = createSprite(8860, 8060, 20, 20);
        this.bert.addImage(characterImg);
        this.bert.scale = 0.09; 
    }


    //function to move the panel
    movement(){
        this.panel.x = player.body.x+400;
        this.panel.y = player.body.y; 
    }

    //accounts of the different npcs
    laverne_Account(){
        imageMode(CENTER);
        image(cameronImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Lady Laverne Cameron", player.body.x+260, player.body.y);
        textSize(25);

        text("Owner of 'Cameron Seafoods'", player.body.x+250, player.body.y+25);     
        textSize(20);

        text("Detective? Oh, yes, yes, very unfortunate...I didn't know ", player.body.x+180, player.body.y+60);
        text("Miss Delagate and Mister Fitzegerald all too well, sorry...", player.body.x+180, player.body.y+80);
        text("Although, Mister Edwin did like fishing, or so, I've heard.", player.body.x+180, player.body.y+110);
        text("My fisher might know something. I think he's docked arou-", player.body.x+180, player.body.y+130);
        text("-nd in Deeplagoon Bay, around Dark Harbour, I believe.", player.body.x+180, player.body.y+150);
        text("Why don't you go and ask him?", player.body.x+270, player.body.y+200);
        text("Farewell!", player.body.x+360, player.body.y+240);
    }

    jonathon_Account(){
        imageMode(CENTER);
        image(pabstImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Jonathon Pabst", player.body.x+300, player.body.y);

        textSize(25);
        text("Owner and Worker at 'Pabst Florists'", player.body.x+205, player.body.y+25); 

        textSize(20);
        text("'Ah, yes, Mildred and Edwin, I'm quite familiar, met them ", player.body.x+180, player.body.y+60);
        text("one too many times down in Dawnice Keep. I am afraid I ", player.body.x+180, player.body.y+80);
        text("know nothing of any...vindications they may have deve-", player.body.x+180, player.body.y+100);
        text("loped, or anything about the night of the incident, no...", player.body.x+180, player.body.y+120);

        text("'Let me know if there's anything else I can do for you. Oh,", player.body.x+180, player.body.y+150);
        text("and also, be sure to join me at the Dairy Steps in Dawnice ", 
        player.body.x+180, player.body.y+170);
        text("once in a while, Detective!", player.body.x+180, player.body.y+190);

        text("'Farewell'", player.body.x+365, player.body.y+230);
    }

    verne_Account(){
        imageMode(CENTER);
        image(pattersonImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Verne Patterson", player.body.x+300, player.body.y);

        textSize(25);
        text("Owner of 'Patterson Jewelers'", player.body.x+255, player.body.y+25);   

        textSize(20);
        text("Miss Delagate? Oh, yes, her murder is most curius...She", player.body.x+180, player.body.y+60);
        text(" did just buy a very expensive diamond earring set from", player.body.x+180, player.body.y+80) ;  
        text("my family, but she was rather distraught the following day.", player.body.x+180, player.body.y+100) ; 
        text("I believe you'll have to speak to someone else...Oh! yes,", player.body.x+180, player.body.y+120) ; 
        text("Miss Mildred was rather fond of the Hegann Breweries,", player.body.x+180, player.body.y+140) ; 
        text("just down the street. find Katherine Hegann and ask her,", player.body.x+180, player.body.y+160) ; 
        text("will you? ", player.body.x+180, player.body.y+180)

        text("Also...if its not too much to ask...Mildred was a childhood ", player.body.x+180, player.body.y+210)
        text("friend...If...if it wouldn't be too much trouble...could you ", player.body.x+180, player.body.y+230)
        text("please keep me up to date with the case?", player.body.x+180, player.body.y+250)

        text("Farewell", player.body.x+360, player.body.y+280)
    }

    katherine_Account(){
        imageMode(CENTER);
        image(hegannImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Katherine Mirium Heganns", player.body.x+240, player.body.y);

        textSize(25);
        text("Worker at Hegann Breweries", player.body.x+255, player.body.y+25);   
        
        textSize(20)
        text("Oh, Mildred? Yes, I heard. Its very unfortunate. But yes, to", player.body.x+175, player.body.y+60);
        text("answer your questions, she visited my store often. Usually ", player.body.x+175, player.body.y+80);
        text("alone, but sometimes, she'd bring her friend Edwin along. ", player.body.x+175, player.body.y+100);
        text("I didn't know Edwin too well, just heard that he really liked ", player.body.x+175, player.body.y+130);
        text("visiting Dawnice. Mildred would tell me of their times in  ", player.body.x+175, player.body.y+150);
        text("North District. It really does sound like a nice place...how ", player.body.x+175, player.body.y+170);
        text("great it must be to be rich, right? Oh well, that's all I ", player.body.x+175, player.body.y+190);
        text("know. Edwin liked visiting Dawnice,  maybe visit the place?", player.body.x+175, player.body.y+210);

        text("Okay, thank you, Detective.", player.body.x+175, player.body.y+2240);
        text("Goodbye", player.body.x+370, player.body.y+260);
    }

    dennis_Account(){
        imageMode(CENTER);
        image(harwImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Dennis Cameron", player.body.x+300, player.body.y);

        textSize(25);
        text("Fisherman for 'Cameron Seafoods'", player.body.x+235, player.body.y+25);

        textSize(20);
        text("That Greenspring murder? Sir Edwin came fishing here a ", player.body.x+175, player.body.y+60);
        text("lot, yes. Respectable man, that one. He knew that the fish", player.body.x+175, player.body.y+80);
        text("near the harbours aren't great. Although, no, I don't know", player.body.x+175, player.body.y+100);
        text("much of what went on in his life. He came by the bay just", player.body.x+175, player.body.y+120);
        text("twice a month, or so.", player.body.x+175, player.body.y+140);

        text("Although, his friend, uh- Mildred, I believe? Yes, she", player.body.x+175, player.body.y+170);
        text(" loved visiting Upper District, near the Six Crows Gate.", player.body.x+175, player.body.y+190);
        text("I'm sure you'll find something viable there.", player.body.x+175, player.body.y+210);

        text("Pleased to meet you, Detective", player.body.x+280, player.body.y+250);
    }
    Account1(){
        imageMode(CENTER);
        image(jenkinImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Sir Jenkins Walter", player.body.x+300, player.body.y);

        textSize(20);
        text("'Ehh...Pearl Castle has been shut down...I'll send a request", player.body.x+180, player.body.y+40);
        text("to the observatory, don't worry- Huh? Upper District?", player.body.x+180, player.body.y+60)
        text("'Upper District is just down the road, Dark Harbour", player.body.x+180, player.body.y+90);
        text(" is to the west, just after Light Village, Greenspring is", player.body.x+180, player.body.y+110);
        text("to the east, just go down Six Courts Street, for about 20", player.body.x+180, player.body.y+130)
        text("minutes you'll reach Old Pair at Dawnice- huh? That ", player.body.x+180, player.body.y+150);
        text("is all you wanted to know? Okay, go on, then, off", player.body.x+180, player.body.y+170);
        text("you go, Pearl Caste is closed, endless work today.'", player.body.x+180, player.body.y+190);
        
    }
    Account2(){
        imageMode(CENTER);
        image(iraImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Miss Ira Julienne Shapter", player.body.x+250, player.body.y);

        textSize(20);
        text("'Dawnice Keep? You'll need to go out the walls...I don't", player.body.x+180, player.body.y+30);
        text("really know...Its quite a long way...", player.body.x+180, player.body.y+50);
        text("'Maybe rent a carriage?", player.body.x+180, player.body.y+80);
        text("'Oh...wait..hmm....carriages are disbanded because of the", player.body.x+180, player.body.y+100)
        text("incident near Greenspring Road...Take the road from ", player.body.x+180, player.body.y+120)
        text("Six Crows, okay? Even if you manage to get past", player.body.x+180, player.body.y+140);
        text("Greenspring, the road is a dead end.", player.body.x+180, player.body.y+160)
        text("'Okay? Oh, uh- Goodbye, then.'", player.body.x+280, player.body.y+220);
    }

    Account3(){
        imageMode(CENTER);
        image(kitImg, player.body.x+400, player.body.y-160, 300, 300);
        textSize(30);
        text("Kit Henry Peter-Smith", player.body.x+260, player.body.y+10)
        textSize(20);
        text("The fisher for Cameron's? He docks outside the walls,", player.body.x+180, player.body.y+50);
        text("try steppin' out from Greenspring Street. He's just", player.body.x+180, player.body.y+70);
        text("at the north edge, you're sure to spot him once you", player.body.x+180, player.body.y+90);
        text("get out of the walls.", player.body.x+180, player.body.y+110);

        text("GoodBye", player.body.x+360, player.body.y+230);
    }
    Account4(){
        imageMode(CENTER);
        image(gerardImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Mister Gerard Plankton", player.body.x+260, player.body.y+20);
        textSize(20);

        text("'Dawnice is down the road, but it'll be a long way to get ", player.body.x+180, player.body.y+50);
        text("there. Don't stray off.'", player.body.x+180, player.body.y+70);
    }
    Account5(){
        imageMode(CENTER);
        image(peterImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Peter Hugh", player.body.x+340, player.body.y+10);

        textSize(20);
        text("'The Murder at Greenspring? Bert may know something, ", player.body.x+180, player.body.y+50);
        text("just go east to the caste, he's a musician there.'", player.body.x+180, player.body.y+70);

        text("Good Luck", player.body.x+350, player.body.y+220);
    }

    
    bert_Account(){
        imageMode(CENTER);
        image(bertImg, player.body.x + 400, player.body.y - 160, 300, 300);

        textSize(30);
        text("Bert", player.body.x + 360, player.body.y);

        textSize(20);
        text("'The Murder at Greenspring? Oh, that Delagate girl...?", player.body.x + 180, player.body.y + 40);
        text("Mildred and Edwin were frequent visitors of Dawnice.", player.body.x + 180, player.body.y + 60);
        text("usually North District, they were rich folk...look, you", player.body.x + 180, player.body.y + 80);
        text(" didn't hear it from me, but there's this...this one who ", player.body.x + 180, player.body.y + 100);
        text("comes in from Upper District..He runs a store up ", player.body.x + 180, player.body.y + 120);
        text("there, I'm not sure which, but...He often got into big", player.body.x + 180, player.body.y + 140);
        text("fights with Fitzegerald...he comes in every Friday...", player.body.x + 180, player.body.y + 160);
        text("...I think I saw him at Dairy Steps now. Be...careful", player.body.x + 180, player.body.y + 180);

        text("Goodbye,", player.body.x + 350, player.body.y + 220)
       }
      

    police_Account(){
        imageMode(CENTER);
        image(policeImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Inspector Everlyn Kildare-Foy", player.body.x+220, player.body.y);

        textSize(25);
        text("Superintendent Detective, Deeplagoon-Dawnice", player.body.x+170, player.body.y+25);

        textSize(20);
        text("The victims are Miss Mildred Delegate and Mr. Edwin ", player.body.x+180, player.body.y+60);
        text("Fitzgerald.  The investigation sugests that they were kil-", player.body.x+180, player.body.y+80);
        text("-led around midnight yesterday. The wounds were inflicted", player.body.x+180, player.body.y+100);
        text("by a medical grade scalpel. No other clues were around", player.body.x+180, player.body.y+120);
        text("the bodies. It is important to note that the victims were", player.body.x+180, player.body.y+140);
        text("headed to Dawnice Keep. ", player.body.x+180, player.body.y+160);
        text("Miss Delegate's entire fortune has been signed over to", player.body.x+180, player.body.y+190);
        text("Miss Katherine Hegann from Hegann Brewieres. You can", player.body.x+180, player.body.y+210);
        text("go around and ask the townsfolk about the murder.", player.body.x+180, player.body.y+230);

        text("Get back by dawn", player.body.x+340, player.body.y+260);
    }

    earring1_Account(){
        imageMode(CENTER);
        image(earringImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Diamond Earring", player.body.x+290, player.body.y+20);

        textSize(20);
        text("Diamond Earring stuffed into the corner of the gates.", player.body.x+180, player.body.y+120);
    }

    earring2_Account(){
        imageMode(CENTER);
        image(earringImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Diamond Earring", player.body.x+290, player.body.y+20);

        textSize(20);
        text("Diamond Earring, traced with blood.", player.body.x+180, player.body.y+120);
    }

    scalpel_Account(){
        imageMode(CENTER);
        image(scalpelImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Medical Scalpel", player.body.x+300, player.body.y+20);

        textSize(20);
        text("Medical Grade Surgery Scalpel, covered in oxidized blood.", player.body.x+180, player.body.y+120);
        text("The colour of blood sugests that it is as old as the murder.", player.body.x+180, player.body.y+140)
    }

    fire_Account(){
        imageMode(CENTER);
        image(fireImg, player.body.x+400, player.body.y-160, 300, 300);

        textSize(30);
        text("Remains of Fire", player.body.x+290, player.body.y+20);

        textSize(20);
        text("Remains of fire and burnt cloth.", player.body.x+180, player.body.y+100);
        text("Press Enter to proceed", player.body.x+310, player.body.y+250);

        player.movePermission = false;            
    }


    write(){        
        fill(0);
        textSize(15);
        strokeWeight(1);
        stroke(255);
        textFont("Garamond");

        //displaying the names of the characters in their avatars
        text("Mildred Delegate", 4785, 1585);
        text("Edwin Fitzegerald", 4780, 1620);

        text(player.name, player.body.x-20, player.body.y-20);

        text("Jonathon Pabst", this.jonathonPabst.x-45, this.jonathonPabst.y-20)
        text("Verne Patterson", this.vernePatterson.x-50, this.vernePatterson.y-20)
        text("Katherine Mirium Hegann", this.katherineMiriumHegann.x-60, 
        this.katherineMiriumHegann.y-20);
        text("Lady Laverne Cameron", this.laverneCameron.x-50, 
        this.laverneCameron.y-20)
        text("Dennis Harw", this.dennisHarw.x-40, this.dennisHarw.y-20);

        //bystanders
        text("Jenkins Walter", this.byStander1.x-40, this.byStander1.y-20)
        text("Ira Shapter", this.byStander2.x-35, this.byStander2.y-20);
        text("Kit",this.byStander3.x-10, this.byStander3.y-20)
        text("Gerard Plankton", this.byStander4.x-40, this.byStander4.y-20)
        text("Peter Hugh", this.byStander5.x-30, this.byStander5.y-20)
        text("Police", this.police.x-15, this.police.y-20)
        text("Bert", this.bert.x-10, this.bert.y-20);

        //clues
        text("???", player.earring1.x-8, player.earring1.y-20);
        text("???", player.earring2.x-8, player.earring2.y-20);
        text("???", player.scalpel.x-8, player.scalpel.y-20);
        text("???", player.fireRemains.x-8, player.fireRemains.y-20);

        //building names
        textSize(30);
        noStroke();
        text("Pabst Florists", 2920, 4350);
        text("Patterson Jewelers", 3120, 4000)
        text("Hegann Breweries", 2520, 3450);
        text("Cameron Seafoods", 3810, 2720);
    }
}

