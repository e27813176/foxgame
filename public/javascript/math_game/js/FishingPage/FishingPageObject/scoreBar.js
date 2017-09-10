demo.FishingPage.scoreBar = {
    create:function(){
        ScoreBarBG = game.add.sprite(0,0,'ScoreBarAtlas','ScoreBarBG.png');
        ScoreBarBG.alpha = 0;
        
        ScoreBar = game.add.sprite(0,0,'ScoreBarAtlas','EnergyBar.png');
        ScoreBar.alpha = 1;
        ScoreBarTween = game.add.tween(ScoreBar).to({alpha:'-0.4'},500,'Quad.easeInOut',true,0,false,true).loop(true);
        ScoreBarTween.pause();
        ScoreBar.alpha = 0;

        ScoreBarRed = game.add.sprite(0,0,'ScoreBarAtlas','EnergyBarRed.png');
        ScoreBarRed.alpha = 0;

        ScoreBarTop = game.add.sprite(0,0,'ScoreBarAtlas','ScoreBarTop.png');
        ScoreBarTop.alpha = 0;   
        
        ScoreBarTopLight = game.add.sprite(0,0,'ScoreBarAtlas','ScoreBarTopLight.png');
        ScoreBarTopLight.alpha = 0;   
        
        ScorebarTopSuccessLight = game.add.sprite(0,0,'ScoreBarAtlas','ScoreBarTopLight.png');
        ScorebarTopSuccessLight.alpha = 0;
        
        ScoreBarMask = game.add.graphics();
        ScoreBarMask.beginFill(0xffffff);
        ScoreBarMask.drawRect(1430,240,100,400);
        ScoreBar.mask = ScoreBarMask;
        ScoreBarRed.mask = ScoreBarMask;
        
        ScorebarWrongFx = game.add.sprite(0,0, "ScoreBarAtlas");
        ScorebarWrongFxAnimate = ScorebarWrongFx.animations.add("ScorebarWrongFx",Phaser.Animation.generateFrameNames('ScoreBarWrongFx_',0,9, '.png', 5), 10, true);
        ScorebarWrongFx.alpha = 0;
        
        ScorebarRightFx = game.add.sprite(0,0, "ScoreBarAtlas");
        ScorebarRightFxAnimate = ScorebarRightFx.animations.add("ScorebarRightFx",Phaser.Animation.generateFrameNames('ScoreBarRightFx_',0,9, '.png', 5), 10, true);
        ScorebarRightFx.alpha = 0;

    }
};