demo.CatchBugPage.panel = {
    create:function(){
        QuestionPanel = game.add.sprite(0,0,'Panel','QuestionPanel.png');
        for(let i = 0;i<5;i++){
            AnswerPanel[i] = game.add.sprite(centerX+90*i-445,centerY+140,'Panel',"AnswerPanel.png");
            AnswerPanel[i].anchor.setTo(0.5);
          
            AnswerPanel[i].events.onInputDown.add(this.checkAnswer, this);
            AnswerPanel[i].variable = i+1;
            var style = { font: "40px Arial", fill: "#3a42a5", align: "center" };
            answerNum[i] = game.add.text(centerX+90*i-445,centerY+140+2,'', style);
            answerNum[i].anchor.setTo(0.5);
            answerNum[i].alpha = 1;
        }
        var style = { font: "60px Arial", fill: "#74e4f3", align: "center" }; 
        NumSum = game.add.text(centerX-265,centerY-118,'', style);
        NumSum.anchor.set(0.5);
        NumSum.alpha = 1;
        
        NumAdd1 = game.add.text(centerX-265 - 110,centerY-5,'', style);
        NumAdd1.anchor.set(0.5);    
        NumAdd1.alpha = 1;
        
        NumAdd2 = game.add.text(centerX-265 + 105,centerY-5,'', style);
        NumAdd2.anchor.set(0.5);          
        NumAdd2.alpha = 1;
    },
    checkAnswer:function(AnswerPanel){

        if( AnswerPanel.variable == demo.CatchBugPage.correctAnswer - 10 ){
            demo.CatchBugPage.fox.catch();    
        }else{
            demo.CatchBugPage.fox.fail();            
        }
            
    },
    setAnswerPanelEnable:function(bool){
        for( let i = 0;i<5;i++ ){
            AnswerPanel[i].inputEnabled = bool;
            AnswerPanel[i].input.useHandCursor = bool;
        }
    }
};



