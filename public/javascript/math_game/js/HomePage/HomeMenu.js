var FromInside = false;
demo.HomeMenu = function() {};
demo.HomeMenu.prototype = {
    init: function(){
       
        FoxDynamicRand = Math.floor(Math.random() * 11);
        scorebarX = 1450;
        scorebarY = 500;
        buttonpositionY = 500;

    },    
    preload: function() {
        
    },
    create: function() {
        //define backgroung
        
        game.stage.backgroundColor = "#000000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        HomePageBG = game.add.sprite(0,0,'HomePageBG');

        //sound-------------------------------------------------------------------------------------------------------------------
        rightFX = game.add.audio('rightFX');
        wrongFX = game.add.audio('wrongFX');
        successFX = game.add.audio('successFX');
        startFX = game.add.audio('startFX');
        failureFX = game.add.audio('failureFX');
        clickFX = game.add.audio('clickFX');
        add_energyFX = game.add.audio('add_energyFX');            
        alertFX = game.add.audio('alertFX');      
        //game_menu_music = game.add.audio('menu');
        //Audio-------------------------------------------------------------------------------------------
        console.log(game_menu_music.isPlaying);
        
        if(game_menu_music.isPlaying == false){
            game_menu_music.loopFull(1);  
        }
        
        BtnOver = game.add.audio('BtnOver');
       
        
        
        /*
        DoorBtn = game.add.button(830, 422, 'DoorBtn', GoInsideHouse, this, 'DoorBtnHover.png','DoorBtn.png'); 
        DoorBtn.onInputOver.add(DoorBtnOver, this);
        DoorBtn.onInputOut.add(DoorBtnOut, this);
        DoorBtn.inputEnabled = false;
        DoorBtn.alpha = 1;
        
        */
        /*
        HomeMailBtn = game.add.button(1246, 320, 'HomeMailBtn', OpenMail, this, 'HomeMailHover.png','HomeMail.png');
        HomeMailBtn.onInputOver.add(HomeMailOver, this);
        HomeMailBtn.onInputOut.add(HomeMailOut, this);
        HomeMailBtn.inputEnabled = false;
        HomeMailBtn.alpha = 1;
        
        SettingBtnBG = game.add.sprite(1506, 200, 'SettingBtnBG');
        SettingBtnBG.anchor.setTo(0.5);
        
        SettingBtnSheet = game.add.button(1469, 152, 'SettingBtnSheet', OpenSetting, this, 'SettingBtnHover.png','SettingBtn.png');
        SettingBtnSheet.onInputOver.add(SettingBtnOver, this);
        SettingBtnSheet.onInputOut.add(SettingBtnOut, this);
        SettingBtnSheet.inputEnabled = false;
        SettingBtnSheet.alpha = 1;
        */
        //Text--------------------------------------------------------------------------------------------------------------------
        FoxHomeText = game.add.sprite(centerX,-100,'FoxHomeText');
        FoxHomeText.anchor.setTo(0.5,0);
        
        HomeMailText = game.add.sprite(centerX,-100,'HomeMailText');
        HomeMailText.anchor.setTo(0.5,0);
        
        GameSettingText = game.add.sprite(centerX,-100,'GameSettingText');
        GameSettingText.anchor.setTo(0.5,0);
        
        HomeTreeText = game.add.sprite(centerX,-100,'HomeTreeText');
        HomeTreeText.anchor.setTo(0.5,0);

        FoxGoFishingText = game.add.sprite(centerX,-100,'FoxGoFishingText');
        FoxGoFishingText.anchor.setTo(0.5,0);

        
        HomeTextmask = game.add.graphics();
        HomeTextmask.beginFill(0xffffff);
        HomeTextmask.drawRect(0,50,1600,600);
        
        FoxHomeText.mask = HomeTextmask;
        HomeMailText.mask = HomeTextmask;
        GameSettingText.mask = HomeTextmask;
        HomeTreeText.mask = HomeTextmask;
        FoxGoFishingText.mask = HomeTextmask;
        
        FruitDrop = game.add.sprite(-10,0,'FruitDrop');
        FruitDrop.animations.add("FruitDrop",Phaser.Animation.generateFrameNames('FruitDrop_',0,23,'.png',5),10,true);
        FruitDrop.alpha = 0;   
        FruitDrop.animations.currentAnim.onComplete.add(function () {	
    
            console.log('FruitDrop');
            FruitDrop.alpha = 0;
        }, this);
        
        HomeTreeFrame1 = game.add.sprite(-10,0, 'HomePageTreeSheet','HomeTree_00001.png');
        HomeTreeFrame1.alpha = 1;
        
        HomeTreeBtn = game.add.sprite(40,150, 'HomeTreeHover');
        //HomeTreeBtn.events.onInputDown.add(HomeTreeBtnDown, this);
        HomeTreeBtn.events.onInputOver.add(HomeTreeBtnOver, this);
        HomeTreeBtn.events.onInputOut.add(HomeTreeBtnOut, this);
        HomeTreeBtn.events.onInputUp.add(HomeTreeBtnUp, this);
        HomeTreeBtn.inputEnabled = false; 
        HomeTreeBtn.alpha = 0; 
        
       
        
        
        HomeTreeAnimate = game.add.sprite(-10,0,'HomePageTreeSheet');
        HomeTreeAnimate.animations.add("HomeTreeDynamic",Phaser.Animation.generateFrameNames('HomeTree_',0,8,'.png',5),10,true);
        HomeTreeAnimate.alpha = 0; 
        HomeTreeAnimate.animations.currentAnim.onComplete.add(function () {	
                console.log('HomeTreeAnimation');
                HomeTreeAnimate.alpha = 0;
                HomeTreeFrame1.alpha = 1;
            }, this);
        //FoxDynamic----------------------------------------------------------------------------------------------------------------------
        
        FoxStanding = game.add.sprite(0,0,'FoxStanding');
        FoxStandingAnimate = FoxStanding.animations.add("FoxStanding",Phaser.Animation.generateFrameNames('FoxStanding_',0,11,'.png',5),10,true);

        FoxStanding.alpha = 0;
        
        //FoxTurnLeft--------------------------------------------------------------------------------------------------------------
        FoxTurnLeftStanding = game.add.sprite(0,0,'FoxStanding');
        FoxTurnLeftStandingAnimate = FoxTurnLeftStanding.animations.add("FoxTurnLeftStanding",Phaser.Animation.generateFrameNames('FoxTurnLeftStanding_',0,11,'.png',5),10,true);
        
        FoxTurnLeftStanding.alpha = 0;

        FoxTurnLeftWalking = game.add.sprite(0,0,'FoxStanding');
        FoxTurnLeftWalkingAnimate = FoxTurnLeftWalking.animations.add("FoxTurnLeftWalking",Phaser.Animation.generateFrameNames('FoxTurnLeftWalking_',12,30,'.png',5),10,true);      
        FoxTurnLeftWalking.alpha = 0;       
        
        //FoxTurnRight--------------------------------------------------------------------------------------------------------------
        FoxTurnRightStanding = game.add.sprite(0,0,'FoxStanding');
        FoxTurnRightStandingAnimate = FoxTurnRightStanding.animations.add("FoxTurnRightStanding",Phaser.Animation.generateFrameNames('FoxTurnRightStanding_',0,11,'.png',5),10,true);
             
        FoxTurnRightStanding.alpha = 0;
 
        FoxTurnRightWalking = game.add.sprite(0,0,'FoxStanding');
        FoxTurnRightWalkingAnimate = FoxTurnRightWalking.animations.add("FoxTurnRightWalking",Phaser.Animation.generateFrameNames('FoxTurnRightWalking_',12,30,'.png',5),10,true);
     
        FoxTurnRightWalking.alpha = 0;        
        

        FoxDynamic();        
        //TaskBoardBtn----------------------------------------------------------------------------------------------------------------
        TaskBoard = game.add.sprite(0,0,'TaskBoard','TaskBoard.png');
        
        
        TaskBoardHover = game.add.sprite(0,0,'TaskBoard','TaskBoardHover.png');
        TaskBoardHoverTween = game.add.tween(TaskBoardHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        //TaskBoardHoverTween.pause();
        //TaskBoardHover.alpha = 0;
        
        
        TaskBoardBtnArea = game.add.sprite(1272,407,'TaskBoard','TaskBoardBtnArea.png');
        TaskBoardBtnArea.events.onInputUp.add(TaskBoardBtnAreaUp, this);
        TaskBoardBtnArea.events.onInputOver.add(TaskBoardBtnAreaOver, this);
        TaskBoardBtnArea.events.onInputOut.add(TaskBoardBtnAreaOut, this);
        TaskBoardBtnArea.inputEnabled = false;
        TaskBoardBtnArea.alpha = 0;
        
        
        TaskBoardNewIcon = game.add.sprite(0,0,'TaskBoard','NewIcon.png');
        if( LevelState.LevelMapCount == 0 ){
           TaskBoardNewIconTween = game.add.tween(TaskBoardNewIcon).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);                
        }else{
            TaskBoardNewIcon.alpha = 0;
        }
        
        
        //btn---------------------------------------------------------------------------------------------------------------------
        JunyiIconBtn = game.add.sprite(1300,700,'JunyiIconBtn');
        JunyiIconBtn.alpha = 1;
        JunyiIconBtn.events.onInputDown.add(JunyiIconBtnDown, this);        
        
        

        
        grass = game.add.sprite(0,0,'grass');
        
        //ArrowSheet------------------------------------------------------------------------------------------------------------------
        ArrowSheet = game.add.sprite(0,0,'ArrowSheet');
        ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
        ArrowSheet.alpha = 0;
        
        demo.user.create();
        demo.HomeMenu.chatroom.create();
        demo.HomeMenu.chatIcon.create();
        
        blackBG_opening = game.add.sprite(0,0,'blackBG');
        blackBG_opening.alpha = 1;
        BlackOpeningTween = game.add.tween(blackBG_opening).to({alpha:0},2000,'Linear',true,0);           
        BlackOpeningTween.onComplete.add(function () {	
            //DoorBtn.inputEnabled = true;
            //HomeMailBtn.inputEnabled = true;
            //SettingBtnSheet.inputEnabled = true;
            JunyiIconBtn.inputEnabled = true;
            JunyiIconBtn.input.useHandCursor = true;
            HomeTreeBtn.inputEnabled = true;
            HomeTreeBtn.input.useHandCursor = true;
            TaskBoardBtnArea.inputEnabled = true;
            TaskBoardBtnArea.input.useHandCursor = true;
            //FoxStandingHover.inputEnabled = true;            
            /*
            if(FromInside == true){
                DoorBtn.inputEnabled = true;
                HomeMailBtn.inputEnabled = true;
                SettingBtnSheet.inputEnabled = true;
                HomeTreeFrame1.inputEnabled = true; 
                RoadBtn.inputEnabled = true;
            }
            */
        }, this);
        //game.input.mouse.mouseWheelCallback = mouseWheel;

    },     
    update: function() {}    
}
/*
function mouseWheel(event) {   
    console.log(game.input.mouse.wheelDelta);
}
*/
function TaskBoardBtnAreaUp(){
    
    TaskBoardHoverTween.pause();    
    TaskBoardHover.alpha = 0;
    
    ExitHomePage();
}
function TaskBoardBtnAreaOver(){
    ArrowSheet.x = 620;
    ArrowSheet.y = -200;    
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    game.add.tween(FoxGoFishingText).to({y:50},500,'Quad.easeOut',true,0); 
   // TaskBoardHoverTween.resume();
   // TaskBoardHover.alpha = 1;
}
function TaskBoardBtnAreaOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;   
    game.add.tween(FoxGoFishingText).to({y:-100},500,'Quad.easeOut',true,0); 
    //TaskBoardHoverTween.pause();
    //TaskBoardHover.alpha = 0;
}

function JunyiIconBtnDown(){
     window.open("https://www.junyiacademy.org/");
    
}
function ExitHomePage(){
    LevelState.LevelMapCount++;
    game.add.tween(game_menu_music).to({volume:0},1000,'Quad.easeOut',true,0); 
    demo.HomeMenu.chatroom.hide();
    BlackClosingTween1 = game.add.tween(blackBG_opening).to({alpha:1},1000,'Quad.easeOut',true,0); 
    BlackClosingTween1.onComplete.add(function () {	
        game.state.start('BootLevelMap',true,true);
    }, this); 
    
}
function FoxStandingDown(){
}
function FoxStandingOver(){
    ArrowSheet.x = FoxStanding.x -232;
    ArrowSheet.y = 20;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;
    
    game.add.tween(FoxGoFishingText).to({y:50},500,'Quad.easeOut',true,0); 
    BtnOver.play();

}
function FoxStandingOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;    

    game.add.tween(FoxGoFishingText).to({y:-100},500,'Quad.easeOut',true,0); 

}


function HomeTreeBtnUp(){
    HomeTreeFrame1.alpha = 0;
    HomeTreeAnimate.alpha = 1;
    HomeTreeAnimate.animations.play("HomeTreeDynamic",15,false);  

    FruitDrop.alpha = 1;
    FruitDrop.animations.play("FruitDrop",15,false);
      

}
function HomeTreeBtnOver(){
    ArrowSheet.x = -700;
    ArrowSheet.y = -300;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;
    game.add.tween(HomeTreeText).to({y:50},500,'Quad.easeOut',true,0); 
    BtnOver.play();
}
function HomeTreeBtnOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    game.add.tween(HomeTreeText).to({y:-100},500,'Quad.easeOut',true,0); 
}

function OpenSetting(){
    
}
function SettingBtnOver(){
    
    
    SettingBtnSheet.alpha = 0.8;
    
    game.add.tween(GameSettingText).to({y:50},500,'Quad.easeOut',true,0); 
    BtnOver.play();
}
function SettingBtnOut(){
    
    game.add.tween(GameSettingText).to({y:-100},500,'Quad.easeOut',true,0); 
    
}

function OpenMail(){
     window.open("https://www.junyiacademy.org/");
}
function HomeMailOver(){
    ArrowSheet.x = 625;
    ArrowSheet.y = -200;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    
    HomeMailBtn.alpha = 1;
    //FoxHomeText.y = 0;
    game.add.tween(HomeMailBtn).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    game.add.tween(HomeMailText).to({y:50},500,'Quad.easeOut',true,0); 
    BtnOver.play();
        
}
function HomeMailOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    
    game.add.tween(HomeMailText).to({y:-100},500,'Quad.easeOut',true,0); 
    
}

function DoorBtnOver(){
    ArrowSheet.x = 95;
    ArrowSheet.y = -150;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    
    DoorBtn.alpha = 1;
    //FoxHomeText.y = 0;
    game.add.tween(DoorBtn).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    game.add.tween(FoxHomeText).to({y:50},500,'Quad.easeOut',true,0); 
    BtnOver.play();
    
}
function DoorBtnOut(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;
    
    game.add.tween(FoxHomeText).to({y:-100},500,'Quad.easeOut',true,0);
}
function GoInsideHouse(){
    BlackClosingTween = game.add.tween(blackBG_opening).to({alpha:1},1000,'Quad.easeOut',true,0); 
    BlackClosingTween.onComplete.add(function () {	
        game.state.start('HomeInsidePage',true);
    }, this); 
}


function FoxDynamic(){
    
    console.log(FoxDynamicRand);
    if( FoxDynamicRand <= 2 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand <= 5 && FoxDynamicRand >= 3 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStanding.alpha = 1;
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);
        
        //console.log(FoxDynamicRand+'TurnLeft');
    }
    if( FoxDynamicRand <= 8 && FoxDynamicRand >= 6 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStanding.alpha = 1;
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);       
        //console.log(FoxDynamicRand+'TurnRight');
    }
    if( FoxDynamicRand == 9 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalking.alpha = 1;
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    }
    if( FoxDynamicRand == 10 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        FoxTurnLeftWalking.alpha = 1;
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
    }
}
function FoxStandingAnimateComplete(){
    //console.log('FoxStanding');
    /*
    FoxStandingHover.inputEnabled = true;
    FoxStandingHover.input.useHandCursor = true;
    */
    FoxDynamicRand = Math.floor(Math.random() * 21);
    if( FoxDynamicRand <= 16 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);
        
    }
    if( FoxDynamicRand == 17 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStanding.alpha = 1;
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);

        FoxStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }
    if( FoxDynamicRand == 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStanding.alpha = 1;
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);       
        
        FoxStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnRight');
    }
    
    if( FoxDynamicRand == 19 ){
        if( FoxStanding.x == -200 ){
            FoxStanding.animations.play("FoxStanding",15,false);
            FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);        
        }else{
            FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
            FoxTurnRightWalking.alpha = 1;
            FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    
            FoxStanding.alpha = 0;           
        }

    }
    if( FoxDynamicRand == 20 ){
        if( FoxStanding.x == 200 ){
            FoxStanding.animations.play("FoxStanding",15,false);
            FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);        
        }else{
            FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
            FoxTurnLeftWalking.alpha = 1;
            FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
            FoxStanding.alpha = 0;            
        }        

    } 
    
}
function FoxTurnLeftStandingAnimateComplete(){
    /*
    FoxStandingHover.inputEnabled = true;
    FoxStandingHover.input.useHandCursor = true;
    */
    if( FoxStanding.x == 0 || FoxStanding.x == -200 ){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }   
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnLeftStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        FoxTurnLeftWalking.alpha = 1;
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);
        
        FoxTurnLeftStanding.alpha = 0;
    }    
}
function FoxTurnRightStandingAnimateComplete(){
    /*
    FoxStandingHover.inputEnabled = true;
    FoxStandingHover.input.useHandCursor = true;
    */
    if( FoxStanding.x == 0 || FoxStanding.x == 200 ){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }   
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this); ;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnRightStanding.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalking.alpha = 1;
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);
    
        FoxTurnRightStanding.alpha = 0;
    }

}
function FoxTurnRightWalkingAnimateComplete(){
    //FoxStandingHover.inputEnabled = false;
    FoxTurnLeftStanding.x -= 200;
    FoxTurnRightStanding.x -= 200;
    FoxStanding.x -= 200;
    FoxTurnRightWalking.x -= 200;
    FoxTurnLeftWalking.x -= 200;
    //FoxStandingHover.x -= 200;

    
    if( FoxStanding.x == 0){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }    
    
    FoxDynamicRand = Math.floor(Math.random() * 21);
    if( FoxDynamicRand <= 18 ){
        FoxTurnRightStanding.animations.play("FoxTurnRightStanding",15,false);
        FoxTurnRightStandingAnimate.onComplete.add(FoxTurnRightStandingAnimateComplete, this);
        FoxTurnRightStanding.alpha = 1; 
        FoxTurnRightWalking.alpha = 0;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnRightWalking.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnRightWalking.animations.play("FoxTurnRightWalking",15,false); 
        FoxTurnRightWalkingAnimate.onComplete.add(FoxTurnRightWalkingAnimateComplete, this);        

    }     
}
function FoxTurnLeftWalkingAnimateComplete(){
    //FoxStandingHover.inputEnabled = false;
    FoxTurnLeftStanding.x += 200;
    FoxTurnRightStanding.x += 200;
    FoxStanding.x += 200;
    FoxTurnRightWalking.x += 200;
    FoxTurnLeftWalking.x += 200;
    //FoxStandingHover.x += 200;

    
    if( FoxStanding.x == 0){
        FoxDynamicRand = Math.floor(Math.random() * 21);   
    }else{
        FoxDynamicRand = Math.floor(Math.random() * 20);
    }
    
    
    if( FoxDynamicRand <= 18 ){
        FoxTurnLeftStanding.animations.play("FoxTurnLeftStanding",15,false);
        FoxTurnLeftStandingAnimate.onComplete.add(FoxTurnLeftStandingAnimateComplete, this);
        FoxTurnLeftStanding.alpha = 1; 
        FoxTurnLeftWalking.alpha = 0;
        
    }
    if( FoxDynamicRand == 19 ){
        FoxStanding.animations.play("FoxStanding",15,false);
        FoxStanding.alpha = 1;
        FoxStandingAnimate.onComplete.add(FoxStandingAnimateComplete, this);

        FoxTurnLeftWalking.alpha = 0;
        //console.log(FoxDynamicRand+'TurnLeft');
    }

    if( FoxDynamicRand == 20 ){
        FoxTurnLeftWalking.animations.play("FoxTurnLeftWalking",15,false); 
        
        FoxTurnLeftWalkingAnimate.onComplete.add(FoxTurnLeftWalkingAnimateComplete, this);        
    }    
}