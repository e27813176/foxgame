demo.FishingPage.Fox = {
    create:function(){
        this.FoxSittingRod = game.add.sprite(0, 0, 'FoxSittingRod');
    
        //param: object, object string, start frame, end frame, frame rate 
        demo.createAnimate(this.FoxSittingRod,'FoxSittingRod',11,27,20,true);
    
        this.FoxSitting = game.add.sprite(0, 0, 'FoxSitting');
        demo.createAnimate(this.FoxSitting,'FoxSitting',11,27,20,true);
    
        this.FoxPullingRod = game.add.sprite(0, 0, 'FoxPullingRod');
        demo.createAnimate(this.FoxPullingRod,'FoxPullingRod',0,18,30,true);
    
        this.FoxPulling = game.add.sprite(0, 0, 'FoxPulling');
        demo.createAnimate(this.FoxPulling,'FoxPulling',0,18,30,true);
    
        this.FoxFallingRod = game.add.sprite(0, 0, 'FoxFalling');
        demo.createAnimate(this.FoxFallingRod,'FoxFallingRod',0,20,25,false);
        
        this.FoxFalling = game.add.sprite(0, 0, 'FoxFalling');
        demo.createAnimate(this.FoxFalling,'FoxFalling',0,20,25,false);

        this.FoxGetFishRod = game.add.sprite(0,0,'FoxGetFish');
        demo.createAnimate(this.FoxGetFishRod,'FoxGetFishRod',0,20,20,false);
        
        this.FoxGetFish = game.add.sprite(0,0,'FoxGetFish');
        demo.createAnimate(this.FoxGetFish,'FoxGetFish',0,20,20,false);
        
        this.FoxSittingRod.animate.play();
        this.FoxSitting.animate.play();
        this.FoxPullingRod.alpha = 0;
        this.FoxPulling.alpha = 0;
        this.FoxFallingRod.alpha = 0;
        this.FoxFalling.alpha = 0;
        this.FoxGetFishRod.alpha = 0;
        this.FoxGetFish.alpha = 0;
    },
    sitting:function(){
        this.FoxSitting.alpha = 1;
        this.FoxSittingRod.alpha = 1;
        this.FoxSitting.animate.play();
        this.FoxSittingRod.animate.play();  
    },
    stopSitting:function(){
            
        this.FoxSitting.alpha = 0;
        this.FoxSittingRod.alpha = 0;
        this.FoxSitting.animate.stop();
        this.FoxSittingRod.animate.stop();
    
    },
    pulling:function(){
        this.FoxPullingRod.animations.play('FoxPullingRod',30,true);
        this.FoxPullingRod.alpha = 1;
        this.FoxPulling.animations.play("FoxPulling",30,true);
        this.FoxPulling.alpha = 1;
    },
    stopPulling:function(){
        this.FoxPulling.alpha = 0;
        this.FoxPullingRod.alpha = 0;
        this.FoxPulling.animate.stop();
        this.FoxPullingRod.animate.stop();         
    },
    falling:function(){
  
        
        this.FoxFalling.animations.play('FoxFalling',25,false);
        this.FoxFalling.alpha = 1;
        this.FoxFallingRod.animations.play('FoxFallingRod',25,false);
        this.FoxFallingRod.alpha = 1;
    },
    cleanFall:function(){
        this.FoxFalling.alpha = 0;
    },
    getFish:function(){
        this.FoxGetFish.animate.play();
        this.FoxGetFish.alpha = 1;
        
        this.FoxGetFishRod.animate.play();
        this.FoxGetFishRod.alpha = 1; 
    },
    cleanGetFish:function(){
        this.FoxGetFish.alpha = 0;
        this.FoxGetFishRod.alpha = 0;
    }
};