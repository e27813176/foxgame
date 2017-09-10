demo.LoadingFishingPage = function() {};
demo.LoadingFishingPage.prototype = {
    preload: function() {
        FishingPageLoadingBar = this.add.sprite(game.width/2-300,720,"LoadingBar");
        FishingPageLoadingBar.alpha = 1;
        game.add.tween(FishingPageLoadingBar).to({alpha:'-0.3'},800,'Quad.easeInOut',true,0,false,true).loop(true); 
        FishingPageLoadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(FishingPageLoadingBar,0);
       
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.3},800,'Quad.easeInOut',true,0,false,true).loop(true); 

        LoadingBarFrame = this.add.sprite(game.width/2,720,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);
        
        
        //game.load.atlas('fishingpage_sheet005', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.png', 'javascript/math_game/assets/fishingpage/fishingpage_atlas005.json');
        
        game.load.atlas('get_stone_fish_atlas', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_stone_fish_atlas.json');

        game.load.atlas('get_light_blue_fish_atlas', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.png', 'javascript/math_game/assets/fishingpage/get_light_blue_fish_atlas.json');
        
        //FoxDynamic------------------------------------------------------------------------------------------------------------
        game.load.atlas('FoxPulling', 'javascript/math_game/assets/fishingpage/FoxPulling.png', 'javascript/math_game/assets/fishingpage/FoxPulling.json');

        game.load.atlas('FoxPullingRod', 'javascript/math_game/assets/fishingpage/FoxPullingRod.png', 'javascript/math_game/assets/fishingpage/FoxPullingRod.json');
        
        game.load.atlas('FoxSitting', 'javascript/math_game/assets/fishingpage/FoxSitting.png', 'javascript/math_game/assets/fishingpage/FoxSitting.json');        
        
        game.load.atlas('FoxSittingRod', 'javascript/math_game/assets/fishingpage/FoxSittingRod.png', 'javascript/math_game/assets/fishingpage/FoxSittingRod.json');     

        game.load.atlas('FoxGetFish', 'javascript/math_game/assets/fishingpage/FoxGetFish.png', 'javascript/math_game/assets/fishingpage/FoxGetFish.json');     

        game.load.atlas('FoxFalling', 'javascript/math_game/assets/fishingpage/FoxFalling.png', 'javascript/math_game/assets/fishingpage/FoxFalling.json');     

        game.load.atlas('Fish', 'javascript/math_game/assets/fishingpage/Fish.png', 'javascript/math_game/assets/fishingpage/Fish.json');  
        
        game.load.atlas('Fish002', 'javascript/math_game/assets/fishingpage/Fish002.png', 'javascript/math_game/assets/fishingpage/Fish002.json');           
                

        //EnergyTransfer----------------------------------------------------------------------------------------------------------
        game.load.atlas('EnergyTransfer', 'javascript/math_game/assets/fishingpage/EnergyTransfer.png', 'javascript/math_game/assets/fishingpage/EnergyTransfer.json');         
        
        //GetFishBoard----------------------------------------------------------------------------------------------------------
        game.load.atlas('GetFishBoard', 'javascript/math_game/assets/fishingpage/GetFishBoard.png', 'javascript/math_game/assets/fishingpage/GetFishBoard.json');   
        
        //GetFishBoard----------------------------------------------------------------------------------------------------------
        game.load.atlas('FailBoard', 'javascript/math_game/assets/fishingpage/FailBoard.png', 'javascript/math_game/assets/fishingpage/FailBoard.json');   
        
        //panel----------------------------------------------------------------------------------------------------------------------

        game.load.atlas('Panel', 'javascript/math_game/assets/fishingpage/Panel.png', 'javascript/math_game/assets/fishingpage/Panel.json');
        
        //scorebar-------------------------------------------------------------------------------------------------------------------
        game.load.atlas('ScoreBarAtlas', 'javascript/math_game/assets/fishingpage/ScoreBarAtlas.png', 'javascript/math_game/assets/fishingpage/ScoreBarAtlas.json');
        //BG--------------------------------------------------------------------------------------------
        game.load.image('BG','javascript/math_game/assets/fishingpage/BG.jpg');        
        game.load.image('mark_tutorial','javascript/math_game/assets/fishingpage/mark.png');
        
        //audio---------------------------------------------------------------------------------------------------------   
        game.load.audio('fishing', 'javascript/math_game/assets/audio/fishing.mp3');
        game.load.audio('rightFX', 'javascript/math_game/assets/audio/rightFX.mp3');
        game.load.audio('wrongFX', 'javascript/math_game/assets/audio/wrongFX.mp3');
        game.load.audio('successFX', 'javascript/math_game/assets/audio/successFX.mp3');
        game.load.audio('failureFX', 'javascript/math_game/assets/audio/failureFX.mp3');
        game.load.audio('alertFX', 'javascript/math_game/assets/audio/alertFX.mp3');
        game.load.audio('startFX', 'javascript/math_game/assets/audio/startFX.mp3');
        game.load.audio('fishingBG', 'javascript/math_game/assets/audio/fishingBG.mp3');
        game.load.audio('clickFX', 'javascript/math_game/assets/audio/clickFX.mp3');  
        game.load.audio('add_energyFX', 'javascript/math_game/assets/audio/add_energyFX.mp3'); 
    },

    create: function() {
        game.state.start('FishingPage',true,false);
    },
    shutdown: function(){
        this.FoxLogo = null; 
        this.tweens.removeAll();
    }

    
};
