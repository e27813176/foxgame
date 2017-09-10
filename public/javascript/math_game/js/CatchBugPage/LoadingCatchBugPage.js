
demo.LoadingCatchBugPage = function() {};
demo.LoadingCatchBugPage.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    preload: function() {
        LoggingPageLoadingBar = this.add.sprite(game.width/2-300,720,"LoadingBar");
        LoggingPageLoadingBar.alpha = 1;
        
        LoggingPageLoadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(LoggingPageLoadingBar,0);
       
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true);         
        
        LoadingBarFrame = this.add.sprite(game.width/2,720,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);

        game.load.image('BG','javascript/math_game/assets/CatchBugPage/CatchBugPageBG.jpg');
        game.load.atlas('FlyingBug', 'javascript/math_game/assets/CatchBugPage/FlyingBug.png', 'javascript/math_game/assets/CatchBugPage/FlyingBug.json'); 
        game.load.atlas('FoxStanding', 'javascript/math_game/assets/CatchBugPage/FoxStanding.png', 'javascript/math_game/assets/CatchBugPage/FoxStanding.json');    
        game.load.atlas('FoxCatching', 'javascript/math_game/assets/CatchBugPage/FoxCatching.png', 'javascript/math_game/assets/CatchBugPage/FoxCatching.json');     
        game.load.atlas('FoxFalling', 'javascript/math_game/assets/CatchBugPage/FoxFalling.png', 'javascript/math_game/assets/CatchBugPage/FoxFalling.json');  
        game.load.atlas('FoxHitting001', 'javascript/math_game/assets/CatchBugPage/FoxHitting001.png', 'javascript/math_game/assets/CatchBugPage/FoxHitting001.json');          
        game.load.atlas('FoxHitting', 'javascript/math_game/assets/CatchBugPage/FoxHitting.png', 'javascript/math_game/assets/CatchBugPage/FoxHitting.json');    
        game.load.atlas('FoxStandUp', 'javascript/math_game/assets/CatchBugPage/FoxStandUp.png', 'javascript/math_game/assets/CatchBugPage/FoxStandUp.json');    
        game.load.atlas('FruitDrop', 'javascript/math_game/assets/CatchBugPage/FruitDrop.png', 'javascript/math_game/assets/CatchBugPage/FruitDrop.json');    
        game.load.atlas('Board', 'javascript/math_game/assets/CatchBugPage/Board.png', 'javascript/math_game/assets/CatchBugPage/Board.json');

        game.load.atlas('TutorialText', 'javascript/math_game/assets/CatchBugPage/TutorialText.png', 'javascript/math_game/assets/CatchBugPage/TutorialText.json');        
        
        game.load.atlas('TaskBoard', 'javascript/math_game/assets/CatchBugPage/TaskBoard.png', 'javascript/math_game/assets/CatchBugPage/TaskBoard.json');        
        
        game.load.image('blackBG','javascript/math_game/assets/CatchBugPage/blackBG.jpg');
        game.load.atlas('Panel', 'javascript/math_game/assets/CatchBugPage/Panel.png', 'javascript/math_game/assets/CatchBugPage/Panel.json'); 
        
        // === audio === 
        
        game.load.audio('GetMedal', 'javascript/math_game/assets/audio/GetMedal.mp3');
        game.load.audio('CatchBugPageBG', 'javascript/math_game/assets/audio/CatchBugPageBG.mp3');
        game.load.audio('CatchBugPagefail', 'javascript/math_game/assets/audio/CatchBugPagefail.mp3');
        game.load.audio('CatchBugPagefall', 'javascript/math_game/assets/audio/CatchBugPagefall.mp3');
        game.load.audio('AddEnergyFX', 'javascript/math_game/assets/audio/add_energyFX.mp3'); 


    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#000000";
        game.state.start('CatchBugPage',true,false);
  
    }

}