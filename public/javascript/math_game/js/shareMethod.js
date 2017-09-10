demo.createAnimate = function(name,string,startframe,endframe,frameRate,loop){
    name.animate = name.animations.add(string,Phaser.Animation.generateFrameNames(string + '_',startframe,endframe,'.png',5),frameRate,loop);
};


demo.BlackBG = {
    create:function(){
        this.BG = game.add.graphics();
        this.BG.beginFill(0x000000);
        this.BG.drawRect(0,0,1600,1000); 
        this.BG.events.onInputDown.add(this.block, this);
        this.BG.inputEnabled = true;
        this.opening();    
    },
    opening:function(){
        this.BG.tween = game.add.tween(this.BG).to({alpha:0},1000,'Quad.easeIn',true); 
        this.BG.tween.onComplete.add(function(){
            this.BG.scale.setTo(0);
        },this);
    },
    ExitPage:function(page){
        this.BG.scale.setTo(1);
        this.BG.tween = game.add.tween(this.BG).to({alpha:1},1000,'Quad.easeIn',true);
        this.BG.tween.onComplete.add(function () {
            game.state.start(page,true,true); 
        }, this);
    },
    block:function(){
        console.log('block');
    }
};

demo.counter = {
    create:function(){
        this.timer = game.time.create(false);
        this.timer.loop(1000, this.updateCounter, this); 
        this.count = 0;
    },
    updateCounter:function(){
        if( playing_status == true ){
            this.count++;
        }
    }
};
