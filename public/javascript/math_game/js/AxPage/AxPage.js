

var AxBarX = -243,AxBarLevel2X = - 243;

var AxPageCorrectAnswer;
var AxBarCenterX = (AxBarX + 100) /2; 

demo.AxPage = function(){};
demo.AxPage = {
    
    
  init: function(){
      Sharpening = false;
      demo.AxPage.Range = 0;
      answercount = 0;
      level = 1;
      range = 0;
  },
  preload: function(){

  },
  create: function(){
      console.log(level); 
        
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
      game.stage.backgroundColor = "#000000";
      game.add.sprite(0,0,'AxPageBG');
     
      LevelState.AxPageCount++;
      //AxBar------------------------------------------------------------------------------------------------------
      AxBarBG = game.add.sprite(100,0,'AxBar','AxBarBG.png');
      AxBarBG.alpha = 0;
      //Bar----------------------------------------------------------------------------------------------------------------
      AxBarSharp = game.add.sprite(AxBarX,0,'AxBar','AxBarSharp.png');
      AxBarSharpTween = game.add.tween(AxBarSharp).to({alpha:'-0.2'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarSharpTween.pause();      
      AxBarSharp.alpha = 0;
    

      AxBarSharpLevel2 = game.add.sprite(AxBarLevel2X,0,'AxBar','AxBarSharpLevel2.png');
      AxBarSharpLevel2Tween = game.add.tween(AxBarSharpLevel2).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarSharpLevel2Tween.pause();      
      AxBarSharpLevel2.alpha = 0;
              
      AxBarmask = game.add.graphics();
      AxBarmask.beginFill(0xffffff);
      AxBarmask.drawRect(250,70,350,50);
      AxBarSharp.mask = AxBarmask;
      AxBarSharpLevel2.mask = AxBarmask;
      
      AxBar = game.add.sprite(100,0,'AxBar','AxBar.png');
      AxBar.alpha = 0;
      AxBarLight = game.add.sprite(100,0,'AxBar','AxBarLight.png');
      AxBarLight.alpha = 0;
      
        
      AxBarLightLevel1 = game.add.sprite(100,0,'AxBar','AxBarLight.png');
      AxBarLightLevel1Tween = game.add.tween(AxBarLightLevel1).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarLightLevel1Tween.pause();  
      AxBarLightLevel1.alpha = 0;     
      
      AxBarEnergy = game.add.sprite(100,0,'AxBar','AxBarEnergy.png');
      AxBarEnergy.alpha = 0;      

      AxBarLightLevel2 = game.add.sprite(100,0,'AxBar','AxBarLightFull.png');
      AxBarLightLevel2Tween = game.add.tween(AxBarLightLevel2).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      AxBarLightLevel2Tween.pause();  
      AxBarLightLevel2.alpha = 0;      
      
      //FoxSitting------------------------------------------------------------------------------------------------------
      FoxSitting = game.add.sprite(300,300,'FoxWithAx001');
      FoxSittingAnimate = FoxSitting.animations.add("FoxSittingDynamic",Phaser.Animation.generateFrameNames('FoxWithAx001_',10,17,'.png',5),10,true);
      FoxSitting.animations.play("FoxSittingDynamic",5,true); 
      FoxSitting.events.onInputDown.add(FoxSittingDown, this);
      FoxSitting.events.onInputOver.add(FoxSittingOver, this);
      FoxSitting.events.onInputOut.add(FoxSittingOut, this);
      FoxSitting.inputEnabled = true;
      FoxSitting.input.useHandCursor = true; 
      
      FoxSitting002 = game.add.sprite(300,300,'FoxSitting002');
      FoxSitting002Animate = FoxSitting002.animations.add("FoxSitting002Dynamic",Phaser.Animation.generateFrameNames('FoxSitting002_',10,24,'.png',5),10,true);
      FoxSitting002.alpha = 0;

      
      FoxWithAx = game.add.sprite(300,300,'FoxWithAx');
      FoxWithAxAnimate = FoxWithAx.animations.add("FoxWithAxDynamic",Phaser.Animation.generateFrameNames('FoxWithAx002_',0,9,'.png',5),10,true);
      FoxWithAx.alpha = 0;
      FoxWithAx.events.onInputDown.add(StopSharpening, this);
      FoxWithAx.events.onInputOver.add(FoxWithAxOver, this);
      FoxWithAx.events.onInputOut.add(FoxWithAxOut, this);
      FoxWithAx.inputEnabled = false;
      
      FoxWithGoldenAx = game.add.sprite(300,300,'FoxWithAx003');
      FoxWithGoldenAxAnimate = FoxWithGoldenAx.animations.add("FoxWithGoldenAxDynamic",Phaser.Animation.generateFrameNames('FoxWithAx003_',0,9,'.png',5),10,true);
      FoxWithGoldenAx.alpha = 0;
      FoxWithGoldenAx.events.onInputDown.add(StopSharpening, this);
      FoxWithGoldenAx.events.onInputOver.add(FoxWithAxOver, this);
      FoxWithGoldenAx.events.onInputOut.add(FoxWithAxOut, this);
      FoxWithGoldenAx.inputEnabled = false;      

      //Text-----------------------------------------------------------------------------------------------------------------
      StartSharpenText = game.add.sprite(centerX,0,'AxPageText',"StartSharpenText.jpg");
      StartSharpenText.anchor.setTo(0.5,0);
  
      StopSharpenText = game.add.sprite(centerX,0,'AxPageText',"StopSharpenText.jpg");
      StopSharpenText.anchor.setTo(0.5,0);

      ExitAxPageText = game.add.sprite(centerX,0,'AxPageText',"ExitAxPageText.jpg");
      ExitAxPageText.anchor.setTo(0.5,0);        
    
      AxPagemask = game.add.graphics();
      AxPagemask.beginFill(0xffffff);
      AxPagemask.drawRect(0,150,1600,600);
        
      StartSharpenText.mask = AxPagemask;
      StopSharpenText.mask = AxPagemask;
      ExitAxPageText.mask = AxPagemask;
      
      //Panel---------------------------------------------------------------------------------------------------------------------
      QuestionPanel = game.add.sprite(0,0,'Panel','QuestionPanel.png');
      QuestionPanel.alpha = 0;

      QuestionPanelGolden = game.add.sprite(0,0,'Panel','QuestionPanelGolden.png');
      QuestionPanelGolden.alpha = 1;
      QuestionPanelGoldenTween = game.add.tween(QuestionPanelGolden).to({alpha:'-0.5'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      QuestionPanelGoldenTween.pause();
      QuestionPanelGolden.alpha = 0; 
      
      var style = { font: "40px Arial", fill: "#dfc985", align: "center" };
      for(let i = 0;i<5;i++){
          AnswerPanel[i] = game.add.sprite(centerX+100*i,centerY+98,'Panel','AnswerPanel.png');
          AnswerPanel[i].anchor.setTo(0.5);
          
          AnswerPanel[i].alpha = 0;
          
          AnswerPanel[i].events.onInputDown.add(AxPageCheckAnswerDown, this);
          AnswerPanel[i].variable = i+1;
          AnswerPanel[i].inputEnabled = false;
          answerNum[i] = game.add.text(centerX+100*i,centerY+100,'', style);
          answerNum[i].anchor.setTo(0.5);
      }
      
      //PanelGlow------------------------------------------------------------------------------------------------------------------
      PanelGlowNumSum = game.add.sprite(0,0,'Panel','PanelGlowNumSum.png');
      PanelGlowNumSum.alpha = 0;
      
      PanelGlowNumAdd = game.add.sprite(0,0,'Panel','PanelGlowNumAdd.png');
        
      PanelGlowNumAdd.alpha = 0;   
      
      QuestionPanelWrongFx = game.add.sprite(0,0,'QuestionPanelWrongFx');
      QuestionPanelWrongFxAnimate = QuestionPanelWrongFx.animations.add("QuestionPanelWrongFx",Phaser.Animation.generateFrameNames('QuestionPanelWrongFx_',0,20,'.png',5),10,true);
      QuestionPanelWrongFx.alpha = 0;
      
      QuestionPanelRightFx = game.add.sprite(0,0,'QuestionPanelRightFx');
      QuestionPanelRightFxAnimate = QuestionPanelRightFx.animations.add("QuestionPanelRightFx",Phaser.Animation.generateFrameNames('QuestionPanelRightFx_',0,20,'.png',5),10,true);
      QuestionPanelRightFx.alpha = 0;  
      
      var style = { font: "60px Arial", fill: "#d8cdaa", align: "center" }; 
      NumSum = game.add.text(centerX+208,centerY-179,'', style);
      NumSum.anchor.set(0.5);
    
      NumAdd1 = game.add.text(centerX+208-120,centerY-63,'', style);
      NumAdd1.anchor.set(0.5);    

      NumAdd2 = game.add.text(centerX+208+120,centerY-63,'', style);
      NumAdd2.anchor.set(0.5);        
      //EnergyTransfer-------------------------------------------------------------------------------------------------------------
      //EnergyNumSum = game.add.sprite(0,100,'Panel','PanelGlowNumSum.png');
      //EnergyNumSum.alpha = 0;
      
      EnergyNumAdd = game.add.sprite(0,100,'AxBar','AxBarEnergyBall.png');
      EnergyNumAdd.alpha = 0;      
      //ArrowSheet------------------------------------------------------------------------------------------------------------------
        
      ArrowSheet = game.add.sprite(0,100,'ArrowSheet');
      ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
      //ArrowSheet.alpha = 0;
      ArrowSheet.x = -330;
      ArrowSheet.y = -150;
      ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
      ArrowSheet.alpha = 1;     
    
      //Fire---------------------------------------------------------------------------------------------------------------
      Fire001 = game.add.sprite(0,-100,'Fire');
      Fire001.animations.add("Fire001",Phaser.Animation.generateFrameNames('Fire001_',0,25,'.png',5),10,true);
      Fire001.animations.play("Fire001",30,true);
      
      Fire002 = game.add.sprite(0,-100,'Fire');
      Fire002.animations.add("Fire002",Phaser.Animation.generateFrameNames('Fire002_',0,25,'.png',5),10,true);
      Fire002.animations.play("Fire002",25,true);      
      
      Fire003 = game.add.sprite(0,-100,'Fire');
      Fire003.animations.add("Fire003",Phaser.Animation.generateFrameNames('Fire003_',0,25,'.png',5),10,true);
      Fire003.animations.play("Fire003",25,true);            
      //Board-----------------------------------------------------------------------------------------------------------
      BoardBG = game.add.sprite(centerX,centerY,'Board','BoardBG.png');
      BoardBG.anchor.setTo(0.5);
      BoardBG.alpha = 0;

      BoardSeal = game.add.sprite(0,0,'Board','BoardSeal.png');
      BoardSeal.alpha = 0;

      BoardBackBtn = game.add.sprite(0,0,'Board','BoardBackBtn.png');
      BoardBackBtn.alpha = 0;

      BoardBackBtnHover = game.add.sprite(0,0,'Board','BoardBackBtnHover.png');
      BoardBackBtnHoverTween = game.add.tween(BoardBackBtnHover).to({alpha:'-0.5'},500,'Quad.easeInOut',true,0,false,true).loop(true);
      BoardBackBtnHoverTween.pause();
      BoardBackBtnHover.alpha = 0;

      BoardBackBtnHoverArea = game.add.sprite(858,476,'Board','BoardBackBtnHoverArea.png');
      BoardBackBtnHoverArea.alpha = 0;
      BoardBackBtnHoverArea.events.onInputDown.add(BoardBackBtnDown, this);
      BoardBackBtnHoverArea.events.onInputOver.add(BoardBackBtnOver, this);
      BoardBackBtnHoverArea.events.onInputOut.add(BoardBackBtnOut, this);
      //BoardBackBtnHoverArea.inputEnabled = true;      
      //ExitBtn---------------------------------------------------------------------------------------------------
      /*
      ExitBtn = game.add.sprite(1150,550,'ExitBtn');
      ExitBtn.alpha = 0;      
      ExitBtn.events.onInputDown.add(ExitAxPage, this);
      ExitBtn.inputEnabled = true;
      ExitBtn.input.useHandCursor = true; 
      */
      //Btn-----------------------------------------------------------------------------------------------------------------
      AxPageBackBtn = game.add.sprite(458,376,'Btn','BackBtn.png');
      AxPageBackBtn.alpha = 1;
      AxPageBackBtn.scale.setTo(0);
      AxPageBackBtn.anchor.setTo(1,1);
      AxPageBackBtn.events.onInputDown.add(AxPageBackBtnDown, this);
      AxPageBackBtn.events.onInputOver.add(AxPageBackBtnOver, this);
      AxPageBackBtn.events.onInputOut.add(AxPageBackBtnOut, this);

      AxPageStartBtn = game.add.sprite(481,376,'Btn','StartBtn.png');
      AxPageStartBtn.alpha = 1;
      AxPageStartBtn.scale.setTo(0)
      AxPageStartBtn.anchor.setTo(0,1);
      AxPageStartBtn.events.onInputDown.add(AxPageStartBtnDown, this);
      AxPageStartBtn.events.onInputOver.add(AxPageStartBtnOver, this);
      AxPageStartBtn.events.onInputOut.add(AxPageStartBtnOut, this);      

      ExitAxPageTextBoard = game.add.sprite(0,0,'Btn','ExitAxPageText.png');
      ExitAxPageTextBoardTween = game.add.tween(ExitAxPageTextBoard).to({alpha:0.5},500,'Quad.easeInOut',true,0,false,true).loop(true);
      
      ExitAxPageBtnArea = game.add.sprite(1420,330,'Btn','ExitAxPageBtnArea.jpg');
      ExitAxPageBtnArea.events.onInputDown.add(ExitAxPageBtnDown, this);
      ExitAxPageBtnArea.alpha = 0;
      ExitAxPageBtnArea.inputEnabled = true;
      ExitAxPageBtnArea.input.useHandCursor = true; 
      //AxPageOpening--------------------------------------------------------------------------------------------------------
      AxPageOpening = game.add.sprite(0,100,'BlackBG');
      AxPageOpening.alpha = 1;      
      game.add.tween(AxPageOpening).to({alpha:0},500,'Linear',true,0);  
      
      //AxPageClosing--------------------------------------------------------------------------------------------------------
      AxPageClosing = game.add.sprite(0,100,'BlackBG');
      AxPageClosing.alpha = 0;      
      
      //sound----------------------------------------------------------------------------------------------------------------
      rightFX = game.add.audio('rightFX');
      AxFX = game.add.audio('AxFX');
      AddEnergyFX = game.add.audio('AddEnergyFX');
      AxPagePlay = game.add.audio('AxPagePlay');
      AxPageSuccess = game.add.audio('AxPageSuccess');
      WrongFX = game.add.audio('wrongFX');
      
      //AxPageMusicBG.loopFull(1);
  },
  update: function(){
      if( AxBarSharpLevel2.x > -243 && AxBarSharpLevel2.x <= 100 && Sharpening == true ){
          AxBarSharpLevel2.x -= 0.1;
      }
  } 
}
function ExitAxPageBtnDown(){
    ExitAxPage();
}

//AxPageBackBtnDown-----------------------------------------------------------------------------------------------------------------------
function AxPageBackBtnDown(){
    ExitAxPage();   
}
function AxPageBackBtnOver(){
    AxPageBackBtnScaleTween = game.add.tween(AxPageBackBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
    
}
function AxPageBackBtnOut(){
    AxPageBackBtnScaleTween.pause();
    AxPageBackBtn.scale.setTo(1);
}
//AxPageStartBtnDown------------------------------------------------------------------------------------------------------------------------
function AxPageStartBtnDown(){
    StartSharpening();
}
function AxPageStartBtnOver(){
    AxPageStartBtnScaleTween = game.add.tween(AxPageStartBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function AxPageStartBtnOut(){
    AxPageStartBtnScaleTween.pause();
    AxPageStartBtn.scale.setTo(1);
    //game.add.tween(AxPageStartBtn.scale).to({x:1,y:1},100,'Linear',true,0);
}
//BoardBackBtnDown---------------------------------------------------------------------------------------------------------------------------
function BoardBackBtnDown(){
    ExitAxPage();  
}
function BoardBackBtnOver(){
    BoardBackBtnHoverTween.resume();
    BoardBackBtnHover.alpha = 1;    
}
function BoardBackBtnOut(){
    BoardBackBtnHoverTween.pause();
    BoardBackBtnHover.alpha = 0;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
function ExitAxPage(){
    AxPagePlayVolumeMute = game.add.tween(AxPagePlay).to({volume:0},500,'Linear',true,0);
    AxPagePlayVolumeMute.onComplete.add(function(){
        AxPagePlay.stop();
    },this);
    
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    
    AxBarX = AxBarSharp.x;
    AxBarLevel2X = AxBarSharpLevel2.x;    
    AxPageClosingTween = game.add.tween(AxPageClosing).to({alpha:1},500,'Linear',true,0);  
    AxPageClosingTween.onComplete.add(function(){
        game.state.start('BootLevelMap');
    },this);
}
//FoxSittingDown---------------------------------------------------------------------------------------------------------------------------
function FoxSittingDown(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;     
    //ExitAxPageTextBoardTween.pause();
    //ExitAxPageTextBoard.alpha = 0;
    FoxSitting.inputEnabled = false;
    //ExitAxPageBtnArea.inputEnabled = false;
    StartSharpening();
    /*
    game.add.tween(AxPageBackBtn.scale).to({x:1,y:1},500,Phaser.Easing.Back.Out,true,0);
    AxPageStartBtnTween = game.add.tween(AxPageStartBtn.scale).to({x:1,y:1},500,Phaser.Easing.Back.Out,true,0);
    AxPageStartBtnTween.onComplete.add(function(){
        AxPageBackBtn.inputEnabled = true;
        AxPageBackBtn.input.useHandCursor = true;
        AxPageStartBtn.inputEnabled = true;
        AxPageStartBtn.input.useHandCursor = true;
    },this);
    */
}
function FoxSittingOver(){
    /*
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    */
    //game.add.tween(StartSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxSittingOut(){
     
    //ArrowSheet.animations.stop();
    //ArrowSheet.alpha = 0;      
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}
//FoxWithAxOverBtn------------------------------------------------------------------------------------------------------------------------
function FoxWithAxOver(){
    /*
    ArrowSheet.x = -330;
    ArrowSheet.y = -50;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;     
    */
    //game.add.tween(StopSharpenText).to({y:150},500,'Quad.easeOut',true,0); 
}
function FoxWithAxOut(){
    //ArrowSheet.animations.stop();
    //ArrowSheet.alpha = 0;      
    //game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
}

function StartSharpening(){
    //game.add.tween(StartSharpenText).to({y:0},500,'Quad.easeOut',true,0);
   
    AxPagePlay.loopFull(1);
    Sharpening = true;
    //game.add.tween(AxPageBackBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    //game.add.tween(AxPageStartBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    AxPageBackBtn.inputEnabled = false;
    AxPageStartBtn.inputEnabled = false;
    
    //AxPageStartBtnScaleTween.pause();
    FoxSitting.alpha = 0;
    FoxSitting.animations.stop();
    
    FoxSitting002.alpha = 0;
    FoxSitting002.animations.stop();    
    FoxSitting.inputEnabled = false;
    if( AxBarSharp.x > 100 ){
        FoxWithGoldenAx.alpha = 1;
        FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",15,true); 
        AxBarLightLevel1.alpha = 1;
        AxBarLightLevel1Tween.resume();       
    }
    if( AxBarSharp.x < 100 ){
        FoxWithAx.alpha = 1;
        AxFX.play();
        FoxWithAxAnimate = FoxWithAx.animations.play("FoxWithAxDynamic",15,true); 
        FoxWithAxAnimate.onLoop.add(function(){
            //console.log("Start");
            AxFX.play();
        }, this);

    }
    if( AxBarSharpLevel2.x > -243){
        game.add.tween(QuestionPanelGoldenTween).to({alpha:1},500,'Quad.easeOut',true,0);
        QuestionPanelGoldenTween.resume();        
        AxBarSharpLevel2.alpha = 1;
        AxBarSharpLevel2Tween.resume();
    }
    //AxFX.loopFull(1);
    FoxWithAx.inputEnabled = true;
    FoxWithAx.input.useHandCursor = true;
    //ExitBtn.inputEnabled = false;
    
    AxBarBG.alpha = 1;
    AxBarSharp.alpha = 1;
    AxBarSharpTween.resume();
    
    AxBar.alpha = 1;
    //game.add.tween(QuestionPanel).to({alpha:1},500,'Quad.easeOut',true,0); 
    /*
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:1},500,'Quad.easeOut',true,0); 
        AnswerPanel[i].inputEnabled = true;   
        //answer_panel[i].alpha = 1;    
    }
    */
    demo.AxPage.setPanel(1);    
    demo.createQuestionNum(level,demo.AxPage.Range);
}

function StopSharpening(){
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;     
    
    AxPagePlay.stop();
    Sharpening = false;

    game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
    FoxWithAx.alpha = 0;
    FoxWithAx.animations.stop();
    FoxWithGoldenAx.alpha = 0;
    FoxWithGoldenAx.animations.stop(); 
    FoxWithAx.inputEnabled = false;
    
    if( AxBarSharp.x >= 100 ){
        FoxSitting002.alpha = 1;
        FoxSitting002.animations.play("FoxSitting002Dynamic",15,true); 
        
    }else{
        FoxSitting.alpha = 1;
        FoxSittingAnimate.play();
        
    }
    AxBarBG.alpha = 0;
    AxBarSharpTween.pause();
    AxBarSharp.alpha = 0;

    AxBarSharpLevel2Tween.pause();
    AxBarSharpLevel2.alpha = 0;
    
    AxBar.alpha = 0;
    AxBarLight.alpha = 0;
    AxBarLightLevel1Tween.pause();
    AxBarLightLevel1.alpha = 0;

    demo.AxPage.setPanel(0);

}
//Question-----------------------------------------------------------------------------------------------------------
//var NumSum,NumAdd1,NumAdd2;


function AxPageCheckAnswerDown(AnswerPanel){

    if( AnswerPanel.variable == AxPageCorrectAnswer ){
        
        QuestionPanelRightFx.alpha = 1;
        game.add.tween(QuestionPanelRightFx).to({alpha:0},500,'Quad.easeOut',true,200);
        QuestionPanelRightFx.animations.play("QuestionPanelRightFx",30,false);
        /*
        QuestionPanelRightFxAnimate.onComplete.add(function(){
            QuestionPanelRightFx.alpha = 0;
        },this);
        */
           
        AxPageCheckAnswer();
        answercount++;
    }else{
        WrongFX.play();
        QuestionPanelWrongFx.alpha = 1;
        QuestionPanelWrongFx.animations.play("QuestionPanelWrongFx",45,false);
        QuestionPanelWrongFxAnimate.onComplete.add(function(){
            QuestionPanelWrongFx.alpha = 0;
        },this);
        answercount++;
    }
    
}


function AxPageCheckAnswer(){
    //RightFx-------------------------------
    rightFX.play();
    
    AxBarLight.alpha = 1;
    game.add.tween(AxBarLight).to({alpha:0},1000,'Quad.easeOut',true,0);

    if( level == 1 ){
        PanelGlowNumSum.alpha = 1;
        game.add.tween(PanelGlowNumSum).to({alpha:0},500,'Quad.easeOut',true,0);
        
    }else if( level == 2 ){
        PanelGlowNumAdd.alpha = 1;
        game.add.tween(PanelGlowNumAdd).to({alpha:0},500,'Quad.easeOut',true,0);
    }
        
    //AxPageRand Change---------------------------------------------------------------
    if( AxBarSharp.x >= AxBarCenterX - 30 && level == 1 ){
        demo.AxPage.Range = 1;
    }else if( AxBarSharpLevel2.x >= AxBarCenterX - 30 ){
        demo.AxPage.Range = 1;
    }
    //-----------------------------------------------------------------------------------------------
    if( AxBarSharp.x < 100 ){
        //AxBarSharpPlusTween = game.add.tween(AxBarSharp).to({x:'+300'},250,'Quad.easeOut',true,0);
        AxBarSharpPlusTween = game.add.tween(AxBarSharp).to({x:'+30'},250,'Quad.easeOut',true,0);
    }
    
    if( AxBarSharp.x >= 81 && AxBarSharpLevel2.x <= -243 ){
        demo.AxPage.Range = 0;
        level = 2;
        
        AxBarSharpLevel2Tween.resume();      
        AxBarSharpLevel2.alpha = 1;
 
        AxBarLightLevel1.alpha = 1;
        AxBarLightLevel1Tween.resume();
        
        FoxWithAx.alpha = 0;
        FoxWithAxAnimate.stop();
        
        AxFX.play();
        FoxWithGoldenAx.alpha = 1;
        FoxWithGoldenAx.animations.play("FoxWithGoldenAxDynamic",17,true); 
        FoxWithGoldenAxAnimate.onLoop.add(function(){
            AxFX.play();                     
        },this);
            
        game.add.tween(QuestionPanelGoldenTween).to({alpha:1},500,'Quad.easeOut',true,0);
        QuestionPanelGoldenTween.resume();
        
        
    }
    //Level2-----------------------------------------------------------------------------------
    if( AxBarSharp.x >= 100 && AxBarSharpLevel2.x < 100){
        
        AxPageEnergyTranfer();
        
    }
    if( AxBarSharpLevel2.x > 71 ){
        
        LevelState.AxPageComplete = true;
        LevelState.AxPageCompleteCount++;
        if( LevelState.AxPageCompleteCount == 1 ){
            LevelState.CheckNewMedal = true;    
        }

        AxPageSuccess.play();
        AxPagePlay.stop(); 
        FinishSharpening();
    }

    if( AxBarSharpLevel2.x <= 71 ){
        demo.createQuestionNum(level,demo.AxPage.Range);
    }    
    
}
function AxPageEnergyTranfer(){
    EnergyNumAdd.alpha = 1;
    EnergyNumAdd.x = 0;
    EnergyNumAdd.y = 0;
    EnergyNumAddTween = game.add.tween(EnergyNumAdd).to({x:AxBarSharpLevel2.x-600,y:-230},300,'Quad.easeIn',true,0);
    EnergyNumAddTween.onComplete.add(function(){
        EnergyNumAdd.alpha = 0;
        //game.add.tween(AxBarSharpLevel2).to({x:'+300'},250,'Quad.easeOut',true,0);
        
        game.add.tween(AxBarSharpLevel2).to({x:'+30'},250,'Quad.easeOut',true,0);
        AddEnergyFX.play();
        AxBarEnergy.alpha = 1;
        game.add.tween(AxBarEnergy).to({alpha:0},1000,'Quad.easeOut',true,0);
    },this);
}
function FinishSharpening(){
    Sharpening = false;
    AxFX.stop();
    game.add.tween(StopSharpenText).to({y:0},500,'Quad.easeOut',true,0); 
    FoxWithAx.alpha = 0;
    FoxWithAx.animations.stop();
    FoxWithGoldenAx.alpha = 0;
    FoxWithGoldenAx.animations.stop(); 
    FoxWithAx.inputEnabled = false;
    
    if( AxBarSharp.x >= 0 ){
        FoxSitting002.alpha = 1;
        FoxSitting002.animations.play("FoxSitting002Dynamic",15,true); 
        
    }else{
        FoxSitting.alpha = 1;
        FoxSittingAnimate.play();
        
    }
    demo.AxPage.setPanel(0);
    
    AxBarLightLevel2.alpha = 1;
    AxBarLightLevel2Tween.resume();
    
    BoardBG.scale.setTo(0);
    BoardBG.alpha = 1;
    game.add.tween(BoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    game.add.tween(BoardSeal).to({alpha:1},500,'Quad.easeOut',true,1500);
    BoardBackBtnTween = game.add.tween(BoardBackBtn).to({alpha:1},500,'Quad.easeOut',true,2500);
    BoardBackBtnTween.onComplete.add(function(){
        BoardBackBtnHoverArea.inputEnabled = true;
        BoardBackBtnHoverArea.input.useHandCursor = true;
    },this);

}
demo.AxPage.setPanel = function(alpha){
    Tween = game.add.tween(QuestionPanel).to({alpha:alpha},500,'Quad.easeOut',true,0);
    game.add.tween(QuestionPanelGolden).to({alpha:alpha},500,'Quad.easeOut',true,0);
    game.add.tween(NumSum).to({alpha:alpha},500,'Quad.easeOut',true,0);
    game.add.tween(NumAdd1).to({alpha:alpha},500,'Quad.easeOut',true,0);
    game.add.tween(NumAdd2).to({alpha:alpha},500,'Quad.easeOut',true,0);
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:alpha},500,'Quad.easeOut',true,0); 
        game.add.tween(answerNum[i]).to({alpha:alpha},500,'Quad.easeOut',true,0); 
    }
    
    if( alpha == 0 ){
        for(let i = 0;i<5;i++){
           AnswerPanel[i].inputEnabled = false;
        }
        QuestionPanelGoldenTween.pause();
        Tween.onComplete.add(function(){
            FoxSitting.inputEnabled = true;
            FoxSitting.input.useHandCursor = true;
        
        },this);
    
    }else{
        for(let i = 0;i<5;i++){
           AnswerPanel[i].inputEnabled = true;
        }        
    }
};




