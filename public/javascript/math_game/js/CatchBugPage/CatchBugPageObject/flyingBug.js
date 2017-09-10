demo.CatchBugPage.flyingBug = {
    
    create:function(){
        this.delay = 0;
        this.flyingBug = game.add.sprite(0,0,'FlyingBug');
        demo.createAnimate(this.flyingBug,"FlyingBug",0,39,30,false);
        this.flyingBug.animate.onComplete.add(this.createDelay,this);       
    },
    createDelay:function(){
        this.delay = Math.floor(Math.random()*4)*1000+1000;   
        console.log(this.delay);
        this.flyingBug.showUp = game.add.tween(this.flyingBug).to({alpha:1},300,'Quad.easeOut',true,this.delay);
        this.flyingBug.showUp.onComplete.add(this.start,this);
    },
    start:function(){
        this.flyingBug.animate.play();
        if( demo.CatchBugPage.tutorialMode == true ){
           CircleWave.alpha = 1; 
           CircleWave.Animate.play('',false);   
        }
    },
    stop:function(){
        this.flyingBug.animate.stop();
        this.flyingBug.animate.frame = 0;
        this.flyingBug.showUp.stop();
    },
};        
