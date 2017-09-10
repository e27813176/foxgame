demo.FishingPage.createFish = function(){
    this.OrangeFish = game.add.sprite(0,0,'Fish');
    this.OrangeFish.alpha = 0;
    this.OrangeFishStop = game.add.sprite(0,0,'Fish');
    this.OrangeFishStop.alpha = 0;         
    
    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.OrangeFish,"OrangeFish",0,20,20,false);
    demo.createAnimate(this.OrangeFishStop,"OrangeFishStop",20,25,30,true);

    this.OrangeFish.animate.onComplete.add(function () {
        console.log('OrangeFish');
        this.OrangeFish.alpha = 0;
        this.OrangeFishStop.alpha = 1;
        this.OrangeFishStop.animate.play();
        
    }, this);    
    
    this.LightBlueFish = game.add.sprite(0,0,'Fish');
    this.LightBlueFish.alpha = 0;
    this.LightBlueFishStop = game.add.sprite(0,0,'Fish');
    this.LightBlueFishStop.alpha = 0;         
    
    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.LightBlueFish,"LightBlueFish",0,20,20,false);
    demo.createAnimate(this.LightBlueFishStop,"LightBlueFishStop",20,25,30,true);
    this.LightBlueFish.animate.onComplete.add(function () {      
        this.LightBlueFish.alpha = 0;
        this.LightBlueFishStop.alpha = 1;
        this.LightBlueFishStop.animate.play();
    },this);
    this.GlowBlueFish = game.add.sprite(0,0,'Fish');
    this.GlowBlueFish.alpha = 0;
    this.GlowBlueFishStop = game.add.sprite(0,0,'Fish');
    this.GlowBlueFishStop.alpha = 0;         

    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.GlowBlueFish,"GlowBlueFish",0,20,20,false);
    demo.createAnimate(this.GlowBlueFishStop,"GlowBlueFishStop",20,25,30,true);
    this.GlowBlueFish.animate.onComplete.add(function () {      
        this.GlowBlueFish.alpha = 0;
        this.GlowBlueFishStop.alpha = 1;
        this.GlowBlueFishStop.animate.play();
    },this);      
    this.ElectricFish = game.add.sprite(0,0,'Fish');
    this.ElectricFish.alpha = 0;
    this.ElectricFishStop = game.add.sprite(0,0,'Fish');
    this.ElectricFishStop.alpha = 0;         
    
    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.ElectricFish,"ElectricFish",0,20,20,false);
    demo.createAnimate(this.ElectricFishStop,"ElectricFishStop",20,27,30,true);
    
    this.ElectricFish.animate.onComplete.add(function () {      
        this.ElectricFish.alpha = 0;
        this.ElectricFishStop.alpha = 1;
        this.ElectricFishStop.animate.play();
    },this);  
    
    this.FireFish = game.add.sprite(0,0,'Fish002');
    this.FireFish.alpha = 0;             
        
    this.FireFishStopFire = game.add.sprite(0,0,'Fish002');
    this.FireFishStopFire.alpha = 0; 
        
    this.FireFishStop = game.add.sprite(0,0,'Fish002');
    this.FireFishStop.alpha = 0;        

    demo.createAnimate(this.FireFish,"FireFish",0,20,20,false);
    demo.createAnimate(this.FireFishStopFire,"FireFishStopFire",20,34,30,false);
    demo.createAnimate(this.FireFishStop,"FireFishStop",20,27,30,true);

    this.FireFish.animate.onComplete.add(function () {      
        console.log('FireFish');
        this.FireFish.alpha = 0;
        this.FireFishStop.alpha = 1;
        this.FireFishStop.animate.play();
        this.FireFishStopFire.alpha = 1;
        this.FireFishStopFire.animate.play();

    },this);    
    this.WifiFish = game.add.sprite(0,0,'Fish002');
    this.WifiFish.alpha = 0;
    this.WifiFishStop = game.add.sprite(0,0,'Fish002');
    this.WifiFishStop.alpha = 0;         
    
    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.WifiFish,"WifiFish",0,20,20,false);
    demo.createAnimate(this.WifiFishStop,"WifiFishStop",20,35,30,true);
    this.WifiFish.animate.onComplete.add(function () {      
        this.WifiFish.alpha = 0;
        this.WifiFishStop.alpha = 1;
        this.WifiFishStop.animate.play();
    },this);
    this.MedicineFish = game.add.sprite(0,0,'Fish002');
    this.MedicineFish.alpha = 0;
    this.MedicineFishStop = game.add.sprite(0,0,'Fish002');
    this.MedicineFishStop.alpha = 0;         
    
    //param: object, object string, start frame, end frame, frame rate 
    demo.createAnimate(this.MedicineFish,"MedicineFish",0,20,20,false);
    demo.createAnimate(this.MedicineFishStop,"MedicineFishStop",20,32,30,true);
    this.MedicineFish.animate.onComplete.add(function () {      
        this.MedicineFish.alpha = 0;
        this.MedicineFishStop.alpha = 1;
        this.MedicineFishStop.animate.play();
    },this); 
};

//Get Fish Animate-----------------------------------------------------
demo.FishingPage.GetOrangeFish = function(){
    demo.BackPack.push("OrangeFish");
    this.OrangeFish.animate.play();
    this.OrangeFish.alpha = 1;     


};

demo.FishingPage.GetFireFish = function(){
    demo.BackPack.push("FireFish");
        
    this.FireFish.animate.play();
    this.FireFish.alpha = 1;     
        

};

demo.FishingPage.GetElectricFish = function(){
    demo.BackPack.push("ElectricFish");
        
    this.ElectricFish.animate.play();
    this.ElectricFish.alpha = 1;     
        
 
};
demo.FishingPage.GetWifiFish = function(){
    demo.BackPack.push("WifiFish");
        
    this.WifiFish.animate.play();
    this.WifiFish.alpha = 1;     
        

};

demo.FishingPage.GetIceFish = function(){
    demo.BackPack.push("IceFish");
    this.LightBlueFish.animate.play();
    this.LightBlueFish.alpha = 1;     

};

demo.FishingPage.GetMedicineFish = function(){
    demo.BackPack.push("MedicineFish");
            
    this.MedicineFish.animate.play();
    this.MedicineFish.alpha = 1;     
        

};
demo.FishingPage.GetGlowBlueFish = function(){
    demo.BackPack.push("GlowBlueFish");
            
    this.GlowBlueFish.animate.play();
    this.GlowBlueFish.alpha = 1;     
        

};