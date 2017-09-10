demo.LevelMap.newMedalprompt = {
    create:function(){
        
    },
    setConfirmBtn:function(){
        
    }
};

function GetNewMedalConfirmBtnComplete(){
    GetNewMedalConfirmBtnArea.inputEnabled = true;
}
//Get New Medal---------------------------------------------------------------------------------------------------

function GetNewMedalConfirmBtnDown(){
    demo.LevelMap.levelBtn.setBtnEnable(true);
    //LevelBtnMask.scale.setTo(0);
    GetNewMedalConfirmBtnArea.inputEnabled = false;
    game.add.tween(GetNewMedalText).to({alpha:0},500,'Linear',true,0); 
    game.add.tween(GetNewMedalTextLight).to({alpha:0},500,'Linear',true,0); 
    GetNewMedalTextLightTween.pause();
    GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:0},500,'Linear',true,0);    
    GetNewMedalConfirmBtnHoverTween.pause();
    GetNewMedalConfirmBtnHover.alpha = 0;
    
    if( LevelState.FoxLoggingBtnShowUp == false ){
        game.add.tween(demo.LevelMap.levelBtn.FoxLoggingBtn).to({alpha:1},1000,'Linear',true,500);
        LevelState.FoxLoggingBtnShowUp = true;
      
    }
    if( LevelState.FoxCatchBugPageBtnShowUp == false && LevelState.LoggingPageComplete == true ){
        LevelState.FoxCatchBugPageBtnShowUp = true;
        game.add.tween(demo.LevelMap.levelBtn.CatchBugPageBtn).to({alpha:1},1000,'Linear',true,500); 
       
    }
    if( LevelState.FoxFishingBtnShowUp == false && LevelState.CatchBugPageComplete == true ){
        LevelState.FoxFishingBtnShowUp = true;
        game.add.tween(demo.LevelMap.levelBtn.FoxFishingBtn).to({alpha:1},1000,'Linear',true,500); 
       
    }    
    if( LevelState.FishingPageComplete == true && LevelState.FishMedalShowUp == false ){
        LevelState.FishMedalShowUp = true;
    
    }
}
function GetNewMedalConfirmBtnOver(){
    GetNewMedalConfirmBtnHoverTween.resume();
    GetNewMedalConfirmBtnHover.alpha = 1; 
    
}
function GetNewMedalConfirmBtnOut(){
    GetNewMedalConfirmBtnHoverTween.pause();
    GetNewMedalConfirmBtnHover.alpha = 0; 
    
}

demo.LevelMap.GetMedalShowUp = function(BtnShowUp,PageComplete,check){
    
    if( check == true && PageComplete == true ){
        //LevelBtnMask.scale.setTo(1);
        demo.LevelMap.levelBtn.setBtnEnable(false);
        
        game.add.tween(GetNewMedalText).to({alpha:1},300,'Linear',true,500); 
        GetNewMedalTextShowUpTween = game.add.tween(GetNewMedalTextLight).to({alpha:1},300,'Linear',true,500); 
        GetNewMedalTextShowUpTween.onStart.add(function(){
            GetMedal.play();
        },this);
        GetNewMedalTextShowUpTween.onComplete.add(function(){
            GetNewMedalTextLightTween.resume();
        },this);
        GetNewMedalConfirmBtnTween = game.add.tween(GetNewMedalConfirmBtn).to({alpha:1},500,'Linear',true,1000); 
        GetNewMedalConfirmBtnTween.onComplete.add(GetNewMedalConfirmBtnComplete,this);
    }

};