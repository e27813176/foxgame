demo.CatchBugPage.getBoard = {
    create:function(){
        this.Board = game.add.sprite(centerX,centerY,'Board','Board.png');
        this.Board.anchor.setTo(0.5);
        this.Board.alpha = 0;
        
        this.GoldenBugBox = game.add.sprite(centerX,centerY,'Board','GoldenBugBox.png');
        this.GoldenBugBox.anchor.setTo(0.5);
        this.GoldenBugBox.alpha = 0;
        
        this.IceBugBox = game.add.sprite(centerX,centerY,'Board','IceBugBox.png');
        this.IceBugBox.anchor.setTo(0.5);
        this.IceBugBox.alpha = 0;
        
        this.FireBugBox = game.add.sprite(centerX,centerY,'Board','FireBugBox.png');
        this.FireBugBox.anchor.setTo(0.5);
        this.FireBugBox.alpha = 0;        
        
        this.FinishBtn = game.add.sprite(centerX+58,511,'Board','BtnArea.png');
        this.FinishBtn.anchor.setTo(0.5);
        this.FinishBtn.alpha = 0;
        this.FinishBtn.events.onInputDown.add(GetBugBoardFinishBtnDown, this);
        
        this.ContinueBtn = game.add.sprite(centerX-58,511,'Board','BtnArea.png');
        this.ContinueBtn.anchor.setTo(0.5);
        this.ContinueBtn.alpha = 0;
        this.ContinueBtn.events.onInputDown.add(this.continueBtnDown, this);
        //console.log('create');
    },
    showUpBoard:function(){
        GetBug.play();
        let bug;
        bug = this.showUpBugBox();
        this.ContinueBtn.variable = bug;
        
        this.Board.alpha = 1;
        this.Board.scale.setTo(0);
        this.Board.showUp = game.add.tween(this.Board.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);
        this.Board.showUp.onComplete.add(function(){
            demo.CatchBugPage.getBoard.setBtnEnable(true);    
        });
        
    },
    showUpBugBox:function(){
        this.random = Math.floor(Math.random()*6);
        //console.log(this.random);
        this.IceBugBox.alpha = 1;
        this.IceBugBox.scale.setTo(0);
        this.FireBugBox.alpha = 1;
        this.FireBugBox.scale.setTo(0);
        this.GoldenBugBox.alpha = 1;
        this.GoldenBugBox.scale.setTo(0);
        if( this.random == 0 ){
            demo.CatchBugPage.bugdex.IceBug++;
            game.add.tween(this.IceBugBox.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);   
            demo.CatchBugPage.bugdex.completeCheck();
            return 'IceBug';
        }else if( this.random >= 1 && this.random <= 3){
            demo.CatchBugPage.bugdex.FireBug++;
            game.add.tween(this.FireBugBox.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);
            demo.CatchBugPage.bugdex.completeCheck();
            return 'FireBug';
        }else{
            demo.CatchBugPage.bugdex.GoldenBug++;
            game.add.tween(this.GoldenBugBox.scale).to({x:1,y:1},300,'Quad.easeOut',true,100);
            demo.CatchBugPage.bugdex.completeCheck();
            return 'GoldenBug';
        }
        /*
        console.log('check');
        demo.CatchBugPage.bugdex.completeCheck();
        */
        
    },
    setBtnEnable:function(boolean){
        this.FinishBtn.inputEnabled = boolean;
        this.ContinueBtn.inputEnabled = boolean;        
    },
    cleanBoard:function(){
        if( demo.CatchBugPage.AnswerRange == 0 ){
            demo.CatchBugPage.AnswerRange = 1;
        }else{
            demo.CatchBugPage.AnswerRange = 0;
        }
        this.setBtnEnable(false);
        game.add.tween(this.Board.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
        game.add.tween(this.IceBugBox.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
        game.add.tween(this.FireBugBox.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);
        game.add.tween(this.GoldenBugBox.scale).to({x:0,y:0},300,'Quad.easeIn',true,0);

        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = true;
        }
        demo.createQuestionNum(level,demo.CatchBugPage.AnswerRange);

    },
    continueBtnDown:function(Btn){
        console.log(Btn.variable);
        demo.CatchBugPage.task.openBugdex(Btn.variable);
        demo.CatchBugPage.flyingBug.start();
        this.cleanBoard(); 
        
        if( demo.CatchBugPage.task.completeShowUp == true ){
            demo.CatchBugPage.task.showUpCompleteBoard();
        }
        
    }
};


function GetBugBoardFinishBtnDown(){

    demo.CatchBugPage.ExitPage();
}
