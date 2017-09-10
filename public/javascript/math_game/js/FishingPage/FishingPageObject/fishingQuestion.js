demo.FishingPage.question = {
    create:function(){
        for(var i = 0;i<=2;i++){
            AnswerPanel[i] = game.add.sprite( 1100+100*(i-1), 450,'Panel','AnswerPanel.png');
            AnswerPanel[i].scale.setTo(0.8,0.8); 
            AnswerPanel[i].anchor.setTo(0.5,0.5);
            AnswerPanel[i].alpha = 0; 

            AnswerPanelLight[i] = game.add.sprite( 1100+100*(i-1), 450,'Panel','AnswerPanelRightLight.png');
            AnswerPanelLight[i].anchor.setTo(0.5);
            AnswerPanelLight[i].alpha = 0;
        }

        //question number bond image------------------------------------------------------------------------------------------
        QuestionPanel = game.add.sprite( 0, 0,'Panel','QuestionPanel.png');
        QuestionPanel.alpha = 0;
        
        PanelStartFx001 = game.add.sprite(0,0,'Panel');
        PanelStartFx001.alpha = 0;
        PanelStartFx001Animation = PanelStartFx001.animations.add("PanelStartFx001",Phaser.Animation.generateFrameNames('PanelStartFx001_',0,15, '.png', 5), 10, true);
        
        PanelStartFx002 = game.add.sprite(0,0,'Panel');
        PanelStartFx002.alpha = 0;
        PanelStartFx002Animation = PanelStartFx002.animations.add("PanelStartFx002",Phaser.Animation.generateFrameNames('PanelStartFx002_',0,15, '.png', 5), 10, true);

        PanelStartFx003 = game.add.sprite(0,0,'Panel');
        PanelStartFx003.alpha = 0;
        PanelStartFx003Animation = PanelStartFx003.animations.add("PanelStartFx003",Phaser.Animation.generateFrameNames('PanelStartFx003_',0,15, '.png', 5), 10, true);

        PanelWrongFx001 = game.add.sprite(0,0,'Panel');
        PanelWrongFx001.alpha = 0;
        PanelWrongFx001Animation = PanelWrongFx001.animations.add("PanelWrongFx001",Phaser.Animation.generateFrameNames('PanelWrongFx001_',0,10, '.png', 5), 10, true);

        PanelWrongFx002 = game.add.sprite(0,0,'Panel');
        PanelWrongFx002.alpha = 0;
        PanelWrongFx002Animation = PanelWrongFx002.animations.add("PanelWrongFx002",Phaser.Animation.generateFrameNames('PanelWrongFx002_',0,10, '.png', 5), 10, true);

        PanelWrongFx003 = game.add.sprite(0,0,'Panel');
        PanelWrongFx003.alpha = 0;
        PanelWrongFx003Animation = PanelWrongFx003.animations.add("PanelWrongFx003",Phaser.Animation.generateFrameNames('PanelWrongFx003_',0,10, '.png', 5), 10, true);   
        
        //Num-----------------------------------------------------------------------------------------    
        var style = { font: "60px Arial", fill: "#5981A7", align: "center" };
        NumSum = game.add.text(centerX+295,centerY-229,'', style);
        NumSum.anchor.set(0.5);
        NumSum.alpha = 0;
        
        NumAdd1 = game.add.text(centerX+295-95,centerY-121,'', style);
        NumAdd1.anchor.set(0.5);    
        NumAdd1.alpha = 0;
        NumAdd2 = game.add.text(centerX+295+95,centerY-121,'', style);
        NumAdd2.anchor.set(0.5); 
        NumAdd2.alpha = 0;
        var style = { font: "40px Arial", fill: "#ffffff", align: "center" };
        for( let i = 0;i<3;i++){
            FishingAnswerNum[i] = game.add.text(1000+100*i, 452,'', style);
            FishingAnswerNum[i].anchor.set(0.5);
            FishingAnswerNum[i].alpha = 0;
            
        }
        
    },
    start:function(){
        
        PanelStartFx001.alpha = 1;
        PanelStartFx002.alpha = 1;
        PanelStartFx003.alpha = 1;
        PanelStartFx001Animation = PanelStartFx001.animations.play("PanelStartFx001",30,false);
        PanelStartFx002Animation = PanelStartFx002.animations.play("PanelStartFx002",30,false);
        PanelStartFx003Animation = PanelStartFx003.animations.play("PanelStartFx003",30,false);
        PanelStartFx003Animation.onComplete.add(function () {	
            PanelStartFx001.alpha = 0;
            PanelStartFx002.alpha = 0;
            PanelStartFx003.alpha = 0;
        }, this);

        game.add.tween(NumSum).to({alpha:1},300,'Linear',true,300);
        game.add.tween(NumAdd1).to({alpha:1},300,'Linear',true,300);
        game.add.tween(NumAdd2).to({alpha:1},300,'Linear',true,300);
    
        game.add.tween(QuestionPanel).to({alpha:1},300,'Linear',true,300);
    
        for(let i =0;i<3;i++){
            game.add.tween(FishingAnswerNum[i]).to({alpha:1},300,'Linear',true,300);
        
        }
        this.setAnswerBtn();
        this.updateQuestion();
    },
    updateQuestion:function(){
        var ModeRand;
        if( FishingLevel == 13 ){
            ModeRand = Math.floor(Math.random()*2);    
        }else if( FishingLevel%2 == 1 ){
            ModeRand = 0;
        }else if( FishingLevel%2 == 0 ){
            ModeRand = 1;
        }
        
        var equation = createFishingEquation( ModeRand );
        //console.log(equation);

        if( ModeRand%2 == 0 ){
            NumSum.setText('?');
            NumAdd1.setText(equation[0]);
            NumAdd2.setText(equation[1]);
            minusmode = false;
            addmode = true;

        }   
        if( ModeRand%2 == 1 ){
            NumAdd1.setText(equation[0]);
            NumAdd2.setText('?');
            NumSum.setText(equation[2]);
            addmode = false;
            minusmode = true;          
        }

        this.sortAnswerNum(equation);    
    },
    sortAnswerNum:function(equation){
        var answerindex = 0;
        var answer = [];
        answer = this.createAnswerNum(equation);

        var AnswerRand = Math.floor(Math.random()*3);
        for(var i = 0;i<=2;i++){
      
            if( AnswerRand%3 == i ){

                FishingAnswerNum[i].setText(answer[2]);
                AnswerPanel[i].variable = true;
            
            }else{
                FishingAnswerNum[i].setText(answer[answerindex]);
                AnswerPanel[i].variable = false;
                answerindex++;
            }                       
        }
    },
    createAnswerNum:function(equation){
        var answer = [];

        if(addmode == true){
            while(answer[0] == answer[1] || answer[0] == equation[2] || answer[1] == equation[2]){
                answer[0] = Math.floor(Math.random()*10) + 1;
                answer[1] = Math.floor(Math.random()*10) + 1;
            }
            answer[2] = equation[2];
        }
        if(minusmode == true){
            while(answer[0] == answer[1] || answer[0] == equation[1] || answer[1] == equation[1]){
                answer[0] = Math.floor(Math.random()*10) + 1;
                answer[1] = Math.floor(Math.random()*10) + 1;
            }
            answer[2] = equation[1];
        }
        return answer;        
    },
    checkAnswer:function(AnswerPanel){
    
        if( AnswerPanel.variable == true ){
            demo.FishingPage.energyTransfer.rightFX();
            CorrectCount++;
            answercount++;
              
        }else{
            demo.FishingPage.energyTransfer.wrongFX();
            answercount++;
        }    
    },
    setAnswerBtn:function(){
        for(var i = 0;i<=2;i++){
            game.add.tween(AnswerPanel[i]).to({alpha:0.8},200,'Quad.easeInOut',true,100*i);
            AnswerPanel[i].inputEnabled = true;  
            AnswerPanel[i].events.onInputDown.add(this.checkAnswer);
        }    
    },
    cleanPanel:function(){
        for(var i = 0;i<=2;i++){
            game.add.tween(FishingAnswerNum[i]).to({alpha:0},500,'Quad.easeInOut',true);
            game.add.tween(AnswerPanel[i]).to({alpha:0},500,'Quad.easeInOut',true);
            AnswerPanel[i].inputEnabled = false; 
        }

        game.add.tween(NumSum).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(NumAdd1).to({alpha:0},500,'Quad.easeInOut',true);
        game.add.tween(NumAdd2).to({alpha:0},500,'Quad.easeInOut',true);

        game.add.tween(QuestionPanel).to({alpha:0},500,'Quad.easeInOut',true);        
    }
};

var FishingAnswerNum = [];
