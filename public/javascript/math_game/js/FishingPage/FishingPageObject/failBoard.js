demo.FishingPage.failBoard  = {
    create:function(){
        FailBoardBG = game.add.sprite(centerX,centerY,'FailBoard', "FailBoard.png");
        FailBoardBG.anchor.setTo(0.5);
        FailBoardBG.alpha = 0;
        
        FailBoardBtn = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardBtn.png");
        FailBoardBtn.anchor.setTo(0.5);
        FailBoardBtn.alpha = 0;
                
        FailBoardExitBtnHover = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardExitBtnHover.png");
        FailBoardExitBtnHover.anchor.setTo(0.5);
        FailBoardExitBtnHoverTween = game.add.tween(FailBoardExitBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        FailBoardExitBtnHoverTween.pause();        
        FailBoardExitBtnHover.alpha = 0;
        
        FailBoardRestartBtnHover = game.add.sprite(centerX,centerY,'FailBoard', "FailBoardRestartBtnHover.png");
        FailBoardRestartBtnHover.anchor.setTo(0.5); 
        FailBoardRestartBtnHoverTween = game.add.tween(FailBoardRestartBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
        FailBoardRestartBtnHoverTween.pause();           
        FailBoardRestartBtnHover.alpha = 0;
        
        FailBoardExitBtnHoverArea = game.add.sprite(centerX+49,centerY+70,'FailBoard', "FailBoardBtnArea.png");
        FailBoardExitBtnHoverArea.anchor.setTo(0.5);
        FailBoardExitBtnHoverArea.events.onInputDown.add(FailBoardExitBtnDown, this);
        FailBoardExitBtnHoverArea.events.onInputOver.add(FailBoardExitBtnOver, this);
        FailBoardExitBtnHoverArea.events.onInputOut.add(FailBoardExitBtnOut, this);        
        FailBoardExitBtnHoverArea.alpha = 0;
        //FailBoardExitBtnHoverArea.inputEnabled = true;
        
        FailBoardRestartBtnHoverArea = game.add.sprite(centerX-49,centerY+70,'FailBoard', "FailBoardBtnArea.png");
        FailBoardRestartBtnHoverArea.anchor.setTo(0.5); 
        FailBoardRestartBtnHoverArea.events.onInputDown.add(FailBoardRestartBtnDown, this);
        FailBoardRestartBtnHoverArea.events.onInputOver.add(FailBoardRestartBtnOver, this);
        FailBoardRestartBtnHoverArea.events.onInputOut.add(FailBoardRestartBtnOut, this);          
        FailBoardRestartBtnHoverArea.alpha = 0;   

    }
};




function FailBoardRestartBtnDown(){
    
    FailBoardRestartBtnHoverTween.pause();        
    FailBoardRestartBtnHover.alpha = 0;  
    FailBoardExitBtnHoverArea.inputEnabled = false;
    FailBoardRestartBtnHoverArea.inputEnabled = false;  
    demo.FishingPage.restart();
}
function FailBoardRestartBtnOver(){
    FailBoardRestartBtnHoverTween.resume();        
    FailBoardRestartBtnHover.alpha = 1;    
}
function FailBoardRestartBtnOut(){
    FailBoardRestartBtnHoverTween.pause();        
    FailBoardRestartBtnHover.alpha = 0;
}

function FailBoardExitBtnDown(){
    demo.BlackBG.ExitPage('BootLevelMap');
    FailBoardExitBtnHoverArea.inputEnabled = false;
    FailBoardRestartBtnHoverArea.inputEnabled = false;
    FailBoardExitBtnHoverTween.pause();        
    FailBoardExitBtnHover.alpha = 0;    
}
function FailBoardExitBtnOver(){
    FailBoardExitBtnHoverTween.resume();        
    FailBoardExitBtnHover.alpha = 1;    
}
function FailBoardExitBtnOut(){
    FailBoardExitBtnHoverTween.pause();        
    FailBoardExitBtnHover.alpha = 0;    
}

