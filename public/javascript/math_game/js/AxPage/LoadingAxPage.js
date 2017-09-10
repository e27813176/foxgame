
demo.LoadingAxPage = function() {};
demo.LoadingAxPage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        
        AxPageLoadingBar = this.add.sprite(game.width/2-300,720,"LoadingBar");
        AxPageLoadingBar.alpha = 1;
        
        AxPageLoadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(AxPageLoadingBar,0);
       
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true);         
        
        LoadingBarFrame = this.add.sprite(game.width/2,720,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);      
      
        game.load.image('AxPageBG','javascript/math_game/assets/AxPage/AxPage.jpg');
        //Panel-----------------------------------------------------------------------------------------------------------------------
        game.load.atlas('Panel', 'javascript/math_game/assets/AxPage/Panel.png', 'javascript/math_game/assets/AxPage/Panel.json');
        game.load.atlas('QuestionPanelWrongFx', 'javascript/math_game/assets/AxPage/QuestionPanelWrongFx.png', 'javascript/math_game/assets/AxPage/QuestionPanelWrongFx.json');
        game.load.atlas('QuestionPanelRightFx', 'javascript/math_game/assets/AxPage/QuestionPanelRightFx.png', 'javascript/math_game/assets/AxPage/QuestionPanelRightFx.json');

        //Btn------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('Btn', 'javascript/math_game/assets/AxPage/Btn.png', 'javascript/math_game/assets/AxPage/Btn.json');
        
        game.load.image('ExitBtn','javascript/math_game/assets/AxPage/ExitBtn.jpg');
      
        //FoxWithAx---------------------------------------------------------------------------------------------------------------
        game.load.atlas('FoxWithAx001', 'javascript/math_game/assets/AxPage/FoxWithAx001.png', 'javascript/math_game/assets/AxPage/FoxWithAx001.json');
        game.load.atlas('FoxSitting002', 'javascript/math_game/assets/AxPage/FoxSitting002.png', 'javascript/math_game/assets/AxPage/FoxSitting002.json');

        game.load.atlas('FoxWithAx', 'javascript/math_game/assets/AxPage/FoxWithAx.png', 'javascript/math_game/assets/AxPage/FoxWithAx.json');
        game.load.atlas('FoxWithAx003', 'javascript/math_game/assets/AxPage/FoxWithAx003.png', 'javascript/math_game/assets/AxPage/FoxWithAx003.json');

    
        //AxBar-----------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('AxBar', 'javascript/math_game/assets/AxPage/AxBar.png', 'javascript/math_game/assets/AxPage/AxBar.json');
        
        //Fire-----------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('Fire', 'javascript/math_game/assets/AxPage/Fire.png', 'javascript/math_game/assets/AxPage/Fire.json');

        
        //Text-----------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('AxPageText', 'javascript/math_game/assets/AxPage/AxPageText.png', 'javascript/math_game/assets/AxPage/AxPageText.json');
      
        //Board-----------------------------------------------------------------------------------------------------------------------------
        game.load.atlas('Board', 'javascript/math_game/assets/AxPage/Board.png', 'javascript/math_game/assets/AxPage/Board.json');
            
        //BlackBG------------------------------------------------------------------------------------------------------------------------
        game.load.image('BlackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
      
      
        //ArrowSheet----------------------------------------------------------------------------------------------------------------
        game.load.atlas('ArrowSheet', 'javascript/math_game/assets/HomePage/ArrowSheet.png', 'javascript/math_game/assets/HomePage/ArrowSheet.json');
        //audio-----------------------------------------------------------------------------------------------------------------------   
    
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');      
        game.load.audio('AxFX', 'javascript/math_game/assets/audio/AxFX.mp3');    
        game.load.audio('AddEnergyFX', 'javascript/math_game/assets/audio/add_energyFX.mp3'); 
        game.load.audio('AxPagePlay', 'javascript/math_game/assets/audio/AxPageBG002.mp3'); 
        game.load.audio('AxPageSuccess', 'javascript/math_game/assets/audio/AxPageSuccess.mp3'); 
        game.load.audio('wrongFX', 'javascript/math_game/assets/audio/wrongFX.mp3');
        
        //game.load.audio('AxPageMusicBG', 'javascript/math_game/assets/audio/AxPageBG003.mp3'); 
        
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('AxPage');
  
        
    }

}