demo.LevelMap.medalBoard = {
    create:function(){
        this.board = {
            'BG': game.add.sprite(0, 0, 'Medal','MedalBoard.png'),
            'ConfirmBtn' : game.add.sprite(0, 0, 'Medal','ConFirmBtn.png')

        };

        this.MedalBtn =  game.add.sprite(150, 100, 'Medal','MedalBtn.png');
        this.MedalBtn.alpha = 1;
        this.MedalBtn.anchor.setTo(0.5);

        this.MedalBtnHover =  game.add.sprite(150, 100, 'Medal','MedalBtnOver.png');
        this.MedalBtnHover.anchor.setTo(0.5);
        this.setTween(this.MedalBtnHover);
        this.setMedalBtn();
        
        this.ConfirmBtnHover = game.add.sprite(0, 0, 'Medal','ConFirmBtnHover.png');
        this.ConfirmBtnArea = game.add.sprite(1082, 515, 'Medal','ConFirmBtnHoverArea.png');
        this.setConfirmBtn();
        this.setTween(this.ConfirmBtnHover);
        this.medal = {
            
            'AxMedal' : game.add.sprite(0, 0, 'Medal','AxMedal.png'),
            'LoggingMedal' : game.add.sprite(0, 0, 'Medal','LoggingMedal.png'),
            'BugMedal' : game.add.sprite(0, 0, 'Medal','BugMedal.png'),
            'FishMedal' : game.add.sprite(0, 0, 'Medal','FishMedal.png')
            
        };
        for(let item in this ){
            this[item].alpha = 0;
        }
        for(let item in this.board ){
            this.board[item].alpha = 0;
        }
        for(let item in this.medal ){
            this.medal[item].alpha = 0;
        } 
            
    },
    
    setConfirmBtn:function(){
        this.ConfirmBtnArea.events.onInputDown.add(function(){
            demo.LevelMap.levelBtn.setBtnEnable(true);
            this.setMedalBtnEnable(true);
            this.setBoardBtnEnable(false);
            this.cleanBoard();
            demo.LevelMap.medalBoard.ConfirmBtnHover.tween.pause();
            demo.LevelMap.medalBoard.ConfirmBtnHover.alpha = 0;            
        },this);
        this.ConfirmBtnArea.events.onInputOver.add(function(){
            BtnOver.play();
            demo.LevelMap.medalBoard.ConfirmBtnHover.tween.resume();
            demo.LevelMap.medalBoard.ConfirmBtnHover.alpha = 1;
        },this);
        this.ConfirmBtnArea.events.onInputOut.add(function(){
            demo.LevelMap.medalBoard.ConfirmBtnHover.tween.pause();
            demo.LevelMap.medalBoard.ConfirmBtnHover.alpha = 0;
            
        },this);
        
    },
    setTween:function(BtnHover){
        BtnHover.tween = game.add.tween(BtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        BtnHover.tween.pause();
        BtnHover.alpha = 0;    
    },
    setBoardBtnEnable:function(Boolean){
        this.ConfirmBtnArea.inputEnabled = Boolean;
        this.ConfirmBtnArea.inputEnabled = Boolean;
    },
    setMedalBtnEnable:function(Boolean){
        this.MedalBtn.inputEnabled = Boolean;
        this.MedalBtn.input.useHandCursor = Boolean;
        
    },
    setMedalBtn:function(){
        this.MedalBtn.events.onInputDown.add(function(){
            this.MedalBtnHover.tween.pause();
            this.MedalBtnHover.alpha = 0;
            NewIconMedal.alpha = 0;
            NewIconMedalTween.pause();
            LevelState.CheckNewMedal = false;
            demo.LevelMap.levelBtn.setBtnEnable(false);
            this.setMedalBtnEnable(false);
            this.showUpBoard();

        },this);
        this.MedalBtn.events.onInputOver.add(function(){
            BtnOver.play();
            this.MedalBtnHover.tween.resume();
            this.MedalBtnHover.alpha = 1;
        },this);
        this.MedalBtn.events.onInputOut.add(function(){
            this.MedalBtnHover.tween.pause();
            this.MedalBtnHover.alpha = 0;
        }, this);
    },
    showUpBoard:function(){
        this.setBoardBtnEnable(true);
        if( LevelState.AxPageComplete == true ){
            game.add.tween(this.medal.AxMedal).to({alpha:1},500,'Linear',true,0);
        }
        if( LevelState.LoggingPageComplete == true ){
            game.add.tween(this.medal.LoggingMedal).to({alpha:1},500,'Linear',true,0);
        }
        if( LevelState.CatchBugPageComplete == true ){
            game.add.tween(this.medal.BugMedal).to({alpha:1},500,'Linear',true,0);
        }
        if( LevelState.FishingPageComplete == true ){
            game.add.tween(this.medal.FishMedal).to({alpha:1},500,'Linear',true,0);
        }
        /*
        for( let i = 0;i < Object.keys(demo.LevelMap.MedalBoard).length-1;i++ ){
            game.add.tween(demo.LevelMap.MedalBoard[Object.keys(demo.LevelMap.MedalBoard)[i]]).to({alpha:1},500,'Linear',true,0); 
        } 
        */
        for(let item in this.board ){
            game.add.tween(this.board[item]).to({alpha:1},500,'Linear',true,0); 
        } 
        
    },
    cleanBoard:function(){
        for(let item in this.board ){
            game.add.tween(this.board[item]).to({alpha:0},500,'Linear',true,0);
        }
        for(let item in this.medal ){
            game.add.tween(this.medal[item]).to({alpha:0},500,'Linear',true,0);
        } 

    }
};


