
demo.FishingPage.GetFishAnimate = function(){
    
    if( FishingLevel == 13 ){
        this.GetFishRandom = Math.floor(Math.random()*30);
    }
    this.Fox.getFish();
    
    if( FishingLevel == 1 || FishingLevel == 2 ){
        
        demo.FishingPage.GetOrangeFish();
        
    }else if( FishingLevel == 3 || FishingLevel == 4 ){
        demo.FishingPage.GetFireFish();

    }else if( FishingLevel == 5 || FishingLevel == 6 ){
        demo.FishingPage.GetElectricFish();
        
    }else if( FishingLevel == 7 || FishingLevel == 8 ){
        demo.FishingPage.GetWifiFish();
            
    }else if( FishingLevel == 9 || FishingLevel == 10 ){
        demo.FishingPage.GetIceFish();
           
    }else if( FishingLevel == 11 || FishingLevel == 12 ){
        demo.FishingPage.GetMedicineFish();    

    }else if( FishingLevel == 13 ){
        if( this.GetFishRandom == 0 ){
            demo.FishingPage.GetGlowBlueFish();
        
        }else if( this.GetFishRandom >= 1 && this.GetFishRandom < 6 ){       
            demo.FishingPage.GetOrangeFish();
            
        }else if( this.GetFishRandom >= 6 && this.GetFishRandom < 10 ){
            demo.FishingPage.GetFireFish();     
        }else if( this.GetFishRandom >= 10 && this.GetFishRandom < 16 ){
            demo.FishingPage.GetElectricFish();         
        }else if( this.GetFishRandom >= 16 && this.GetFishRandom < 20 ){
            demo.FishingPage.GetWifiFish();          
        }else if( this.GetFishRandom >= 20 && this.GetFishRandom < 26 ){
            demo.FishingPage.GetIceFish();        
        }else if( this.GetFishRandom >= 26 && this.GetFishRandom < 30 ){
            demo.FishingPage.GetMedicineFish();
        }
    }
};


demo.FishingPage.cleanStopFish = function(){
    this.FishBox.clean();
    
    this.OrangeFishStop.animate.stop();
    this.OrangeFishStop.alpha = 0;
    
    this.ElectricFishStop.animate.stop();
    this.ElectricFishStop.alpha = 0;
    
    this.WifiFishStop.animate.stop();
    this.WifiFishStop.alpha = 0;    
    
    this.LightBlueFishStop.animate.stop();
    this.LightBlueFishStop.alpha = 0;   
    
    this.MedicineFishStop.animate.stop();
    this.MedicineFishStop.alpha = 0;       

    this.GlowBlueFishStop.animate.stop();
    this.GlowBlueFishStop.alpha = 0; 
    
    this.FireFishStop.animate.stop();
    this.FireFishStop.alpha = 0;
    this.FireFishStopFire.animate.stop();
    this.FireFishStopFire.alpha = 0;    
    
    this.Fox.cleanGetFish();

};
