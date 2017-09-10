
demo.LoadingLevelMap = function() {};
demo.LoadingLevelMap.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        
        LevelMapLoadingBar = this.add.sprite(game.width/2-300,720,"LoadingBar");
        LevelMapLoadingBar.alpha = 1;
        
        LevelMapLoadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(LevelMapLoadingBar,0);
       
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true);         
        
        LoadingBarFrame = this.add.sprite(game.width/2,720,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);      

        game.load.image('LevelMapBG','javascript/math_game/assets/LevelMap/LevelMapBG.jpg');
        game.load.atlas('LevelBtn', 'javascript/math_game/assets/LevelMap/LevelBtn.png', 'javascript/math_game/assets/LevelMap/LevelBtn.json');
       
        //Medal-------------------------------------------------------------------------------------------------
        game.load.atlas('Medal', 'javascript/math_game/assets/LevelMap/Medal.png', 'javascript/math_game/assets/LevelMap/Medal.json');
        game.load.atlas('GetNewMedal', 'javascript/math_game/assets/LevelMap/GetNewMedal.png', 'javascript/math_game/assets/LevelMap/GetNewMedal.json');
        
        //BlackBG------------------------------------------------------------------------------
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
        //Audio--------------------------------------------------------------------------------
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
        game.load.audio('GetMedal', 'javascript/math_game/assets/audio/GetMedal.mp3');
        
        
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('LevelMap');
  
        
    }

}