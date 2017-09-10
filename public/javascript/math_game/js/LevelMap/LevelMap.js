var LevelState = { 
    LevelMapCount:0,
    
    CheckNewMedal:false,
    FishMedalShowUp:false,
    
    AxPageCount:0,
    AxPageCompleteCount:0,
    AxPageComplete:false, 
     
    LoggingPageCount:0,
    LoggingPageCompleteCount:0,
    LoggingPageComplete:false,
    FoxLoggingBtnShowUp:false,
    
    CatchBugPageCount:0,
    CatchBugPageCompleteCount:0,
    CatchBugPageComplete:false,
    FoxCatchBugPageBtnShowUp:false,
    
    FishingPageCount:0,
    FishingPageCompleteCount:0,
    FishingPageComplete:false,
    FoxFishingBtnShowUp:false
};


demo.LevelMap = function() {};
demo.LevelMap.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
    },
    create: function() {
        //define backgroung------------------------------------------------------------------------
        game.stage.backgroundColor = "#000000";
        game.add.sprite(0,0,'LevelMapBG');
        //HomeBtn---------------------------------------------------------------------------
        demo.LevelMap.levelBtn.create();
        //LevelBtnMask--------------------------------------------------------------------------------------------------
        /*
        LevelBtnMask = game.add.graphics();
        LevelBtnMask.beginFill(0xffffff);
        LevelBtnMask.drawRect(0,0,1600,1000);
        LevelBtnMask.alpha = 0;
        LevelBtnMask.events.onInputDown.add(LevelMapBlock, this);
        LevelBtnMask.inputEnabled = true;
        LevelBtnMask.scale.setTo(0);
        */
        
        //GetNewMedal------------------------------------------------------------------------------------
        
        GetNewMedalText = game.add.sprite(0, 0, 'GetNewMedal','GetNewMedalText.png');
        GetNewMedalText.alpha = 0;        
        
        GetNewMedalTextLight = game.add.sprite(0, 0, 'GetNewMedal','GetNewMedalTextLight.png');
        GetNewMedalTextLightTween = game.add.tween(GetNewMedalTextLight).to({alpha:0.4},500,'Linear',true,0,false,true).loop(true);
        GetNewMedalTextLightTween.pause();
        GetNewMedalTextLight.alpha = 0;        
        
        GetNewMedalConfirmBtn = game.add.sprite(0, 0, 'GetNewMedal','GetNewMedalConfirmBtn.png');
        GetNewMedalConfirmBtn.alpha = 0; 
        
        GetNewMedalConfirmBtnHover = game.add.sprite(0, 0, 'GetNewMedal','GetNewMedalConfirmBtnHover.png');
        GetNewMedalConfirmBtnHoverTween = game.add.tween(GetNewMedalConfirmBtnHover).to({alpha:0.4},500,'Linear',true,0,false,true).loop(true);
        GetNewMedalConfirmBtnHoverTween.pause();
        GetNewMedalConfirmBtnHover.alpha = 0; 
        
        GetNewMedalConfirmBtnArea = game.add.sprite(978, 396, 'GetNewMedal','GetNewMedalConfirmBtnArea.png');
        GetNewMedalConfirmBtnArea.alpha = 0;  
        GetNewMedalConfirmBtnArea.events.onInputDown.add(GetNewMedalConfirmBtnDown, this);
        GetNewMedalConfirmBtnArea.events.onInputOver.add(GetNewMedalConfirmBtnOver, this);
        GetNewMedalConfirmBtnArea.events.onInputOut.add(GetNewMedalConfirmBtnOut, this);        
        
        //NextIcon---------------------------------------------------------------------------------------
        demo.LevelMap.createNextIcon('NextIconAxPage',LevelState.AxPageCount,LevelState.AxPageComplete);
        demo.LevelMap.createNextIcon('NextIconLoggingPage',LevelState.LoggingPageCount,LevelState.AxPageComplete);
        demo.LevelMap.createNextIcon('NextIconCatchBugPage',LevelState.CatchBugPageCount,LevelState.LoggingPageComplete);
        demo.LevelMap.createNextIcon('NextIconFishingPage',LevelState.FishingPageCount,LevelState.CatchBugPageComplete);

        


        
        //MedalBoard--------------------------------------------------------------------------------------
        demo.LevelMap.medalBoard.create();
        demo.LevelMap.medalBoard.MedalBtn.alpha = 1;
        demo.LevelMap.medalBoard.setMedalBtnEnable(true);
        
        NewIconMedal = game.add.sprite(-12, -20, 'LevelBtn','NewIconMedal.png');
        NewIconMedalTween = game.add.tween(NewIconMedal).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        if( LevelState.CheckNewMedal == false ){
            NewIconMedalTween.pause();
            NewIconMedal.alpha = 0;
        }       /*
        
        for( let i = 0;i < Object.keys(demo.LevelMap.MedalBoard).length;i++ ){
            demo.LevelMap.MedalBoard[Object.keys(demo.LevelMap.MedalBoard)[i]].alpha = 0; 
        }        
        */
        
        //Audio----------------------------------------------------------------------------------------
        BtnOver = game.add.audio('BtnOver');
        GetMedal = game.add.audio('GetMedal');
        
        demo.LevelMap.levelBtn.setBtnEnable( true );
        demo.LevelMap.GetMedalShowUp(LevelState.FoxLoggingBtnShowUp,LevelState.AxPageComplete,LevelState.CheckNewMedal);
        demo.LevelMap.GetMedalShowUp(LevelState.FoxCatchBugPageBtnShowUp,LevelState.LoggingPageComplete,LevelState.CheckNewMedal);
        demo.LevelMap.GetMedalShowUp(LevelState.FoxFishingBtnShowUp,LevelState.CatchBugPageComplete,LevelState.CheckNewMedal);
        demo.LevelMap.GetMedalShowUp('',LevelState.FishingPageComplete,LevelState.CheckNewMedal);
        LevelState.CheckNewMedal = false;
        
        //LevelMapOpening--------------------------------------------------------------------------------
        demo.BlackBG.create();        
    }

}

demo.LevelMap.createNextIcon = function(NextIcon,PageCount,PageComplete,check){
    
    if( PageCount == 0 && NextIcon == 'NextIconAxPage' ){
        //console.log(NextIcon);
        NextIcon = game.add.sprite(0, 0, 'LevelBtn',NextIcon + '.png');
        NextIcon.Tween = game.add.tween(NextIcon).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    }else if( PageCount == 0 && PageComplete == true ){
        NextIcon = game.add.sprite(0, 0, 'LevelBtn',NextIcon + '.png');
        NextIcon.Tween = game.add.tween(NextIcon).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
    }else{
        NextIcon.alpha = 0;             
    }
};


//ExitPage --------------------------------------------------------------------------------------------------------
demo.LevelMap.ExitPage = function(Page){
    demo.LevelMap.levelBtn.setBtnEnable(false);
    demo.BlackBG.ExitPage(Page);
}



