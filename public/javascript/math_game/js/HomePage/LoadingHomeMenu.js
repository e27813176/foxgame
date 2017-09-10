var FirstStart = true;

demo.LoadingHomeMenu = function() {};
demo.LoadingHomeMenu.prototype = {
    preload: function() {
       
        loadingBar = this.add.sprite(game.width/2-300,620,"LoadingBar");
        loadingBar.alpha = 1;
        
        loadingBar.anchor.setTo(0,0.5);
        this.load.setPreloadSprite(loadingBar,0);
        
        this.FoxLogo = this.add.sprite(centerX,centerY,'FoxLogo');
        this.FoxLogo.anchor.setTo(0.5);
        FoxLogoTween = game.add.tween(this.FoxLogo).to({alpha:0.5},800,'Quad.easeInOut',true,0,false,true).loop(true); 

        LoadingBarFrame = this.add.sprite(game.width/2,620,"LoadingBarFrame");
        LoadingBarFrame.alpha = 1;
        LoadingBarFrame.anchor.setTo(0.5,0.5);

        game.load.image('HomePageBG','javascript/math_game/assets/HomePage/Home_page.jpg');

        game.load.image('FoxIconCenter','javascript/math_game/assets/loadingpage/FoxIconCenter.png');
        game.load.image('grass','javascript/math_game/assets/HomePage/grass.png');
        game.load.image('HomeTreeFrame1','javascript/math_game/assets/HomePage/HomeTreeFrame1.png');

        
        game.load.image('blackBG','javascript/math_game/assets/fishingpage/blackBG.jpg');
 
        game.load.audio('menu', 'javascript/math_game/assets/audio/game_menu_BG.mp3');

        game.load.atlas('FruitDrop', 'javascript/math_game/assets/HomePage/FruitDrop.png', 'javascript/math_game/assets/HomePage/FruitDrop.json');
        
        //btn---------------------------------------------------------------------------------------------------------------
        game.load.atlas('DoorBtn', 'javascript/math_game/assets/HomePage/DoorBtn.png', 'javascript/math_game/assets/HomePage/DoorBtn.json');
        game.load.atlas('HomeMailBtn', 'javascript/math_game/assets/HomePage/HomeMailBtn.png', 'javascript/math_game/assets/HomePage/HomeMailBtn.json');
        
        game.load.image('SettingBtnBG', 'javascript/math_game/assets/HomePage/SettingBtnBG.png');
        game.load.atlas('SettingBtnSheet', 'javascript/math_game/assets/HomePage/SettingBtnSheet.png', 'javascript/math_game/assets/HomePage/SettingBtnSheet.json');
         
        game.load.atlas('HomePageTreeSheet', 'javascript/math_game/assets/HomePage/HomeTree.png', 'javascript/math_game/assets/HomePage/HomeTree.json');  
        game.load.atlas('TaskBoard', 'javascript/math_game/assets/HomePage/TaskBoard.png', 'javascript/math_game/assets/HomePage/TaskBoard.json');  
        
        game.load.atlas('ArrowSheet', 'javascript/math_game/assets/HomePage/ArrowSheet.png', 'javascript/math_game/assets/HomePage/ArrowSheet.json');  
        
        //game.load.image('RoadHover', 'javascript/math_game/assets/HomePage/RoadHover.png');
        game.load.image('HomeTreeHover', 'javascript/math_game/assets/HomePage/HomeTreeHover.jpg');
        game.load.image('JunyiIconBtn', 'javascript/math_game/assets/HomePage/JunyiIconBtn.png');

        //Text----------------------------------------------------------------------------------------------------------------------------
        game.load.image('FoxHomeText','javascript/math_game/assets/HomePage/FoxHomeText.jpg');
        game.load.image('HomeMailText','javascript/math_game/assets/HomePage/HomeMailText.jpg');
        game.load.image('GameSettingText','javascript/math_game/assets/HomePage/GameSettingText.jpg');
        game.load.image('HomeTreeText','javascript/math_game/assets/HomePage/HomeTreeText.jpg');
        game.load.image('FoxGoFishingText','javascript/math_game/assets/HomePage/FoxGoFishingText.jpg');       
        game.load.image('StartText','javascript/math_game/assets/loadingpage/StartText.png');        
              
        //Fox------------------------------------------------------------------------------------------------
        game.load.atlas('FoxStanding', 'javascript/math_game/assets/HomePage/FoxStanding.png', 'javascript/math_game/assets/HomePage/FoxStanding.json'); 
        
        game.load.image('UserPanel','javascript/math_game/assets/HomePage/UserPanel.png');  
        
        //Audio-----------------------------------------------------------------------------------------------
        game.load.audio('StartBtnDown', 'javascript/math_game/assets/audio/StartBtnDown.mp3');
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
    },

    create: function() {
        game_menu_music = game.add.audio('menu');
        if( FirstStart == true ){
            FirstStart = false;
            /*
            FoxIconCenter = game.add.sprite(0,100, 'FoxIconCenter');
            FoxIconCenter.alpha = 0;
            game.add.tween(FoxIconCenter).to({alpha:1},1000,'Linear',true);
            //loadingBarTween.pause();
            //loadingBarTween = game.add.tween(loadingBar).to({alpha:'-0.5'},400,'Quad.easeInOut',true,0,false,true).loop(true); 
            FoxLogoTween.pause();  
            game.add.tween(this.FoxLogo).to({alpha:0},500,'Linear',true);
        
            StartText = game.add.sprite(0,100,'StartText');
            StartText.alpha = 1;
           
            StartText.events.onInputDown.add(StartGame, this);
            StartText.inputEnabled = true;
            StartTextTween = game.add.tween(StartText).to({alpha:0.2},500,'Linear',true,0,false,false).loop(true);   
            */
            game.state.start('Login',true,false);
            //Audio-------------------------------------------------------------------------------------------------------
            //StartBtnDown = game.add.audio('StartBtnDown');
            
        }else{
            game.state.start('HomeMenu',true,false);
        }
    },
    shutdown: function(){
        this.fox_logo = null; 
        this.tweens.removeAll();
    }

    
};
function StartGame(){
    
    StartBtnDown.play();
    //console.log('Hello');
    StartTextTween.stop();
    StartText.inputEnabled = false;
    //loadingBarTween.pause();
    game.add.tween(loadingBar).to({alpha:0},500,'Linear',true);
    game.add.tween(LoadingBarFrame).to({alpha:0},500,'Linear',true);
    game.add.tween(FoxIconCenter).to({alpha:0},500,'Linear',true);
    StartGameTextTween = game.add.tween(StartText).to({alpha:0},500,'Linear',true);
    StartGameTextTween.onComplete.add(function () {	
        game.state.start('HomeMenu',true,false);    
        /*
        DoorBtn.inputEnabled = true;
        HomeMailBtn.inputEnabled = true;
        SettingBtnSheet.inputEnabled = true;
        HomeTreeFrame1.inputEnabled = true; 
        RoadBtn.inputEnabled = true;
        */
    }, this);
}
