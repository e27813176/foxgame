demo.CatchBugPage.tutorial = {
    create:function(){
        this.blackBG = game.add.graphics();
        this.blackBG.beginFill(0x000000);
        this.blackBG.drawRect(0,0,1600,800);
        this.blackBG.alpha = 0;
        this.blackBG.events.onInputDown.add(this.block, this);
        this.blackBG.inputEnabled = true;
        
        TutorialText1 = game.add.sprite(0,0,'TutorialText','TutorialText1.png');
        TutorialText1.alpha = 0;
        TutorialText2 = game.add.sprite(0,0,'TutorialText','TutorialText2.png');
        TutorialText2.alpha = 0;
        TutorialText3 = game.add.sprite(0,0,'TutorialText','TutorialText3.png');
        TutorialText3.alpha = 0;
        StartText = game.add.sprite(centerX,centerY,'TutorialText','StartText.png');
        StartText.anchor.setTo(0.5);
        StartText.alpha = 0;
        
        
        this.askBoard = game.add.sprite(0,0,'TutorialText','TutorialAsk.png');
        this.askBoard.alpha = 0;              
        
        this.NoBtn = game.add.sprite(922,404,'TutorialText','TutorialBtn.png');
        this.NoBtn.alpha = 0;
        this.NoBtn.events.onInputDown.add(this.skip, this);

        this.YesBtn = game.add.sprite(867,404,'TutorialText','TutorialBtn.png');
        this.YesBtn.alpha = 0;
        this.YesBtn.events.onInputDown.add(this.start, this);
        
        CircleWave = game.add.sprite(0,0,'TutorialText');
        CircleWave.Animate = CircleWave.animations.add("CircleWave",Phaser.Animation.generateFrameNames('CircleWave_',0,28,'.png',5),30,true);
        CircleWave.alpha = 0; 
    },
    askToStart:function(){
        game.add.tween(this.blackBG).to({alpha :0.5},800,'Quad.easeOut',true);
        game.add.tween(this.askBoard).to({alpha:1},800,'Quad.easeOut',true);
        this.NoBtn.inputEnabled = true;        
        this.NoBtn.input.useHandCursor = true;
        this.YesBtn.inputEnabled = true;        
        this.YesBtn.input.useHandCursor = true;        
    },
    start:function(){
        demo.CatchBugPage.flyingBug.createDelay();
        this.NoBtn.inputEnabled = false;
        this.YesBtn.inputEnabled = false;
        game.add.tween(this.blackBG).to({alpha :0},800,'Quad.easeOut',true);
        game.add.tween(this.askBoard).to({alpha:0},800,'Quad.easeOut',true);
    
        demo.CatchBugPage.tutorialMode = true;
        for(let i = 0;i<5;i++){
            AnswerPanel[i].inputEnabled = false;
        }       
        TutorialText2ShowUp = game.add.tween(TutorialText2).to({alpha:1},300,'Quad.easeOut',true,1000);
        TutorialText2ShowUp.onComplete.add(function(){
            this.blackBG.scale.setTo(0);
            for(let i = 0;i<5;i++){
                AnswerPanel[i].inputEnabled = true;
            }      
            //t = 100;     
        },this);
    },
    answerCorrect:function(){
        demo.CatchBugPage.tutorialMode = false;
        demo.CatchBugPage.flyingBug.stop();
        TutorialText3ShowUp = game.add.tween(TutorialText3).to({alpha:1},500,Phaser.Easing.Elastic.Out,true);
        TutorialText3ShowUp.onComplete.add(function(){
            TutorialText3FadeOut = game.add.tween(TutorialText3).to({alpha:0},1000,'Quad.easeIn',true,2000);
            game.add.tween(TutorialText2).to({alpha:0},1000,'Quad.easeIn',true,2000);
            game.add.tween(TutorialText1).to({alpha:0},1000,'Quad.easeIn',true,2000);
            TutorialText3FadeOut.onComplete.add(function(){
                demo.CatchBugPage.task.showTask();    
            },this);
        },this);
        
    },
    skip:function(){
        this.NoBtn.inputEnabled = false;
        this.YesBtn.inputEnabled = false;
        this.blackBG.Tween = game.add.tween(this.blackBG).to({alpha :0},800,'Quad.easeOut',true);
        game.add.tween(this.askBoard).to({alpha:0},800,'Quad.easeOut',true);
        this.blackBG.Tween.onComplete.add(function(){
            this.blackBG.scale.setTo(0);
            demo.CatchBugPage.task.showTask();
        },this);
              
    },
    block:function(){
        
    },
};

