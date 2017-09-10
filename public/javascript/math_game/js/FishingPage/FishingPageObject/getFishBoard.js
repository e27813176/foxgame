demo.FishingPage.createGetFishBoard = function(){
        
    this.GetFishBoardBG = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoard.png");
    this.GetFishBoardBG.anchor.setTo(0.5);
    this.GetFishBoardBG.alpha = 0;
        
    this.GetFishBoardBtn = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoardBtn.png");
    this.GetFishBoardBtn.anchor.setTo(0.5);
    this.GetFishBoardBtn.alpha = 0;
        
    this.GetFishBoardSeal = game.add.sprite(centerX,centerY,'GetFishBoard', "GetFishBoardSeal.png");
    this.GetFishBoardSeal.anchor.setTo(0.5);
    this.GetFishBoardSeal.alpha = 0;
        
    this.GetFishAmazingSeal = game.add.sprite(centerX,centerY,'GetFishBoard', "AmazingSeal.png");
    this.GetFishAmazingSeal.anchor.setTo(0.5);
    this.GetFishAmazingSeal.alpha = 0;        
        
    this.GetFishContinueBtnHover = game.add.sprite(centerX,centerY,'GetFishBoard', "ContinueBtnHover.png");
    this.GetFishContinueBtnHover.anchor.setTo(0.5);
    this.GetFishContinueBtnHoverTween = game.add.tween(this.GetFishContinueBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
    this.GetFishContinueBtnHoverTween.pause();        
    this.GetFishContinueBtnHover.alpha = 0;
        
    this.GetFishExitBtnHover = game.add.sprite(centerX,centerY,'GetFishBoard', "ExitBtnHover.png");
    this.GetFishExitBtnHover.anchor.setTo(0.5); 
    this.GetFishExitBtnHoverTween = game.add.tween(this.GetFishExitBtnHover).to({alpha:0.4},500,'Quad.easeInOut',true,0,false,true).loop(true);
    this.GetFishExitBtnHoverTween.pause();           
    this.GetFishExitBtnHover.alpha = 0;
        
    this.GetFishExitBtnHoverArea = game.add.sprite(centerX+150,centerY+102,'GetFishBoard', "BtnArea.png");
    this.GetFishExitBtnHoverArea.anchor.setTo(0.5);
    this.GetFishExitBtnHoverArea.events.onInputDown.add(GetFishExitBtnDown, this);
    this.GetFishExitBtnHoverArea.events.onInputOver.add(GetFishExitBtnOver, this);
    this.GetFishExitBtnHoverArea.events.onInputOut.add(GetFishExitBtnOut, this);        
    this.GetFishExitBtnHoverArea.alpha = 0;
        
    this.GetFishContinueBtnHoverArea = game.add.sprite(centerX+50,centerY+102,'GetFishBoard', "BtnArea.png");
    this.GetFishContinueBtnHoverArea.anchor.setTo(0.5); 
    this.GetFishContinueBtnHoverArea.events.onInputDown.add(GetFishContinueBtnDown, this);
    this.GetFishContinueBtnHoverArea.events.onInputOver.add(GetFishContinueBtnOver, this);
    this.GetFishContinueBtnHoverArea.events.onInputOut.add(GetFishContinueBtnOut, this);          
    this.GetFishContinueBtnHoverArea.alpha = 0;        
    
};
demo.FishingPage.ShowUpGetFishBoard = function(){
    
    this.GetFishBoardBG.scale.setTo(0);
    this.GetFishBoardBG.alpha = 1;
    game.add.tween(this.GetFishBoardBG.scale).to({x:1,y:1},500,'Quad.easeOut',true,2000);
    
    this.GetFishBoardBtn.alpha = 0;
    this.GetFishBoardBtn.ShowUp = game.add.tween(this.GetFishBoardBtn).to({alpha:1},500,'Quad.easeOut',true,4000);  
    this.GetFishBoardBtn.ShowUp.onComplete.add(function(){
        this.GetFishExitBtnHoverArea.inputEnabled = true;
        this.GetFishContinueBtnHoverArea.inputEnabled = true;        
    },this); 
    
    this.FishBox.showUp(this.GetFishRandom);

    
    
    if( FishingLevel < 13 ){
        this.GetFishBoardSeal.alpha = 0;
        this.GetFishBoardSeal.scale.setTo(20);
        game.add.tween(this.GetFishBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
        game.add.tween(this.GetFishBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);
        
    }else if( FishingLevel == 13 ){
        if( this.GetFishRandom == 0 ){
            this.GetFishAmazingSeal.alpha = 0;
            this.GetFishAmazingSeal.scale.setTo(20);
            game.add.tween(this.GetFishAmazingSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
            game.add.tween(this.GetFishAmazingSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);    
            
        }else{
            this.GetFishBoardSeal.alpha = 0;
            this.GetFishBoardSeal.scale.setTo(20);
            game.add.tween(this.GetFishBoardSeal.scale).to({x:1,y:1},1000,'Quad.easeIn',true,3000);
            game.add.tween(this.GetFishBoardSeal).to({alpha:1},1000,'Quad.easeIn',true,3000);
            
        }
    }
};

demo.FishingPage.cleanFishBoard = function(){
    game.add.tween(this.GetFishBoardBG).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(this.GetFishBoardBtn).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(this.GetFishBoardSeal).to({alpha:0},250,'Quad.easeOut',true,0);
    game.add.tween(this.GetFishAmazingSeal).to({alpha:0},250,'Quad.easeOut',true,0);    
};


function GetFishExitBtnDown(){
    this.GetFishExitBtnHoverArea.inputEnabled = false;
    this.GetFishContinueBtnHoverArea.inputEnabled = false;       
    
    this.GetFishExitBtnHoverTween.pause();           
    this.GetFishExitBtnHover.alpha = 0;    
    demo.BlackBG.ExitPage('BootLevelMap');
}
function GetFishExitBtnOver(){
    this.GetFishExitBtnHoverTween.resume();           
    this.GetFishExitBtnHover.alpha = 1;    
    
}
function GetFishExitBtnOut(){
    this.GetFishExitBtnHoverTween.pause();           
    this.GetFishExitBtnHover.alpha = 0;    
}


function GetFishContinueBtnDown(){

    demo.FishingPage.continue();
    this.GetFishExitBtnHoverArea.inputEnabled = false;
    this.GetFishContinueBtnHoverArea.inputEnabled = false;       
    this.GetFishContinueBtnHoverTween.pause();           
    this.GetFishContinueBtnHover.alpha = 0;        
}
function GetFishContinueBtnOver(){
    this.GetFishContinueBtnHoverTween.resume();           
    this.GetFishContinueBtnHover.alpha = 1;        
}
function GetFishContinueBtnOut(){
    this.GetFishContinueBtnHoverTween.pause();           
    this.GetFishContinueBtnHover.alpha = 0;    
    
}