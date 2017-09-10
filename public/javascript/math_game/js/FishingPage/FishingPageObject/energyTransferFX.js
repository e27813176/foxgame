
demo.FishingPage.energyTransfer = {
    create:function(){
        this.energyTransfer = game.add.sprite('','','EnergyTransfer');
        
        //param: object, object string, start frame, end frame, frame rate 
        demo.createAnimate(this.energyTransfer,'EnergyTransfer',0,19,30,true);
        this.energyTransfer.anchor.setTo(0.5,0.5);
        this.energyTransfer.scale.setTo(0.8);
        this.energyTransfer.alpha = 0;

    },
    rightFX:function(){
        if(minusmode == true){            
            this.energyTransfer.x = 1200;
            this.energyTransfer.y = 270;
        }else if(addmode == true){
            this.energyTransfer.x = 1100;
            this.energyTransfer.y = 155;        
        }
        rightFX.play();
        this.energyTransfer.alpha = 1;
        this.energyTransfer.animate.play();
        this.energyTransfer.Tween = game.add.tween(this.energyTransfer).to({x:1450,y:ScoreBar.y+150},300,'Quad.easeIn',true); 
        this.energyTransfer.Tween.onComplete.add(function(){
            this.energyTransfer.alpha = 0;
            this.energyTransfer.animate.stop();
            game.add.tween(ScoreBar).to({y:'-60'},200,'Linear',true); 
            game.add.tween(ScoreBarRed).to({y:'-60'},200,'Linear',true);

            ScoreBarTopLight.alpha = 1;
            game.add.tween(ScoreBarTopLight).to({alpha:0},1000,'Quad.easeOut',true);
            
            ScorebarRightFx.alpha= 1;
            ScorebarRightFx.animations.play("ScorebarRightFx",30,false);
            ScorebarRightFxAnimate.onComplete.add(function () {	
                ScorebarRightFx.alpha = 0;
            }, this); 
            
            demo.FishingPage.question.updateQuestion(); 
            
            add_energyFX.play();
        }, this);
        for(let i =0;i<3;i++){
            AnswerPanelLight[i].alpha = 1;
            game.add.tween(AnswerPanelLight[i]).to({alpha:0},500,'Quad.easeOut',true);
        }
        if(ScoreBar.y <=  58 && playing_status == true){
            demo.FishingPage.finishfishing();
        } 
        
    },
    wrongFX:function(){
        wrongFX.play();    
        game.add.tween(ScoreBar).to({y:'+50'},50,'Linear',true); 
        game.add.tween(ScoreBarRed).to({y:'+50'},50,'Linear',true);
    
    
    
        ScoreBarRed.alpha = 1;
        game.add.tween(ScoreBarRed).to({alpha:0},500,'Quad.easeOut',true);
    
        PanelWrongFx001.animations.play("PanelWrongFx001",30,false);
        PanelWrongFx001.alpha = 1;
        PanelWrongFx002.animations.play("PanelWrongFx002",30,false);
        PanelWrongFx002.alpha = 1;
        PanelWrongFx003.animations.play("PanelWrongFx003",30,false);
        PanelWrongFx003.alpha = 1;

        ScorebarWrongFx.alpha= 1;
        ScorebarWrongFx.animations.play("ScorebarWrongFx",20,false);
        ScorebarWrongFxAnimate.onComplete.add(function () {	
            ScorebarWrongFx.alpha = 0;
        }, this);     
    }
}


//wrong fx-----------------------------------------------------------------------------------------------------------------

function scorebar_wrong_fx(){
    game.add.tween(ScoreBar).to({y:'+50'},50,'Linear',true); 
    game.add.tween(ScoreBarRed).to({y:'+50'},50,'Linear',true);
    
    wrongFX.play();
    
    ScoreBarRed.alpha = 1;
    game.add.tween(ScoreBarRed).to({alpha:0},500,'Quad.easeOut',true);
    
    PanelWrongFx001.animations.play("PanelWrongFx001",30,false);
    PanelWrongFx001.alpha = 1;
    PanelWrongFx002.animations.play("PanelWrongFx002",30,false);
    PanelWrongFx002.alpha = 1;
    PanelWrongFx003.animations.play("PanelWrongFx003",30,false);
    PanelWrongFx003.alpha = 1;

    ScorebarWrongFx.alpha= 1;
    ScorebarWrongFx.animations.play("ScorebarWrongFx",20,false);
    ScorebarWrongFxAnimate.onComplete.add(function () {	
        ScorebarWrongFx.alpha = 0;
    }, this); 

}