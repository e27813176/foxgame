demo.userAccount = {};

demo.Login = function() {};
demo.Login.prototype = {
    preload: function() {
        //game.load.atlas('LoginPage', 'javascript/math_game/assets/LoginPage/LoginPage.png', 'javascript/math_game/assets/LoginPage/LoginPage.json'); 
        game.load.image('FoxIcon','javascript/math_game/assets/LoginPage/FoxIcon.png');
        game.load.audio('BtnOver', 'javascript/math_game/assets/audio/BtnOver.mp3');
        game.load.audio('StartBtnDown', 'javascript/math_game/assets/audio/StartBtnDown.mp3');
    },
    create: function() {
        //define backgroung
        game.stage.backgroundColor = "#3d3660";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.plugin(PhaserInput.Plugin);
        demo.Login.LogInto.create();
        demo.Login.createAccount.create();
        
        StartBtnDown = game.add.audio('StartBtnDown');
        demo.Login.black.create();
    },     
    update: function() {}    
}

demo.Login.LogInto = {
    create:function(){
        var style = { font: "bold 40px Arial", fill: "#ffffff", align: "center" }; 
        this.foxIcon = game.add.sprite(520,250,'FoxIcon');
        this.title = game.add.text(game.world.centerX,game.world.centerY-100,'Log Into FoxGame', style)
        this.title.anchor.set(0.5);

        this.username = game.add.inputField(game.world.centerX-180,game.world.centerY-40, {
            font: '18px Arial',
            fill: '#ffffff',
            fillAlpha:0,
            fontWeight: 'bold',
            font: '25px Arial',
            width: 360,
            padding: 8,
            borderWidth: 1,
            borderColor: '#ffffff',
            borderRadius: 3,
            placeHolder: 'Username',
            cursorColor: '#ffffff'
            //type: PhaserInput.InputType.password
        });

        this.password = game.add.inputField(game.world.centerX-180,game.world.centerY+40, {
            font: '18px Arial',
            fill: '#ffffff',
            fillAlpha:0,
            fontWeight: 'bold',
            font: '25px Arial',
            width: 360,
            padding: 8,
            borderWidth: 1,
            borderColor: '#ffffff',
            borderRadius: 3,
            placeHolder: 'Password',
            cursorColor: '#ffffff',
            type: PhaserInput.InputType.password
        });
        
        
        this.bar = game.add.graphics();
        this.bar.beginFill(0xffffff);
        this.bar.drawRect(game.world.centerX-180,game.world.centerY,360,3);
        this.bar.drawRect(game.world.centerX-180,game.world.centerY+80,360,3);
        

        this.LoginBtn = game.add.graphics();
        this.LoginBtn.beginFill(0x494a77);
        this.LoginBtn.drawRect(game.world.centerX-180,game.world.centerY+120,360,50);
        this.LoginBtn.events.onInputDown.add(this.Login,this);
        
        style = { font: "bold 25px Arial", fill: "#aaaaaa", align: "center" }; 
        this.LoginBtnText = game.add.text(game.world.centerX,game.world.centerY+145,'Log In', style)
        this.LoginBtnText.anchor.setTo(0.5);
        
        //style = { font: "bold 20px Arial", fill: "#aaaaaa", align: "center" }; 
        this.createBtn = game.add.text(game.world.centerX,game.world.centerY+230,'Create an Account', style)
        this.createBtn.anchor.setTo(0.5);  
        this.createBtn.events.onInputDown.add(this.goToCreateAccount,this);
        this.setBtnEnable(true);

        style = { font: "20px Arial", fill: "#ffbfcf", align: "center" }; 
        this.checkWord = game.add.text(game.world.centerX,game.world.centerY+280,'', style)          
        this.checkWord.anchor.setTo(0.5);        
        
        this.mask = {
            
        
            rect:game.add.graphics()
                .beginFill(0xffffff)
                .drawRect(game.world.centerX-300,0,600,1000),
        }
        for( let item in demo.Login.LogInto ){
            //console.log(item);
            demo.Login.LogInto[item].mask = this.mask.rect;
        }  

        //ScoreBar.mask = ScoreBarMask;
        //ScoreBarRed.mask = ScoreBarMask;    
    },
    goToCreateAccount:function(){
        this.setBtnEnable(false);
        this.cleanUp();

        demo.Login.createAccount.showUp();
    },
    Login:function(){
        
        if( this.username.value == user.name && this.password.value == user.password && user.name !='' ){
            this.checkWord.alpha = 0;
            game.add.tween(this.checkWord).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,0);
            this.checkWord.setText('Login Success');        
            StartBtnDown.play();
            demo.Login.black.close();
            Client.askNewPlayer(user.name);
            
            
        }else{
            this.checkWord.alpha = 0;
            game.add.tween(this.checkWord).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,0);
            this.checkWord.setText('Please enter a valid username or password');
        }
    },
    showUp:function(){
        this.setBtnEnable(true);
        for( let item in demo.Login.LogInto ){

            game.add.tween(demo.Login.LogInto[item]).to({x:'+500',alpha:1},500,'Quad.easeInOut',true,0);
        } 
       
    },
    cleanUp:function(){
        this.username.value = '';
        this.password.value = '';
        this.checkWord.setText('');
        for( let item in demo.Login.LogInto ){
        
            game.add.tween(demo.Login.LogInto[item]).to({x:'-500',alpha:0},500,'Quad.easeInOut',true,0);
        }         
    },
    setBtnEnable:function(bool){
        this.LoginBtn.inputEnabled = bool;
        this.LoginBtn.input.useHandCursor = bool;
        this.createBtn.inputEnabled = bool;
        this.createBtn.input.useHandCursor = bool;        
    }

};

demo.Login.createAccount = {
    create:function(){

        
        var style = { font: "bold 40px Arial", fill: "#ffffff", align: "center" }; 
        this.title = game.add.text(game.world.centerX+500,game.world.centerY-180,'Create an Account', style)
        this.title.anchor.set(0.5);

        let inputProperty = {
            font: '18px Arial',
            fill: '#ffffff',
            fillAlpha:0,
            fontWeight: 'bold',
            font: '25px Arial',
            width: 360,
            padding: 8,
            borderWidth: 1,
            borderColor: '#ffffff',
            borderRadius: 3,
            placeHolder: 'Username',
            cursorColor: '#ffffff',
            type : PhaserInput.InputType.text,
        }
        let passwordProperty = {
            font: '18px Arial',
            fill: '#ffffff',
            fillAlpha:0,
            fontWeight: 'bold',
            font: '25px Arial',
            width: 360,
            padding: 8,
            borderWidth: 1,
            borderColor: '#ffffff',
            borderRadius: 3,

            cursorColor: '#ffffff',
            type : PhaserInput.InputType.password,
        }       
        this.username = game.add.inputField(game.world.centerX-180+500,game.world.centerY-120,inputProperty);

        passwordProperty.placeHolder = 'Password';
        
        this.password = game.add.inputField(game.world.centerX-180+500,game.world.centerY-40,passwordProperty);
        
        passwordProperty.placeHolder = 'Confirm Password';
        this.passwordConfirm = game.add.inputField(game.world.centerX-180+500,game.world.centerY+40,passwordProperty);
        
        this.bar = game.add.graphics();
        this.bar.beginFill(0xffffff);
        for(let i = 0;i<3;i++){
            this.bar.drawRect(game.world.centerX-180+500,game.world.centerY+80*i-80,360,3);
            
        }

        this.SignUpBtn = game.add.graphics();
        this.SignUpBtn.beginFill(0x494a77);
        this.SignUpBtn.drawRect(game.world.centerX-180+500,game.world.centerY+130,360,50);
        this.SignUpBtn.events.onInputDown.add(this.SignUpCheck,this);

        
        
        style = { font: "bold 25px Arial", fill: "#aaaaaa", align: "center" }; 
        this.SignUpText = game.add.text(game.world.centerX+500,game.world.centerY+155,'Sign Up', style)
        this.SignUpText.anchor.setTo(0.5);
        
        style = { font: "bold 20px Arial", fill: "#ffffff", align: "center" }; 
        this.LoginBtn = game.add.text(game.world.centerX+500,game.world.centerY+265,'Already have an account? Login', style)
        this.LoginBtn.anchor.setTo(0.5);
        this.LoginBtn.events.onInputDown.add(this.goToLogin,this);
        
        
        style = { font: "20px Arial", fill: "#ffbfcf", align: "center" }; 
        this.checkWord = game.add.text(game.world.centerX+500,game.world.centerY+220,'', style)          
        this.checkWord.anchor.setTo(0.5);        
        
        this.mask = {
            
        
            rect:game.add.graphics()
                .beginFill(0xffffff)
                .drawRect(game.world.centerX-300,0,600,1000),
        }
        for( let item in demo.Login.createAccount ){
            //console.log(item);
            demo.Login.createAccount[item].alpha = 0;
            demo.Login.createAccount[item].mask = this.mask.rect;
        }   
  
    },
    showUp:function(){
        this.setBtnEnable(true);
        for( let item in demo.Login.createAccount ){
            game.add.tween(demo.Login.createAccount[item]).to({x:'-500',alpha:1},500,'Quad.easeInOut',true,0);
        }         
    },
    cleanUp:function(){
        this.username.value = '';
        this.password.value = '';
        this.passwordConfirm.value = '';
        this.checkWord.setText('');
        this.setBtnEnable(false);
        for( let item in demo.Login.createAccount ){
            game.add.tween(demo.Login.createAccount[item]).to({x:'+500',alpha:0},500,'Quad.easeInOut',true,0);
        }         
    },
    
    SignUpCheck:function(){

        if( this.username.value =='' || this.password.value =='' || this.passwordConfirm.value ==''){
            
            this.checkWord.setText('Please Enter Username & Password');
            this.checkWord.alpha = 0;
            game.add.tween(this.checkWord).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,0);
                 
        }else{
            if( this.password.value == this.passwordConfirm.value){
                user.name = this.username.value;
                user.password = this.password.value;
                this.checkWord.setText('Sign Up Successful');
                this.checkWord.alpha = 0;
                game.add.tween(this.checkWord).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,0)
                    .onComplete.add(function(){
                    demo.Login.LogInto.showUp();
                    demo.Login.createAccount.cleanUp();          
                },this);
                
                
            }else{
                this.checkWord.setText('Check Password Again');
                this.checkWord.alpha = 0;
                game.add.tween(this.checkWord).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,0);

            }
                   
        }
        

      
        
    },
    setBtnEnable:function(bool){
        this.SignUpBtn.inputEnabled = bool;
        this.SignUpBtn.input.useHandCursor = bool;
        this.LoginBtn.inputEnabled = bool;
        this.LoginBtn.input.useHandCursor = bool;
    },
    goToLogin:function(){
        demo.Login.LogInto.showUp();
        demo.Login.createAccount.cleanUp();
    }
};

demo.Login.black = {
    create:function(){
        this.BG = game.add.graphics();
        this.BG.beginFill(0x000000);
        this.BG.drawRect(0,0,1600,1000);   
        this.BG.events.onInputDown.add(this.block,this);
        this.BG.inputEnabled = true;
        this.open();
    },
    open:function(){
        game.add.tween(this.BG).to({alpha:0},1000,'Quad.easeIn',true)
            .onComplete.add(function(){
            this.BG.scale.setTo(0);
        },this); 
    },
    close:function(){
        this.BG.scale.setTo(1);
        game.add.tween(this.BG).to({alpha:1},1000,'Quad.easeIn',true)
            .onComplete.add(function(){
            game.state.start('HomeMenu',true,false);   
        },this);         
    },
    block:function(){
        
    }
    
};