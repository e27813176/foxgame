demo.CatchBugPage.fox = {
    create:function(){
        //demo.createAnimate(FlyingBug,0,39,30);
        
        FoxStanding = game.add.sprite(0,0,'FoxStanding');
        FoxStanding.Animate = FoxStanding.animations.add("FoxStanding",Phaser.Animation.generateFrameNames('FoxStanding_',11,40,'.png',5),30,true);
        FoxStanding.Animate.play('',true);
        
        FoxFalling = game.add.sprite(0,0,'FoxFalling');
        FoxFallingAnimate = FoxFalling.animations.add("FoxFalling",Phaser.Animation.generateFrameNames('FoxFalling_',41,57,'.png',5),30,true);
        FoxFalling.alpha = 0;

        FoxFallingAnimate.onComplete.add(function(){
            //console.log('fall');
            FoxStanding.alpha = 1;
            FoxStanding.Animate.play('',true);
            FoxFalling.alpha = 0;
            demo.CatchBugPage.panel.setAnswerPanelEnable(true);
        },this);
        
        FoxHitting001 = game.add.sprite(0,0,'FoxHitting001');
        FoxHitting001Animate = FoxHitting001.animations.add("FoxHitting001",Phaser.Animation.generateFrameNames('FoxHitting_',58,70,'.png',5),30,true);
        FoxHitting001.alpha = 0;            
        
        FoxHitting = game.add.sprite(0,0,'FoxHitting');
        FoxHittingAnimate = FoxHitting.animations.add("FoxHitting",Phaser.Animation.generateFrameNames('FoxHitting_',71,106,'.png',5),30,true);
        FoxHitting.alpha = 0;        

        FoxHitting001Animate.onComplete.add(function(){
            FoxHitting001.alpha = 0;
            FoxHitting.alpha = 1;
            FoxHittingAnimate.play('',false);
        },this);
        
        FoxHittingAnimate.onComplete.add(function(){
            FoxHitting.alpha = 0;
            FoxStandUp.alpha = 1;
            FoxStandUpAnimate.play('',false);
        },this);

        
        FoxStandUp = game.add.sprite(0,0,'FoxStandUp');
        FoxStandUpAnimate = FoxStandUp.animations.add("FoxStandUp",Phaser.Animation.generateFrameNames('FoxStandUp_',101,145,'.png',5),30,true);
        FoxStandUp.alpha = 0;        
        
        FoxStandUpAnimate.onComplete.add(function(){
            //console.log('stand up');
            FoxStandUp.alpha = 0;
            FoxStanding.alpha = 1;
            FoxStanding.Animate.play('',true);
            
            demo.CatchBugPage.panel.setAnswerPanelEnable(true);
        },this);        
        
        
        FoxCatching = game.add.sprite(0,0,'FoxCatching');
        FoxCatchingAnimate = FoxCatching.animations.add("FoxCatching",Phaser.Animation.generateFrameNames('FoxCatching_',0,10,'.png',5),30,true);
        FoxCatching.alpha = 0;
        FoxCatchingAnimate.onComplete.add(function(){
            FoxCatchingAnimate.stop();
            
            FoxStanding.alpha = 1;
            FoxCatching.alpha = 0;
            FoxStanding.Animate.play('',true);
            
            if( demo.CatchBugPage.tutorialMode == true ){
                demo.CatchBugPage.tutorial.answerCorrect();
            }else{
                
                demo.CatchBugPage.getBoard.showUpBoard();   
                
            } 
        },this);
        
        FruitDrop = game.add.sprite(0,0,'FruitDrop');
        FruitDropAnimate = FruitDrop.animations.add("FruitDrop",Phaser.Animation.generateFrameNames('FruitDrop_',59,96,'.png',5),30,true);
        FruitDrop.alpha = 0;          
    },
    catch:function(){
        demo.CatchBugPage.panel.setAnswerPanelEnable(false);
        
        if( demo.CatchBugPage.flyingBug.flyingBug.animate.frame > 0 && demo.CatchBugPage.flyingBug.flyingBug.animate.frame < 22 ){
            
            FoxStanding.alpha = 0;
            FoxStanding.Animate.stop();
            FoxCatching.alpha = 1;
            FoxCatchingAnimate.play('',false);

        }else{
            CatchBugPagefall.play();
            FoxStanding.alpha = 0;
            FoxStanding.Animate.stop();
            FoxFalling.alpha = 1;
            FoxFallingAnimate.play('',false);  

        }        
    },
    fail:function(){
        CatchBugPagefail.play();
        demo.CatchBugPage.panel.setAnswerPanelEnable(false);
        FoxStanding.alpha = 0;
        FoxStanding.Animate.stop();        
        FoxHitting001.alpha = 1;
        FoxHitting001Animate.play('',false);
        FruitDrop.alpha = 1;
        FruitDropAnimate.play('',false);
    }
    
};
