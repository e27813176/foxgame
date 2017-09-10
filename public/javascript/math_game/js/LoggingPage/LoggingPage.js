var AnswerPanel = new Array();
var TreeBloodBarX = 0;
var LoggingPageCorrectAnswer;

demo.LoggingPage = function(){};
demo.LoggingPage = {
    
    init: function(){
        demo.LoggingPage.Range = 0; 
        totalAnswerCount = 100;
        level = 3;
        answercount = 1;
    },
    preload: function(){

    },
    create: function(){
        LevelState.LoggingPageCount++;
        
        console.log('Level2');
        console.log(level);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = "#100010";
        game.add.sprite(0,0,'LoggingPage')
        //sound----------------------------------------------------------------------------------------------------------------
      
        rightFX = game.add.audio('rightFX');
        Logging = game.add.audio('Logging');
        LoggingBounce = game.add.audio('LoggingBounce');
        LoggingPagePlay = game.add.audio('LoggingPagePlay');
        LoggingBG = game.add.audio('LoggingBG');
        WrongFX = game.add.audio('wrongFX');
        LoggingSuccess = game.add.audio('LoggingSuccess');
                

        //Text---------------------------------------------------------------------------------------------------
        NeedSharpeningText = game.add.sprite(0,0,'Panel',"NeedSharpeningText.png");
        NeedSharpeningTextTween = game.add.tween(NeedSharpeningText).to({alpha:0.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
        NeedSharpeningTextTween.pause();
        NeedSharpeningText.alpha = 0;
        
        //FoxBounceAnimation------------------------------------------------------------------------------------------------------
        FoxBounce001 = game.add.sprite(-10,0,'FoxBounce001');
        FoxBounce001Animation = FoxBounce001.animations.add("FoxBounce001Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',100,128,'.png',5),10,true);
        FoxBounce001.alpha = 0;
        
        FoxBounce002 = game.add.sprite(-10,0,'FoxBounce002');
        FoxBounce002Animation = FoxBounce002.animations.add("FoxBounce002Dynamic",Phaser.Animation.generateFrameNames('FoxBounce_',120,128,'.png',5),10,true);
        FoxBounce002.alpha = 0;
        
         
        FoxBounce001Animation.onComplete.add(function () {
            //LoggingBounce.play();
            FoxBounce001.alpha = 0;
            FoxBounce002.alpha = 1;
            FoxBounce002.animations.play("FoxBounce002Dynamic",15,false);
        }, this);   
        FoxBounce002Animation.onComplete.add(function () {	
            FoxBounce002.alpha = 0;
            FoxBounce001.alpha = 1;
            FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);
        }, this);   
        //FoxLoggingAnimation------------------------------------------------------------------------------------------------------
        
        /*
        FoxLogging = game.add.sprite(420,420,'FoxLogging');
        FoxLogging.animations.add("FoxLoggingDynamic",Phaser.Animation.generateFrameNames('foxLogging004_',0,18,'.png',5),10,true);
        FoxLogging.animations.play("FoxLoggingDynamic",10,true);     
        */
        
        FoxLogging001 = game.add.sprite(-10,0,'FoxLogging001');
        FoxLogging001Animation = FoxLogging001.animations.add("FoxLogging001Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',0,28,'.png',5),10,true);
        FoxLogging001.alpha = 0;
        
        FoxLogging002 = game.add.sprite(-10,0,'FoxLogging002');
        FoxLogging002Animation = FoxLogging002.animations.add("FoxLogging002Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',29,45,'.png',5),10,true);
        FoxLogging002.alpha = 0;
        
        FoxLogging003 = game.add.sprite(-10,0,'FoxLogging003');
        FoxLogging003Animation = FoxLogging003.animations.add("FoxLogging003Dynamic",Phaser.Animation.generateFrameNames('FoxLogging_',46,71,'.png',5),10,true);
        FoxLogging003.alpha = 0;

        
        //FoxLoggingBtn------------------------------------------------------------------------------------------------------
        FoxLoggingPageBtn = game.add.sprite(600,370,'FoxLoggingBtn');
        FoxLoggingPageBtn.alpha = 0;
        FoxLoggingPageBtn.events.onInputDown.add(FoxLoggingPageBtnDown, this);
        FoxLoggingPageBtn.events.onInputOver.add(FoxLoggingPageBtnOver, this);
        FoxLoggingPageBtn.events.onInputOut.add(FoxLoggingPageBtnOut, this);
        FoxLoggingPageBtn.inputEnabled = true;
        FoxLoggingPageBtn.input.useHandCursor = true; 
        //FoxStopLoggingBtn---------------------------------------------------------------------------------------------------
        FoxStopLoggingBtn = game.add.sprite(600,370,'FoxLoggingBtn');
        FoxStopLoggingBtn.alpha = 0;
        FoxStopLoggingBtn.events.onInputDown.add(StopLogging, this);
        FoxStopLoggingBtn.events.onInputOver.add(StopLoggingOver, this);
        FoxStopLoggingBtn.events.onInputOut.add(StopLoggingOut, this);
        FoxStopLoggingBtn.inputEnabled = false;

        
        FoxLogging001Animation.onComplete.add(function () {	
            Logging.play();
            FoxLogging001.alpha = 0;
            FoxLogging002.alpha = 1;
            FoxLogging002.animations.play("FoxLogging002Dynamic",30,false);
        }, this);
        
        FoxLogging002Animation.onComplete.add(function () {	
            FoxLogging002.alpha = 0;
            FoxLogging003.alpha = 1;
            FoxLogging003.animations.play("FoxLogging003Dynamic",30,false);
            if( AxBarSharpLevel2.x > -243  ){
                game.add.tween(AxBarSharpLevel2).to({x:'-20'},500,'Quad.easeOut',true,0); 
            }
            if( AxBarSharp.x > -243 && AxBarSharpLevel2.x <= -243){
                game.add.tween(AxBarSharp).to({x:'-20'},500,'Quad.easeOut',true,0); 
                AxBarSharpLevel2.alpha = 0;
                AxBarSharpLevel2Tween.pause();

            }
            
        }, this);
        
        FoxLogging003Animation.onComplete.add(function () {	
            FoxLogging003.alpha = 0;
            if( AxBarSharp.x <= -243 ){
                NeedSharpeningTextTween.resume();
                NeedSharpeningText.alpha = 1;
                FoxBounce001.alpha = 1;
                FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);        
            }
            if( AxBarSharp.x > -243 ){
                FoxLogging001.alpha = 1;
                FoxLogging001.animations.play("FoxLogging001Dynamic",30,false);

            }
        }, this);        
        
        //FoxStandingAnimation------------------------------------------------------------------------------------------------------
        FoxStanding = game.add.sprite(-10,0,'FoxStanding');
        FoxStandingAnimation = FoxStanding.animations.add("FoxStandingDynamic",Phaser.Animation.generateFrameNames('FoxStanding_',78,99,'.png',5),10,true);
        FoxStanding.animations.play("FoxStandingDynamic",15,true);
        
        /*
        FoxStanding.events.onInputDown.add(StartLogging, this);
        FoxStanding.events.onInputOver.add(StartLoggingOver, this);
        FoxStanding.events.onInputOut.add(StartLoggingOut, this);
        FoxStanding.inputEnabled = true;
        FoxStanding.input.useHandCursor = true; 
        */
        
        game.add.sprite(0,0,'LoggingPageFront');
       
      
        //Panel------------------------------------------------------------------------------------------------------
        QuestionPanel = game.add.sprite(0,0,'Panel',"QuestionPanel.png");
        QuestionPanel.alpha = 0;
        //QuestionPanel.anchor.setTo(0.5);
        //QuestionPanel.scale.setTo(0.5);
        var style = { font: "50px Arial", fill: "#fef1ba", align: "center" };
        for(let i = 0;i<5;i++){
            AnswerPanel[i] = game.add.sprite(centerX+90*i+280,centerY+140,'Panel',"AnswerPanel.png");
            AnswerPanel[i].anchor.setTo(0.5);
            AnswerPanel[i].alpha = 0;
      
          
            AnswerPanel[i].events.onInputDown.add(LoggingPageAnswerPanelDown, this);
            AnswerPanel[i].inputEnabled = false;
            AnswerPanel[i].variable = i+1;
            answerNum[i] = game.add.text(centerX+90*i+280,centerY+140,'', style);
            answerNum[i].anchor.setTo(0.5);
        }
        //PanelGlow-------------------------------------------------------------------------------------------------
      
        PanelGlowNumSum = game.add.sprite(0,0,'Panel','PanelGlowSum.png');
        PanelGlowNumSum.alpha = 0;
      
        PanelGlowNumAdd = game.add.sprite(0,0,'Panel','PanelGlowAdd.png');
        
        PanelGlowNumAdd.alpha = 0;        
        
        QuestionPanelRightFx = game.add.sprite(0,0,'QuestionPanelFx');
        QuestionPanelRightFxAnimation = QuestionPanelRightFx.animations.add("QuestionPanelRightFx",Phaser.Animation.generateFrameNames('QuestionPanelRightFx_',0,12,'.png',5),10,true);
        QuestionPanelRightFx.alpha = 0;
        
        QuestionPanelWrongFx = game.add.sprite(0,0,'QuestionPanelFx');
        QuestionPanelWrongFxAnimation = QuestionPanelWrongFx.animations.add("QuestionPanelWrongFx",Phaser.Animation.generateFrameNames('QuestionPanelWrongFx_',0,12,'.png',5),10,true);
        QuestionPanelWrongFx.alpha = 0;  
        
        var style = { font: "60px Arial", fill: "#3a311f", align: "center" };      
        
        NumSum = game.add.text(centerX+462,centerY-178,'', style);
        NumSum.anchor.set(0.5);
    
        NumAdd1 = game.add.text(centerX+462-106,centerY-71,'', style);
        NumAdd1.anchor.set(0.5);    

        NumAdd2 = game.add.text(centerX+462+106,centerY-71,'', style);
        NumAdd2.anchor.set(0.5);         
        //AxBar------------------------------------------------------------------------------------------------------
        AxBarBG = game.add.sprite(100,0,'AxBar','AxBarBG.png');
        AxBarBG.alpha = 0;
        //Bar---------------------------------------------------------------------------------------------------------------
        AxBarSharp = game.add.sprite(AxBarX,0,'AxBar','AxBarSharp.png');
        AxBarSharpTween = game.add.tween(AxBarSharp).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
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
      
        
        AxBarFullLight = game.add.sprite(100,0,'AxBar','AxBarLight.png');
        AxBarFullLightTween = game.add.tween(AxBarFullLight).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        AxBarFullLightTween.pause();  
        AxBarFullLight.alpha = 0;      

      
        //Btn-----------------------------------------------------------------------------------------------------------------
        LoggingPageBackBtn = game.add.sprite(678,300,'Btn','BackBtn.png');
        LoggingPageBackBtn.alpha = 1;
        LoggingPageBackBtn.scale.setTo(0);
        LoggingPageBackBtn.anchor.setTo(1,1);
        LoggingPageBackBtn.events.onInputDown.add(LoggingPageBackBtnDown, this);
        LoggingPageBackBtn.events.onInputOver.add(LoggingPageBackBtnOver, this);
        LoggingPageBackBtn.events.onInputOut.add(LoggingPageBackBtnOut, this);

        LoggingPageStartBtn = game.add.sprite(701,300,'Btn','StartBtn.png');
        LoggingPageStartBtn.alpha = 1;
        LoggingPageStartBtn.scale.setTo(0)
        LoggingPageStartBtn.anchor.setTo(0,1);
        LoggingPageStartBtn.events.onInputDown.add(LoggingPageStartBtnDown, this);
        LoggingPageStartBtn.events.onInputOver.add(LoggingPageStartBtnOver, this);
        LoggingPageStartBtn.events.onInputOut.add(LoggingPageStartBtnOut, this);              
        
        LoggingPageExitText = game.add.sprite(0,0,'Panel','LoggingPageExitText.png');
        LoggingPageExitTextTween = game.add.tween(LoggingPageExitText).to({alpha:0.5},500,'Quad.easeInOut',true,0,false,true).loop(true);
        
        LoggingPageExitBtnArea = game.add.sprite(50,540,'LoggingPageExitBtnArea');
        LoggingPageExitBtnArea.events.onInputDown.add(LoggingPageExitBtnDown, this);        
        LoggingPageExitBtnArea.inputEnabled = true;
        LoggingPageExitBtnArea.input.useHandCursor = true;
        LoggingPageExitBtnArea.alpha = 0;
        //TreeBloodBar------------------------------------------------------------------------------------------------------
        TreeBloodBarBG = game.add.sprite(0,0,'TreeBloodBar','TreeBloodBarBG.png');
        TreeBloodBarBG.alpha = 0;
        
        TreeBloodBar = game.add.sprite(TreeBloodBarX,0,'TreeBloodBar','TreeBloodBar.png');
        TreeBloodBarTween = game.add.tween(TreeBloodBar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        TreeBloodBarTween.pause();      
        TreeBloodBar.alpha = 0;
        
        TreeBloodBar002 = game.add.sprite(TreeBloodBarX,0,'TreeBloodBar','TreeBloodBar002.png');
        TreeBloodBar002Tween = game.add.tween(TreeBloodBar002).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        TreeBloodBar002Tween.pause();      
        TreeBloodBar002.alpha = 0;
        
        TreeBloodBar003 = game.add.sprite(TreeBloodBarX,0,'TreeBloodBar','TreeBloodBar003.png');
        TreeBloodBar003Tween = game.add.tween(TreeBloodBar003).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        TreeBloodBar003Tween.pause();      
        TreeBloodBar003.alpha = 0;
        
        TreeBloodBar004 = game.add.sprite(TreeBloodBarX,0,'TreeBloodBar','TreeBloodBar004.png');
        TreeBloodBar004Tween = game.add.tween(TreeBloodBar004).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        TreeBloodBar004Tween.pause();      
        TreeBloodBar004.alpha = 0;
        
        TreeBloodBarmask = game.add.graphics();
        TreeBloodBarmask.beginFill(0xffffff);
        TreeBloodBarmask.drawRect(827,700,360,50);
        TreeBloodBar.mask = TreeBloodBarmask;  
        TreeBloodBar002.mask = TreeBloodBarmask; 
        TreeBloodBar003.mask = TreeBloodBarmask; 
        TreeBloodBar004.mask = TreeBloodBarmask; 
        
        TreeBloodBarTop = game.add.sprite(0,0,'TreeBloodBar','TreeBloodBarTop.png');
        TreeBloodBarTop.alpha = 0;

        //ScoreBoard------------------------------------------------------------------------------------------------------------
        ScoreBoardBG = game.add.sprite(800,400,'ScoreBoard','ScoreBoardBG.png');
        ScoreBoardBG.anchor.set(0.5);
        ScoreBoardBG.alpha = 0;    

        ScoreBoardGoldenWood = game.add.sprite(800,400,'ScoreBoard','GoldenWood.png');
        ScoreBoardGoldenWood.anchor.set(0.5);
        ScoreBoardGoldenWood.alpha = 0; 
        
        ScoreBoardGreenWood = game.add.sprite(800,400,'ScoreBoard','GreenWood.png');
        ScoreBoardGreenWood.anchor.set(0.5);
        ScoreBoardGreenWood.alpha = 0; 
        
        ScoreBoardRedWood = game.add.sprite(800,400,'ScoreBoard','RedWood.png');
        ScoreBoardRedWood.anchor.set(0.5);
        ScoreBoardRedWood.alpha = 0; 
        
        ScoreBoardLightBlueWood = game.add.sprite(800,400,'ScoreBoard','LightBlueWood.png');
        ScoreBoardLightBlueWood.anchor.set(0.5);
        ScoreBoardLightBlueWood.alpha = 0;         
        
        ScoreBoardBtn = game.add.sprite(0,0,'ScoreBoard','ScoreBoardBtn.png');
        ScoreBoardBtn.alpha = 0; 

        ScoreBoardHomeBtnHover = game.add.sprite(0,0,'ScoreBoard','ScoreBoardHomeBtnHover.png');
        ScoreBoardHomeBtnHover.alpha = 0;
        
        ScoreBoardContinueBtnHover = game.add.sprite(0,0,'ScoreBoard','ScoreBoardContinueBtnHover.png');
        ScoreBoardContinueBtnHover.alpha = 0;        

        ScoreBoardHomeBtn = game.add.sprite(885,463,'ScoreBoard','ScoreBoardBtnHover.png');        
        ScoreBoardHomeBtn.alpha = 0;
        ScoreBoardHomeBtn.events.onInputDown.add(ScoreBoardHomeBtnDown, this);
        ScoreBoardHomeBtn.events.onInputOver.add(ScoreBoardHomeBtnOver, this);
        ScoreBoardHomeBtn.events.onInputOut.add(ScoreBoardHomeBtnOut, this);
        
        ScoreBoardContinueBtn = game.add.sprite(783,463,'ScoreBoard','ScoreBoardBtnHover.png');        
        ScoreBoardContinueBtn.alpha = 0;
        ScoreBoardContinueBtn.events.onInputDown.add(ScoreBoardContinueBtnDown, this);
        ScoreBoardContinueBtn.events.onInputOver.add(ScoreBoardContinueBtnOver, this);
        ScoreBoardContinueBtn.events.onInputOut.add(ScoreBoardContinueBtnOut, this);
        
        ScoreBoardSeal = game.add.sprite(800,400,'ScoreBoard','ScoreBoardSeal.png');
        ScoreBoardSeal.anchor.set(0.5);
        ScoreBoardSeal.alpha = 0; 
        
        //ArrowSheet------------------------------------------------------------------------------------------------------------------
        
        ArrowSheet = game.add.sprite(0,0,'ArrowSheet');
        ArrowSheet.animations.add("ArrowSheetDynamic",Phaser.Animation.generateFrameNames('ArrowSheet_',0,8,'.png',5),10,true);
        //ArrowSheet.alpha = 0;
        ArrowSheet.x = -110;
        ArrowSheet.y = -120;
        ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
        ArrowSheet.alpha = 1;            
        //BlackBGOpening-----------------------------------------------------------------------------------------
        BlackBGOpening = game.add.sprite(0,0,'BlackBG');
        BlackBGOpening.alpha = 1;
        game.add.tween(BlackBGOpening).to({alpha:0},500,'Linear',true,0);
        
        //BlackBGClosing-----------------------------------------------------------------------------------------
        BlackBGClosing = game.add.sprite(0,0,'BlackBG');
        BlackBGClosing.alpha = 0;
        
        
    },
    update: function(){

    } 
}
function LoggingPageExitBtnDown(){
    ExitLoggingPage();
}
function LoggingPageBackBtnDown(){

    ExitLoggingPage();
}
function LoggingPageBackBtnOver(){
    LoggingPageBackBtnScaleTween = game.add.tween(LoggingPageBackBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function LoggingPageBackBtnOut(){
    LoggingPageBackBtnScaleTween.pause();
    LoggingPageBackBtn.scale.setTo(1);    
}

function LoggingPageStartBtnDown(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;        
    StartLogging();
}
function LoggingPageStartBtnOver(){
    LoggingPageStartBtnScaleTween = game.add.tween(LoggingPageStartBtn.scale).to({x:1.1,y:1.1},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function LoggingPageStartBtnOut(){
    LoggingPageStartBtnScaleTween.pause();
    LoggingPageStartBtn.scale.setTo(1);    
}

function FoxLoggingPageBtnDown(){
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0; 
    StartLogging();

}
function FoxLoggingPageBtnOver(){
    /*
    ArrowSheet.x = -110;
    ArrowSheet.y = -20;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;    
    */
}
function FoxLoggingPageBtnOut(){
    /*
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;      
    */
}

function ExitLoggingPage(){
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        answerNum[i].destroy();
    }    
    
    LoggingBGVolumeMute = game.add.tween(LoggingBG).to({volume:0},500,'Linear',true,0);
    LoggingBGVolumeMute.onComplete.add(function(){
        LoggingBG.stop();
    },this);
    
    AxBarX = AxBarSharp.x;
    AxBarLevel2X = AxBarSharpLevel2.x;    
    TreeBloodBarX = TreeBloodBar.x;
    

    LoggingPageBackBtn.inputEnabled = false;
    LoggingPageStartBtn.inputEnabled = false;
    ScoreBoardHomeBtn.inputEnabled = false;
    ScoreBoardContinueBtn.inputEnabled = false;      
    
    LoggingPageClosingTween001 = game.add.tween(BlackBGClosing).to({alpha:1},500,'Linear',true,0);        

    LoggingPageClosingTween001.onComplete.add(function () {	
        game.state.start('BootLevelMap');
    }, this);      
    
}

function StartLogging(){

    LoggingBG.loopFull(1);
    LoggingBG.volume = 0.6;    
    game.add.tween(LoggingPageBackBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    game.add.tween(LoggingPageStartBtn.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
    LoggingPageBackBtn.inputEnabled = false;
    LoggingPageStartBtn.inputEnabled = false;
    
    //LoggingPageExitBtnArea.inputEnabled = false;
    //LoggingPageExitTextTween.pause();
    LoggingPageExitText.alpha = 0;
    
    FoxStanding.alpha = 0;
    FoxStanding.animations.stop();
    if( AxBarSharp.x <= -243 ){
        FoxBounce001.alpha = 1;
        FoxBounce001.animations.play("FoxBounce001Dynamic",15,false);  
        NeedSharpeningTextTween.resume();
        NeedSharpeningText.alpha = 1;
    }
    if( AxBarSharp.x > -243 ){
        FoxLogging001.alpha = 1;
        FoxLogging001.animations.play("FoxLogging001Dynamic",30,false);

    }
    
    FoxLoggingPageBtn.inputEnabled = false;
    
    FoxStopLoggingBtn.inputEnabled = true;
    FoxStopLoggingBtn.input.useHandCursor = true;  
    
    game.add.tween(QuestionPanel).to({alpha:1},300,'Linear',true,0);
        
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:1},300,'Linear',true,0);
        AnswerPanel[i].inputEnabled = true;
        answerNum[i].alpha = 1;
    }
    NumAdd1.alpha = 1;
    NumAdd2.alpha = 1; 
    NumSum.alpha = 1
    AxBarBG.alpha = 1;
    AxBarSharp.alpha = 1;
    AxBarSharpTween.resume();
    
    AxBarSharp.alpha = 1;
    AxBarSharpTween.resume();
    if( AxBarSharpLevel2.x > -243){
        AxBarSharpLevel2.alpha = 1;
        AxBarSharpLevel2Tween.resume();
    }    
    AxBar.alpha = 1;
    
    game.add.tween(TreeBloodBarTop).to({alpha:1},300,'Linear',true,0);

    game.add.tween(TreeBloodBarBG).to({alpha:1},300,'Linear',true,0);
     
    //TreeBloodBarDynamic----------------------------------------------------------------------------------
    if( TreeBloodBar.x > -362/4 + 10 ){
        demo.LoggingPage.Range = 0;
        level = 3;
        
        game.add.tween(TreeBloodBar).to({alpha:1},300,'Linear',true,0);
        TreeBloodBarTween.resume();
    }else if( TreeBloodBar.x <= -362/4 + 10 && TreeBloodBar.x > 2*(-362/4) + 10 ){
        demo.LoggingPage.Range = 1;
        level = 3;
      
        game.add.tween(TreeBloodBar002).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar002Tween.resume();
        
        
    }else if( TreeBloodBar.x <= 2*(-362/4) + 10 && TreeBloodBar.x > 3*(-362/4) + 10 ){
        demo.LoggingPage.Range = 0;
        level = 4;
    
        game.add.tween(TreeBloodBar003).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar003Tween.resume();        
    }else if( TreeBloodBar.x <= 3*(-362/4) + 10 ){
        demo.LoggingPage.Range = 1;
        level = 4;

        game.add.tween(TreeBloodBar004).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar004Tween.resume(); 
    }        
    demo.createQuestionNum(level,demo.LoggingPage.Range);
    //UpdateLoggingPageNumber();
    //ExitLoggingBtn.inputEnabled = false;
}


function StopLogging(){
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;  
    
    LoggingBGVolumeMute = game.add.tween(LoggingBG).to({volume:0},500,'Linear',true,0);
    LoggingBGVolumeMute.onComplete.add(function(){
        LoggingBG.stop();
    },this);
    
    NeedSharpeningTextTween.pause();
    NeedSharpeningText.alpha = 0;
    
    FoxStanding.alpha = 1;
    FoxStanding.animations.play("FoxStandingDynamic",15,true);
    
    FoxLogging001.alpha = 0;
    FoxLogging001.animations.stop();
    FoxLogging002.alpha = 0;
    FoxLogging002.animations.stop();
    FoxLogging003.alpha = 0;
    FoxLogging003.animations.stop();
    
    FoxBounce001.alpha = 0;
    FoxBounce001.animations.stop();
    FoxBounce002.alpha = 0;
    FoxBounce002.animations.stop();
    
    FoxLoggingPageBtn.inputEnabled = true;
    FoxLoggingPageBtn.input.useHandCursor = true;
    FoxStopLoggingBtn.inputEnabled = false;

    demo.cleanPanel();
    CleanAxBar();
        
    //ExitLoggingBtn.inputEnabled = true;
   // ExitLoggingBtn.input.useHandCursor = true;     
    
}

function FinishLogging(){
    LoggingSuccess.play();
    LoggingSuccess.volume = 0.5;
    
    LoggingBGVolumeMute = game.add.tween(LoggingBG).to({volume:0},500,'Linear',true,0);
    LoggingBGVolumeMute.onComplete.add(function(){
        LoggingBG.stop();
    },this);

    
    LevelState.LoggingPageComplete = true;
    LevelState.LoggingPageCompleteCount++;
    if( LevelState.LoggingPageCompleteCount == 1 ){
        LevelState.CheckNewMedal = true;
    }
    
    FoxStanding.alpha = 1;
    FoxStanding.animations.play("FoxStandingDynamic",15,true);
    
    FoxLogging001.alpha = 0;
    FoxLogging001.animations.stop();
    FoxLogging002.alpha = 0;
    FoxLogging002.animations.stop();
    FoxLogging003.alpha = 0;
    FoxLogging003.animations.stop();
    
    FoxBounce001.alpha = 0;
    FoxBounce001.animations.stop();
    FoxBounce002.alpha = 0;
    FoxBounce002.animations.stop();
    
    FoxStopLoggingBtn.inputEnabled = false;

    game.add.tween(QuestionPanel).to({alpha:0},300,'Linear',true,0); 
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;
        game.add.tween(AnswerPanel[i]).to({alpha:0},300,'Linear',true,0);
 
    }
    demo.cleanPanel();
    CleanAxBar();
    
    /*
    TreeBloodBar.alpha = 0;
    TreeBloodBar002.alpha = 0;
    TreeBloodBar003.alpha = 0;
    TreeBloodBar004.alpha = 0;
    */
    
    CleanTreeBloodBar();
    
    ScoreBoardBG.scale.set(0);
    ScoreBoardBG.alpha = 1;
    game.add.tween(ScoreBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    
    ScoreBoardGoldenWood.scale.set(0);
    ScoreBoardGreenWood.scale.set(0);
    ScoreBoardRedWood.scale.set(0);
    ScoreBoardLightBlueWood.scale.set(0);
    
    ScoreBoardGoldenWood.alpha = 1;
    ScoreBoardGreenWood.alpha = 1;
    ScoreBoardRedWood.alpha = 1;
    ScoreBoardLightBlueWood.alpha = 1;
    
    
    var ScoreBoardShowUpRand = Math.floor(Math.random() * 4);
    if( ScoreBoardShowUpRand == 0 ){
        game.add.tween(ScoreBoardGoldenWood.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    }else if( ScoreBoardShowUpRand == 1 ){
        game.add.tween(ScoreBoardRedWood.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    }else if( ScoreBoardShowUpRand == 2 ){
        game.add.tween(ScoreBoardGreenWood.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    }else if( ScoreBoardShowUpRand == 3 ){
        game.add.tween(ScoreBoardLightBlueWood.scale).to({x:1,y:1},500,'Quad.easeOut',true,1000);
    }                                  
    
    ScoreBoardSeal.scale.set(20);
    game.add.tween(ScoreBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,1500);        
    game.add.tween(ScoreBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,1500);    
    
    ScoreBoardBtnTween = game.add.tween(ScoreBoardBtn).to({alpha:1},500,'Linear',true,3000);        
    ScoreBoardBtnTween.onComplete.add(function () {	
    
        ScoreBoardHomeBtn.inputEnabled = true;
        ScoreBoardContinueBtn.inputEnabled = true;
        
    }, this);      
}
demo.cleanPanel = function(){
    game.add.tween(QuestionPanel).to({alpha:0},300,'Linear',true,0); 
    game.add.tween(NumSum).to({alpha:0},300,'Linear',true,0); 
    game.add.tween(NumAdd1).to({alpha:0},300,'Linear',true,0); 
    game.add.tween(NumAdd2).to({alpha:0},300,'Linear',true,0); 

    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;
        game.add.tween(AnswerPanel[i]).to({alpha:0},300,'Linear',true,0);
        game.add.tween(answerNum[i]).to({alpha:0},300,'Linear',true,0);
 
    }
  
}
function LoggingPageAnswerPanelDown(AnswerPanel){
    if( AnswerPanel.variable == LoggingPageCorrectAnswer ){
            console.log('Correct');

        QuestionPanelRightFx.alpha = 1;
        QuestionPanelRightFx.animations.play("QuestionPanelRightFx",30,false);        
        QuestionPanelRightFxAnimation.onComplete.add(function(){
            QuestionPanelRightFx.alpha = 0;
            
        },this);
        CleanLoggingPageButton();
    }else{
        QuestionPanelWrongFx.alpha = 1;
        QuestionPanelWrongFx.animations.play("QuestionPanelWrongFx",30,false);        
        QuestionPanelWrongFxAnimation.onComplete.add(function(){
            QuestionPanelWrongFx.alpha = 0;
            
        },this);

        WrongFX.play();
    }
    
}
function CleanTreeBloodBar(){
    TreeBloodBarTween.pause();      
    TreeBloodBar002Tween.pause();
    TreeBloodBar003Tween.pause();
    TreeBloodBar004Tween.pause();    
    
    game.add.tween(TreeBloodBarTop).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar002).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar003).to({alpha:0},300,'Linear',true,0);
    game.add.tween(TreeBloodBar004).to({alpha:0},300,'Linear',true,0);
    
    game.add.tween(TreeBloodBarBG).to({alpha:0},300,'Linear',true,0);    
    

}
function CleanAxBar(){
    game.add.tween(AxBarBG).to({alpha:0},300,'Linear',true,0);
    AxBarSharpTween.pause();
    game.add.tween(AxBarSharp).to({alpha:0},300,'Linear',true,0);
    AxBarSharpLevel2Tween.pause();
    game.add.tween(AxBarSharpLevel2).to({alpha:0},300,'Linear',true,0);
    game.add.tween(AxBar).to({alpha:0},300,'Linear',true,0);
    game.add.tween(AxBarLight).to({alpha:0},300,'Linear',true,0);
    AxBarFullLightTween.pause();
    game.add.tween(AxBarFullLight).to({alpha:0},300,'Linear',true,0);

}

function ScoreBoardHomeBtnDown(){
    console.log('clean');
    TreeBloodBar.x = 0;
    TreeBloodBar002.x = 0;
    TreeBloodBar003.x = 0;
    TreeBloodBar004.x = 0;  
 
    ExitLoggingPage();
}
function ScoreBoardHomeBtnOver(){
    ScoreBoardHomeBtnHover.alpha = 1;
    ScoreBoardHomeBtnHoverTween = game.add.tween(ScoreBoardHomeBtnHover).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
}
function ScoreBoardHomeBtnOut(){
    ScoreBoardHomeBtnHover.alpha = 0;
    ScoreBoardHomeBtnHoverTween.pause();
}
function ScoreBoardContinueBtnDown(){
    ScoreBoardCleanTween = game.add.tween(ScoreBoardBG).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardBtn).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardSeal).to({alpha:0},500,'Quad.easeIn',true);
    
    game.add.tween(ScoreBoardGoldenWood).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardGreenWood).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardRedWood).to({alpha:0},500,'Quad.easeIn',true);
    game.add.tween(ScoreBoardLightBlueWood).to({alpha:0},500,'Quad.easeIn',true);
    
    ScoreBoardHomeBtn.inputEnabled = false;
    ScoreBoardContinueBtn.inputEnabled = false;
    ScoreBoardCleanTween.onComplete.add(function(){
        TreeBloodBar.x = 0;
        TreeBloodBar002.x = 0;
        TreeBloodBar003.x = 0;
        TreeBloodBar004.x = 0;
        
    },this);
    
    StopLogging();
    
}
function ScoreBoardContinueBtnOver(){
    ScoreBoardContinueBtnHover.alpha = 1;
    ScoreBoardContinueBtnHoverTween = game.add.tween(ScoreBoardContinueBtnHover).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);    
}
function ScoreBoardContinueBtnOut(){
    ScoreBoardContinueBtnHover.alpha = 0;
    ScoreBoardContinueBtnHoverTween.pause();
}
function StopLoggingOver(){
    /*
    ArrowSheet.x = -110;
    ArrowSheet.y = -20;
    ArrowSheet.animations.play("ArrowSheetDynamic",15,true);
    ArrowSheet.alpha = 1;       
    */
}
function StopLoggingOut(){
    /*
    ArrowSheet.animations.stop();
    ArrowSheet.alpha = 0;      
    */    
}



function CleanLoggingPageButton(){
    PanelGlowNumSum.alpha = 1;
    game.add.tween(PanelGlowNumSum).to({alpha:0},500,'Quad.easeOut',true,0);
    rightFX.play();
    if( AxBarSharp.x <= -243 && TreeBloodBar.x > -364 ){
        //game.add.tween(TreeBloodBar).to({x:'-1'},300,'Linear',true,0);
        //test
        TreeBloodBarMinusBounceTween = game.add.tween(TreeBloodBar).to({x:'-1'},300,'Linear',true,0);
        game.add.tween(TreeBloodBar002).to({x:'-1'},300,'Linear',true,0);
        game.add.tween(TreeBloodBar003).to({x:'-1'},300,'Linear',true,0);
        game.add.tween(TreeBloodBar004).to({x:'-1'},300,'Linear',true,0);

    }
    if( AxBarSharp.x > -243 ){
        TreeBloodBarMinusTween = game.add.tween(TreeBloodBar).to({x:'-20'},300,'Linear',true,0);
        
        game.add.tween(TreeBloodBar002).to({x:'-20'},300,'Linear',true,0);
        game.add.tween(TreeBloodBar003).to({x:'-20'},300,'Linear',true,0);
        game.add.tween(TreeBloodBar004).to({x:'-20'},300,'Linear',true,0);
    }

   
    
    if( TreeBloodBar.x <= -362/4 + 10 && TreeBloodBar.x > 2*(-362/4) + 10 ){
        demo.LoggingPage.Range = 1;
        game.add.tween(TreeBloodBar).to({alpha:0},300,'Linear',true,0);
        TreeBloodBarTween.pause();
        
        game.add.tween(TreeBloodBar002).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar002Tween.resume();
        
        
    }else if( TreeBloodBar.x <= 2*(-362/4) + 10 && TreeBloodBar.x > 3*(-362/4) + 10 ){
        demo.LoggingPage.Range = 0;
        level = 4;

        game.add.tween(TreeBloodBar002).to({alpha:0},300,'Linear',true,0);
        TreeBloodBar002Tween.pause();        
        
        game.add.tween(TreeBloodBar003).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar003Tween.resume();        
    }else if( TreeBloodBar.x <= 3*(-362/4) + 10 ){
        demo.LoggingPage.Range = 1;
        
        game.add.tween(TreeBloodBar003).to({alpha:0},300,'Linear',true,0);
        TreeBloodBar003Tween.pause();
        
        game.add.tween(TreeBloodBar004).to({alpha:1},300,'Linear',true,0);
        TreeBloodBar004Tween.resume(); 
    }
    if( TreeBloodBar.x <= -362+20 && AxBarSharp.x > -243 ){
        console.log('Finish');
        TreeBloodBar004Tween.pause();
        TreeBloodBar004.alpha = 0;
        FinishLogging();
    }    
    if( TreeBloodBar.x > -362+20 ){
        demo.createQuestionNum(level,demo.LoggingPage.Range);
    }     
    answercount++;
}


