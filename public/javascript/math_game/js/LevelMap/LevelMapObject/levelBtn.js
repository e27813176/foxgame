demo.LevelMap.levelBtn = {
    create:function(){
        this.HomeBtnHoverArea =  game.add.sprite(game.world.centerX, 530, 'LevelBtn','BtnHover.png');
        this.HomeBtnHoverArea.anchor.setTo(0.5); 
        this.HomeBtnHoverArea.scale.setTo(1.5);
        this.HomeBtnHoverArea.alpha = 0; 
        
        this.HomeBtnHover = game.add.sprite(0, 0, 'LevelBtn','HomeBtnHover.png');
        
        this.setTween(this.HomeBtnHover);
        this.setLevelBtn( this.HomeBtnHoverArea ,this.HomeBtnHover,'GameBootPage');
                
        //TutorialBtn---------------------------------------------------------------------------
        this.TutorialBtn = game.add.sprite(55, 170, 'LevelBtn','TutorialBtn.png');
        
        this.TutorialBtnHover = game.add.sprite(55, 170, 'LevelBtn','TutorialBtnHover.png');

        this.setTween(this.TutorialBtnHover);
        this.setLevelBtn( this.TutorialBtn ,this.TutorialBtnHover,'Tutorial');
        //AxPageBtn---------------------------------------------------------------------------
        this.FoxAxBtnHoverArea =  game.add.sprite(270, 250, 'LevelBtn','BtnHover.png');
        this.FoxAxBtnHoverArea.alpha = 0; 

        this.FoxAxBtnHover = game.add.sprite(0, 0, 'LevelBtn','AxPageBtnHover.png');
        
        this.setTween(this.FoxAxBtnHover);
        this.setLevelBtn( this.FoxAxBtnHoverArea,this.FoxAxBtnHover,'BootAxPage');
        //LoggingPageBtn----------------------------------------------------------------------
        this.FoxLoggingBtn = game.add.sprite(0, 0, 'LevelBtn','FoxLoggingBtn.png');
        //FoxLoggingBtn.alpha = 0; 
        if( LevelState.AxPageComplete == false || LevelState.FoxLoggingBtnShowUp == false ){
            this.FoxLoggingBtn.alpha = 0;
        }

        this.FoxLoggingBtnHover = game.add.sprite(0, 0, 'LevelBtn','FoxLoggingBtnHover.png');
        
        this.FoxLoggingBtnHoverArea =  game.add.sprite(500, 140, 'LevelBtn','BtnHover.png');
        this.FoxLoggingBtnHoverArea.alpha = 0;
        
        this.setTween(this.FoxLoggingBtnHover);
        this.setLevelBtn( this.FoxLoggingBtnHoverArea,this.FoxLoggingBtnHover,'BootLoggingPage');
        
        //CatchBugPageBtn----------------------------------------------------------------------
        this.CatchBugPageBtn = game.add.sprite(0, 0, 'LevelBtn','CatchBugBtn.png');
        if( LevelState.LoggingPageComplete == false || LevelState.FoxCatchBugPageBtnShowUp == false ){
            this.CatchBugPageBtn.alpha = 0;
        }        

        this.CatchBugPageBtnHover = game.add.sprite(0, 0, 'LevelBtn','CatchBugBtnHover.png');
        
        this.CatchBugPageBtnHoverArea =  game.add.sprite(860, 190, 'LevelBtn','BtnHover.png');
        this.CatchBugPageBtnHoverArea.scale.setTo(0.8);
        this.CatchBugPageBtnHoverArea.alpha = 0;
        
        this.setTween(this.CatchBugPageBtnHover);       
        this.setLevelBtn( this.CatchBugPageBtnHoverArea,this.CatchBugPageBtnHover,'BootCatchBugPage');
        //FishingPageBtn-----------------------------------------------------------------------
        this.FoxFishingBtn = game.add.sprite(0, 0, 'LevelBtn','FoxFishingBtn.png'); 
        //FoxFishingBtn.alpha = 0;
        if( LevelState.CatchBugPageComplete == false || LevelState.FoxFishingBtnShowUp == false ){
            this.FoxFishingBtn.alpha = 0;
        }
               
        this.FoxFishingBtnHover = game.add.sprite(0, 0, 'LevelBtn','FoxFishingBtnHover.png'); 
        
        this.FoxFishingBtnHoverArea =  game.add.sprite(1190, 410, 'LevelBtn','BtnHover.png');
        this.FoxFishingBtnHoverArea.alpha = 0;       
        
        this.setTween(this.FoxFishingBtnHover);       
        this.setLevelBtn( this.FoxFishingBtnHoverArea,this.FoxFishingBtnHover,'BootFishingPage');
    },
    setLevelBtn:function(HoverArea, Hover,Page){
        HoverArea.events.onInputDown.add(function(){
            demo.LevelMap.ExitPage(Page);
        }, this);
        HoverArea.events.onInputOver.add(function(){
            Hover.alpha = 1;
            Hover.tween.resume();
            BtnOver.play();    
        
        }, this);
        HoverArea.events.onInputOut.add(function(){
            Hover.alpha = 0;
            Hover.tween.pause();
        
        }, this);         
    },
    setTween:function(BtnHover){
        BtnHover.tween = game.add.tween(BtnHover).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        BtnHover.tween.pause();
        BtnHover.alpha = 0;
    },
    setBtnEnable:function( Boolean ){
        this.TutorialBtn.inputEnabled = Boolean;
        this.TutorialBtn.input.useHandCursor = Boolean;  
    
        this.HomeBtnHoverArea.inputEnabled = Boolean;
        this.HomeBtnHoverArea.input.useHandCursor = Boolean; 
            
        this.FoxAxBtnHoverArea.inputEnabled = Boolean;
        this.FoxAxBtnHoverArea.input.useHandCursor = Boolean;  
        
        if( LevelState.AxPageComplete == true ){
            this.FoxLoggingBtnHoverArea.inputEnabled = Boolean;
            this.FoxLoggingBtnHoverArea.input.useHandCursor = Boolean; 
        }            
        if( LevelState.LoggingPageComplete == true ){
            this.CatchBugPageBtnHoverArea.inputEnabled = Boolean;
            this.CatchBugPageBtnHoverArea.input.useHandCursor = Boolean;      
        }
        if( LevelState.CatchBugPageComplete == true ){
            this.FoxFishingBtnHoverArea.inputEnabled = Boolean;
            this.FoxFishingBtnHoverArea.input.useHandCursor = Boolean;                 
        }
    }
};
