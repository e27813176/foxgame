demo.FishingPage.FishBox = {
    create:function(){
        
        this.OrangeFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','OrangeFishBox.png');
        this.OrangeFishBox.anchor.setTo(0.5);
        this.OrangeFishBox.alpha = 0;
        this.LightBlueFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','LightBlueBox.png');
        this.LightBlueFishBox.anchor.setTo(0.5);
        this.LightBlueFishBox.alpha = 0;
        this.GlowBlueFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','GlowBlueBox.png');
        this.GlowBlueFishBox.anchor.setTo(0.5);
        this.GlowBlueFishBox.alpha = 0;
        this.ElectricFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','ElectricFishBox.png');
        this.ElectricFishBox.anchor.setTo(0.5);
        this.ElectricFishBox.alpha = 0;
        this.FireFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','FireFishBox.png');
        this.FireFishBox.anchor.setTo(0.5);
        this.FireFishBox.alpha = 0;
        this.WifiFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','WifiFishBox.png');
        this.WifiFishBox.anchor.setTo(0.5);
        this.WifiFishBox.alpha = 0;
        this.MedicineFishBox = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard','MedicineFishBox.png');
        this.MedicineFishBox.anchor.setTo(0.5);
        this.MedicineFishBox.alpha = 0;

        this.FishBoxHighlight = game.add.sprite(game.world.centerX,game.world.centerY,'GetFishBoard');
        this.FishBoxHighlight.anchor.setTo(0.5);
        this.FishBoxHighlight.alpha = 0; 
        demo.createAnimate(this.FishBoxHighlight,'FishBoxHighlight',0,20,30,true);
    },

    
    showUp:function(random){
        
        if( FishingLevel == 1 || FishingLevel == 2 ){
            game.add.tween(this.OrangeFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
        }else if ( FishingLevel == 3 || FishingLevel == 4 ){
        
            game.add.tween(this.FireFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
        
        }else if ( FishingLevel == 5 || FishingLevel == 6 ){

            game.add.tween(this.ElectricFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
        }else if ( FishingLevel == 7 || FishingLevel == 8 ){

            game.add.tween(this.WifiFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
        }else if ( FishingLevel == 9 || FishingLevel == 10 ){

            game.add.tween(this.LightBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
        }else if ( FishingLevel == 11 || FishingLevel == 12 ){

            game.add.tween(this.MedicineFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
    
        }else if( FishingLevel == 13 ){
            if( random == 0 ){
                game.add.tween(this.GlowBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);     
            }else if( random >= 1 && random < 6 ){
                game.add.tween(this.OrangeFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
            }else if( random >= 6 && random < 10 ){
                game.add.tween(this.FireFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
            }else if( random >= 10 && random < 16 ){
                game.add.tween(this.ElectricFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
            }else if( random >= 16 && random < 20 ){
                game.add.tween(this.WifiFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);    
            }else if( random >= 20 && random < 26 ){
                game.add.tween(this.LightBlueFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);
            }else if( random >= 26 && random < 30 ){
                game.add.tween(this.MedicineFishBox).to({alpha:1},500,'Quad.easeOut',true,2500);    
            }
       
        }
        game.add.tween(this.FishBoxHighlight).to({alpha:1 },500,'Quad.easeOut',true,2500);
        this.FishBoxHighlight.animate.play();
    },
    clean:function(){
        game.add.tween(this.OrangeFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.FireFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.ElectricFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.WifiFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.LightBlueFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.MedicineFishBox).to({alpha:0},250,'Quad.easeOut',true,0);
        game.add.tween(this.GlowBlueFishBox).to({alpha:0},250,'Quad.easeOut',true,0);    
    
        game.add.tween(this.FishBoxHighlight).to({alpha:0},250,'Quad.easeOut',true,0);  
        this.FishBoxHighlight.animate.stop();        
    }

};

        
