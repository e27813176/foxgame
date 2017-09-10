demo.CatchBugPage.task = {
    create:function(){
        this.completeShowUp = false;
        this.BG = game.add.sprite(0,0,'TaskBoard','TaskBoard.png');    
        this.BG.alpha = 0;
        
        this.BlackBG = game.add.graphics();
        this.BlackBG.beginFill(0x000000);
        this.BlackBG.drawRect(0,0,1600,800); 
        this.BlackBG.alpha = 0;
        
        this.taskConfirm = game.add.sprite(0,0,'TaskBoard','TaskBoardConfirm.png');
        this.taskConfirm.alpha = 0;
        this.taskConfirm.events.onInputDown.add(this.confirm, this);

        this.taskComplete = game.add.sprite(0,0,'TaskBoard','TaskBoardComplete.png');
        this.taskComplete.alpha = 0;
        this.taskComplete.events.onInputDown.add(this.cleanCompleteBoard, this);
        
        
        this.GoldenBug = game.add.sprite(0,0,'TaskBoard','TaskBoardGoldenBug.png');   
        this.GoldenBug.alpha = 0;   

        
        this.IceBug = game.add.sprite(0,0,'TaskBoard','TaskBoardIceBug.png');    
        this.IceBug.alpha = 0;   

        
        this.FireBug = game.add.sprite(0,0,'TaskBoard','TaskBoardFireBug.png');    
        this.FireBug.alpha = 0;   
        
    },
    openBugdex:function(bug){

        if( this[bug].alpha == 0){
            game.add.tween(this[bug]).to({alpha :1},300,'Quad.easeOut',true);   
        }        
    },
    showTask:function(){

        this.taskConfirm.inputEnabled = true;
        game.add.tween(this.taskConfirm).to({alpha:1},300,'Quad.easeOut',true);
        

    },
    showTaskBug:function(Bug){
        if( demo.CatchBugPage.bugdex[Bug] != 0 ){
            game.add.tween(this[Bug]).to({alpha:1},300,'Quad.easeOut',true,500);
        }
        
    },
    confirm:function(){
        this.taskConfirm.inputEnabled = false;
        this.taskConfirm.fadeOut = game.add.tween(this.taskConfirm).to({alpha :0},300,'Quad.easeOut',true);
        this.taskConfirm.fadeOut.onComplete.add(function(){
            demo.CatchBugPage.task.taskConfirm.scale.setTo(0);
        },this);
        
        game.add.tween(this.BG).to({alpha :1},300,'Quad.easeOut',true,500);
        demo.CatchBugPage.flyingBug.createDelay();
        demo.CatchBugPage.panel.setAnswerPanelEnable(true);
                
        this.showTaskBug('IceBug');
        this.showTaskBug('FireBug');
        this.showTaskBug('GoldenBug');

    },
    completeTask:function(){
        
        LevelState.CatchBugPageCompleteCount++;

        if( LevelState.CatchBugPageCompleteCount == 1 ){
            LevelState.CheckNewMedal = true;
            this.completeShowUp = true;    
        }
        LevelState.CatchBugPageComplete = true;           
        
    },
    showUpCompleteBoard:function(){
        GetMedal.play();
        this.completeShowUp = false;
        this.taskComplete.inputEnabled = true;
        game.add.tween(this.BlackBG).to({alpha :0.5},500,'Quad.easeOut',true,500);
        game.add.tween(this.taskComplete)
            .to({alpha :1},500,'Quad.easeOut',true,500)
            .onComplete.add(function(){
            
            game.add.tween(this.BlackBG).to({alpha :0},500,'Quad.easeOut',true,1500);
            game.add.tween(this.taskComplete)
                .to({alpha :0},500,'Quad.easeOut',true,1500)
                .onComplete.add(function(){
                this.taskComplete.scale.setTo(0);
                this.taskComplete.inputEnabled = false;

            },this);
            
        },this);
    },
    cleanCompleteBoard:function(){
        this.taskComplete.inputEnabled = false;
        game.add.tween(this.BlackBG).to({alpha :0},300,'Quad.easeOut',true,0);

        game.add.tween(this.taskComplete)
            .to({alpha :0},300,'Quad.easeOut',true,0)
            .onComplete.add(function(){
            this.taskComplete.scale.setTo(0);
        },this);
    }
};