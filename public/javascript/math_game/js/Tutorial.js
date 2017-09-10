var AnswerNum = new Array();
var AnswerTutorialNumber;

demo.Tutorial = function() {};
demo.Tutorial.prototype = {
    init: function() {
        TutorialMode = 0;
    },    
    preload: function() {
       
        game.load.image('TutorialBG','javascript/math_game/assets/Tutorial/TutorialBG.jpg');
        //Panel-----------------------------------------------------------------------------------------------------------------------
        game.load.atlas('Panel', 'javascript/math_game/assets/Tutorial/Panel.png', 'javascript/math_game/assets/Tutorial/Panel.json');
        //audio-----------------------------------------------------------------------------------------------------------------------   
        game.load.audio('RightFX', 'javascript/math_game/assets/audio/rightFX.mp3');
        game.load.audio('WrongFX', 'javascript/math_game/assets/audio/wrongFX.mp3');
        game.load.audio('StartFX', 'javascript/math_game/assets/audio/startFX.mp3');
        game.load.audio('ClickFX', 'javascript/math_game/assets/audio/clickFX.mp3');
    },

    create: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                
        //sound----------------------------------------------------------------------------------------------------------------
        RightFX = game.add.audio('RightFX');
        WrongFX = game.add.audio('WrongFX');
        StartFX = game.add.audio('StartFX');
        ClickFX = game.add.audio('ClickFX');

        
        //BG--------------------------------------------------------------
        game.add.sprite(0,100,'TutorialBG');
        //Btn------------------------------------------------------------
        StartTutorialBtn = game.add.sprite(centerX+110,centerY,'Panel','StartPanel.png');
        StartTutorialBtn.anchor.setTo(0.5);
        StartTutorialBtn.events.onInputDown.add(StartTutorialBtnDown, this);
        StartTutorialBtn.events.onInputOver.add(StartTutorialBtnOver, this);
        StartTutorialBtn.events.onInputOut.add(StartTutorialBtnOut, this);
        StartTutorialBtn.inputEnabled = true;
        
        HomeTutorialBtn = game.add.sprite(centerX-90,centerY,'Panel','HomePanel.png');
        HomeTutorialBtn.anchor.setTo(0.5);
        HomeTutorialBtn.events.onInputDown.add(HomeTutorialBtnDown, this);
        HomeTutorialBtn.events.onInputOver.add(HomeTutorialBtnOver, this);
        HomeTutorialBtn.events.onInputOut.add(HomeTutorialBtnOut, this);
        HomeTutorialBtn.inputEnabled = true;

        BackTutorialBtn = game.add.sprite(centerX+250,centerY+100,'Panel','BackPanel.png');
        BackTutorialBtn.scale.setTo(0.5);
        BackTutorialBtn.anchor.setTo(0.5);
        BackTutorialBtn.events.onInputDown.add(BackTutorialBtnDown, this);
        BackTutorialBtn.events.onInputOver.add(BackTutorialBtnOver, this);
        BackTutorialBtn.events.onInputOut.add(BackTutorialBtnOut, this);
        BackTutorialBtn.alpha = 0;
        //BackTutorialBtn.inputEnabled = true;
        
        ContinueTutorialBtn = game.add.sprite(centerX+350,centerY+100,'Panel','ContinuePanel.png');
        ContinueTutorialBtn.scale.setTo(0.5);
        ContinueTutorialBtn.anchor.setTo(0.5);
        ContinueTutorialBtn.events.onInputDown.add(ContinueTutorialBtnDown, this);
        ContinueTutorialBtn.events.onInputOver.add(ContinueTutorialBtnOver, this);
        ContinueTutorialBtn.events.onInputOut.add(ContinueTutorialBtnOut, this);
        ContinueTutorialBtn.alpha = 0;
        //ContinueTutorialBtn.inputEnabled = true;        
        //Panel----------------------------------------------------------------------
        QuestionTutorialPanel = game.add.sprite(0,100,'Panel','QuestionPanel.png');
        QuestionTutorialPanel.alpha = 0;

      
        for(let i = 0;i<5;i++){
            AnswerPanel[i] = game.add.sprite(centerX-130-200+100*i,centerY+150,'Panel','AnswerPanel.png');
            AnswerPanel[i].anchor.setTo(0.5);
            AnswerPanel[i].alpha = 0;
            AnswerPanel[i].events.onInputDown.add(AnswerTutorialPanelDown, this);
            AnswerPanel[i].inputEnabled = false;
            AnswerPanel[i].variable = i+1; 
        }            
        AnswerPanelLight = game.add.sprite(0,0,'Panel','AnswerPanelLight.png');
        AnswerPanelLight.anchor.setTo(0.5);
        AnswerPanelLight.alpha = 1;
        AnswerPanelLightTween = game.add.tween(AnswerPanelLight).to({alpha:0.2},500,'Linear',true,0,false,true).loop(true);
        AnswerPanelLightTween.pause();
        
        AnswerPanelLight.alpha = 0;
    },
    update: function() {}
    
};
function HomeTutorialBtnDown(){
    game.state.start('BootLevelMap',true,true); 
}
function HomeTutorialBtnOver(){}
function HomeTutorialBtnOut(){}

function StartTutorialBtnDown(){
    game.add.tween(StartTutorialBtn).to({alpha:0},500,'Linear',true);
    game.add.tween(HomeTutorialBtn).to({alpha:0},500,'Linear',true);

    StartTutorialBtn.inputEnabled = false;
    HomeTutorialBtn.inputEnabled = false;
    
    QuestionTutorialPanelTween = game.add.tween(QuestionTutorialPanel).to({alpha:1},500,'Linear',true,1000);
    QuestionTutorialPanelTween.onComplete.add(function(){
        var style = { font: "60px Arial", fill: "#ffffff", align: "center" };      
        var equation = createEquation('Tutorial');
        console.log('TutorialMode:'+TutorialMode);
        
        if( TutorialMode == 0 ){
            AnswerTutorialNumber = equation[2];
       
            NumSum = game.add.text(centerX-140,centerY-115,'?', style);
            NumSum.anchor.set(0.5);
            NumTutorialSum = game.add.text(centerX-140,centerY-115,'?', style);
            NumTutorialSum.anchor.set(0.5);
            NumSum.alpha = 0;
            NumTutorialSum.alpha = 0;
    
            NumAdd1 = game.add.text(centerX-240,centerY-20,equation[0], style);
            NumAdd1.anchor.set(0.5);    
            NumTutorialAdd1 = game.add.text(centerX-240,centerY-20,equation[0], style);
            NumTutorialAdd1.anchor.set(0.5);
            NumAdd1.alpha = 0;
            NumTutorialAdd1.alpha = 0;

            NumAdd2 = game.add.text(centerX-40,centerY-20,equation[1], style);
            NumAdd2.anchor.set(0.5); 
            NumTutorialAdd2 = game.add.text(centerX-40,centerY-20,equation[1], style);
            NumTutorialAdd2.anchor.set(0.5);
            NumAdd2.alpha = 0;
            NumTutorialAdd2.alpha = 0;
        
            game.add.tween(NumTutorialAdd1).to({x:1000},1000,'Quad.easeOut',true,1000);
            game.add.tween(NumTutorialAdd2).to({x:1100},1000,'Quad.easeOut',true,1000);
            
        }
        if( TutorialMode == 1 ){
            AnswerTutorialNumber = equation[1];
       
            NumSum = game.add.text(centerX-140,centerY-115,equation[2], style);
            NumSum.anchor.set(0.5);
            NumTutorialSum = game.add.text(centerX-140,centerY-115,equation[2], style);
            NumTutorialSum.anchor.set(0.5);
            NumSum.alpha = 0;
            NumTutorialSum.alpha = 0;
    
            NumAdd1 = game.add.text(centerX-240,centerY-20,equation[0], style);
            NumAdd1.anchor.set(0.5);    
            NumTutorialAdd1 = game.add.text(centerX-240,centerY-20,equation[0], style);
            NumTutorialAdd1.anchor.set(0.5);
            NumAdd1.alpha = 0;
            NumTutorialAdd1.alpha = 0;

            NumAdd2 = game.add.text(centerX-40,centerY-20,'?', style);
            NumAdd2.anchor.set(0.5); 
            NumTutorialAdd2 = game.add.text(centerX-40,centerY-20,'?', style);
            NumTutorialAdd2.anchor.set(0.5);
            NumAdd2.alpha = 0;
            NumTutorialAdd2.alpha = 0;
        
            game.add.tween(NumTutorialSum).to({x:1000,y:'+95'},1000,'Quad.easeOut',true,1000);
            game.add.tween(NumTutorialAdd1).to({x:1100},1000,'Quad.easeOut',true,1000);
        
        }
        
        game.add.tween(NumSum).to({alpha:1},500,'Linear',true);
        game.add.tween(NumTutorialSum).to({alpha:1},500,'Linear',true);
        game.add.tween(NumAdd1).to({alpha:1},500,'Linear',true);
        game.add.tween(NumTutorialAdd1).to({alpha:1},500,'Linear',true);
        game.add.tween(NumAdd2).to({alpha:1},500,'Linear',true);
        game.add.tween(NumTutorialAdd2).to({alpha:1},500,'Linear',true);
        
        for(let i = 0;i<5;i++){
            AnswerNum[i] = game.add.text(centerX-136-200+100*i,centerY+148,i+1, style);
            AnswerNum[i].anchor.setTo(0.5);
            AnswerNum[i].alpha = 0;
            game.add.tween(AnswerNum[i]).to({alpha:1},500,'Linear',true);
            
            game.add.tween(AnswerPanel[i]).to({alpha:1},500,'Linear',true);        
           
        }
        
        Add = game.add.text(1050,centerY-20,'+', style);
        Add.anchor.set(0.5);    
        Add.alpha = 0;
        
        Minus = game.add.text(1050,centerY-25,'-', style);
        Minus.anchor.set(0.5);    
        Minus.alpha = 0;        
        
        Equal = game.add.text(1150,centerY-20,'=', style);
        Equal.anchor.set(0.5);    
        Equal.alpha = 0;
        if( TutorialMode == 0 ){
            game.add.tween(Add).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);        
            
        }else{
            game.add.tween(Minus).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);        
            
        }
        game.add.tween(Equal).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);        
        if( TutorialMode == 0 ){
            NumTutorialSumTween = game.add.tween(NumTutorialSum).to({x:1200,y:centerY-20},1000,'Quad.easeOut',true,3000);        
            NumTutorialSumTween.onComplete.add(function(){
                if( TutorialMode == 0 ){
                    AnswerPanelLight.x = centerX-130-200+100*( equation[2] - 1 );
                
                }else{
                    AnswerPanelLight.x = centerX-130-200+100*( equation[1] - 1 );
                
                }
                AnswerPanelLight.y = centerY+150;
                AnswerPanelLight.alpha = 1;
                AnswerPanelLightTween.resume();
                for(let i = 0;i<5;i++){
                    AnswerPanel[i].inputEnabled = true;
                    AnswerPanel[i].input.useHandCursor = true;
                
                }
            },this);

        }else{
            NumTutorialAdd2Tween = game.add.tween(NumTutorialAdd2).to({x:1200,y:centerY-20},1000,'Quad.easeOut',true,3000);        
            NumTutorialAdd2Tween.onComplete.add(function(){
                if( TutorialMode == 0 ){
                    AnswerPanelLight.x = centerX-130-200+100*( equation[2] - 1 );
                
                }else{
                    AnswerPanelLight.x = centerX-130-200+100*( equation[1] - 1 );
                
                }
                AnswerPanelLight.y = centerY+150;
                AnswerPanelLight.alpha = 1;
                AnswerPanelLightTween.resume();
                for(let i = 0;i<5;i++){
                    AnswerPanel[i].inputEnabled = true;
                    AnswerPanel[i].input.useHandCursor = true;
                
                }
            },this);

        }
    
    },this);
    
}
function StartTutorialBtnOver(){}
function StartTutorialBtnOut(){}

function AnswerTutorialPanelDown(AnswerPanel){
    
    if( AnswerPanel.variable == AnswerTutorialNumber ){
        CorrectTutorial();
    }else{
        WrongFX.play();
        
    }
    console.log(AnswerPanel.variable);
    //console.log(equation[2]);
}
function CorrectTutorial(){
    RightFX.play();
    for(let i = 0;i<5;i++){
        AnswerPanel[i].inputEnabled = false;            
    }
    AnswerPanelLightTween.pause();
    AnswerPanelLight.alpha = 0;
    Add.alpha = 0;
    Minus.alpha = 0;
    Equal.alpha = 0;
    NumTutorialAdd1.alpha = 0;
    NumTutorialAdd2.alpha = 0;
    NumTutorialSum.alpha = 0;
    var style = { font: "50px Arial", fill: "#ffffff", align: "center" };
    
    CorrectText = game.add.text(1070,centerY-20,'答對囉!!!', style);
    CorrectText.anchor.set(0.5);
    CorrectText.alpha = 0;
    game.add.tween(CorrectText).to({alpha:1},500,Phaser.Easing.Elastic.Out,true);   
    
    BackTutorialBtnTween = game.add.tween(BackTutorialBtn).to({alpha:1},500,'Linear',true,1000);
    game.add.tween(ContinueTutorialBtn).to({alpha:1},500,'Linear',true,1000);
    BackTutorialBtnTween.onComplete.add(function (){
        
        BackTutorialBtn.inputEnabled = true;
        BackTutorialBtn.input.useHandCursor = true;
        ContinueTutorialBtn.inputEnabled = true;
        ContinueTutorialBtn.input.useHandCursor = true;
        
    },this);
    
}
function BackTutorialBtnDown(){
    ContinueTutorialBtn.inputEnabled = false;
    BackTutorialBtn.inputEnabled = false;
    
    game.add.tween(ContinueTutorialBtn).to({alpha:0},500,'Linear',true);
    game.add.tween(BackTutorialBtn).to({alpha:0},500,'Linear',true);
    for(let i = 0;i<5;i++){
        game.add.tween(AnswerPanel[i]).to({alpha:0},500,'Linear',true);
        game.add.tween(AnswerNum[i]).to({alpha:0},500,'Linear',true);
        
                
    }
    game.add.tween(QuestionTutorialPanel).to({alpha:0},500,'Linear',true);
    game.add.tween(CorrectText).to({alpha:0},500,'Linear',true);
    game.add.tween(NumSum).to({alpha:0},500,'Linear',true);
    game.add.tween(NumAdd1).to({alpha:0},500,'Linear',true);
    game.add.tween(NumAdd2).to({alpha:0},500,'Linear',true);

    game.add.tween(StartTutorialBtn).to({alpha:1},500,'Linear',true,1000);
    TutorialBtnShowUpTween = game.add.tween(HomeTutorialBtn).to({alpha:1},500,'Linear',true,1000);
    TutorialBtnShowUpTween.onComplete.add(TutorialBtnShowUpTweenComplete,this);
}
function TutorialBtnShowUpTweenComplete(){
    HomeTutorialBtn.inputEnabled = true;
    StartTutorialBtn.inputEnabled = true;
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        AnswerNum[i].destroy();
        //AnswerNum[i].anchor.setTo(0.5);
        //AnswerNum[i].alpha = 0;
           
    }    
}
function BackTutorialBtnOver(){}
function BackTutorialBtnOut(){}

function ContinueTutorialBtnDown(){
    game.add.tween(BackTutorialBtn).to({alpha:0},500,'Linear',true);
    game.add.tween(ContinueTutorialBtn).to({alpha:0},500,'Linear',true);
    ContinueTutorialBtn.inputEnabled = false;
    BackTutorialBtn.inputEnabled = false; 
    
    NumSum.destroy();
    NumAdd1.destroy();
    NumAdd2.destroy();
    for(let i = 0;i<5;i++){
        AnswerNum[i].destroy();
           
    }        
    CorrectText.destroy();
    if( TutorialMode == 0 ){
        TutorialMode = 1;
    }
    else{
        TutorialMode = 0;
    }    
    StartTutorialBtnDown(); 
}
function ContinueTutorialBtnOver(){}
function ContinueTutorialBtnOut(){}

/*



function start_tutorial(){

    tween_button_tutorial_sheet = game.add.tween(button_start_sheet).to({alpha:0},500,'Linear',true);

    button_tutorial_sheet.inputEnabled = false;

    game.add.tween(fishingpage_center).to({alpha:0},500,'Linear',true);
    
    button_tutorial_sheet_tween = game.add.tween(button_tutorial_sheet).to({alpha:0},500,'Linear',true);
    button_tutorial_sheet_tween.onComplete.add(completed_button_tutorial_sheet_tween, this);
    button_start_sheet.inputEnabled = false;

}
 
var finger_pointer_tween,
    mark_tutorial_tween,
    get_fish_tutorial_tween,
    mark_tutorial_show_up_tween,
    mark_text_tween;
/*
function completed_button_tutorial_sheet(){
    alertFX.play();
    mark_tutorial_show_up_tween = game.add.tween(mark_tutorial.scale).to({x:1,y:1},200,Phaser.Easing.Elastic.Out,true);
    mark_tutorial_show_up_tween.onComplete.add(completed_mark_tutorial_show_up_tween, this);
    
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true); 
}
function completed_mark_tutorial_show_up_tween(){
    mark_tutorial_tween = game.add.tween(mark_tutorial.scale).to({x:'-0.1',y:'-0.1'},400,'Quad.easeInOut',true,0,false,true).loop(true); 
    get_fish_tutorial_tween = game.add.tween(get_fish_tutorial).to({alpha:'-0.2'},400,'Quad.easeInOut',true,0,false,true).loop(true);
}
*/
/*
function completed_button_tutorial_sheet_tween(){

    
    game.add.tween(scorebar).to({alpha:1},300,'Quad.easeInOut',true);  
    game.add.tween(scorebarBG).to({alpha:1},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_body_Glass).to({alpha:1},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_top).to({alpha:1},300,'Quad.easeInOut',true); 
    scorebar_tween.resume();
    
    question_pannel1_create_fx.alpha = 1;
    question_pannel1_create_fx_animation = question_pannel1_create_fx.animations.play("question_pannel1_create_fx",20,false);
    question_pannel2_create_fx.alpha = 1;
    question_pannel2_create_fx_animation = question_pannel2_create_fx.animations.play("question_pannel2_create_fx",20,false);
    question_pannel3_create_fx.alpha = 1;
    question_pannel3_create_fx_animation = question_pannel3_create_fx.animations.play("question_pannel3_create_fx",20,false);    
    
    tutorial_q1();
} 

var tutorial_number_4_tween;

function tutorial_q1(){
    tutorial_number_2.x = questionpositionX-150;    
    tutorial_number_2.y = questionpositionY;    
    tutorial_number_4.x = questionpositionX+150;
    tutorial_number_4.y = questionpositionY;    
    
 
    question_green_pannel.animations.play("question_green_pannel_dyn",10,true);
    question_blue_pannel1.animations.play("question_blue_pannel_dyn1",10,true);
    question_blue_pannel2.animations.play("question_blue_pannel_dyn2",10,true);
    game.add.tween(question_green_pannel).to({alpha:1},500,'Linear',true,300);
    game.add.tween(question_blue_pannel1).to({alpha:1},500,'Linear',true,300);
    game.add.tween(question_blue_pannel2).to({alpha:1},500,'Linear',true,300);
    game.add.tween(bonds).to({alpha:1},300,'Linear',true,800);

    show_question_text(-1,0);
    show_question_text(4,1);
    show_question_text(2,2);  
    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel_tutorial[i]).to({alpha:0.8},500,'Linear',true,100*i);

    }

    show_number(3,0);
    show_number(4,1);
    show_number(6,2);
    
    game.add.tween(tutorial_number_2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1000);
    game.add.tween(plus_tutorial).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1500);
    tutorial_number_4_tween = game.add.tween(tutorial_number_4).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    tutorial_number_4_tween.onComplete.add(completed_tutorial_number_4_tween, this);
}

var equal_mark_tutorial_tween;

function completed_tutorial_number_4_tween(){
    game.add.tween(tutorial_number_2).to({x:'-400'},1500,'Quad.easeInOut',true,100);
    game.add.tween(tutorial_number_2.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);

    
    game.add.tween(plus_tutorial).to({x:'-500'},1500,'Quad.easeInOut',true,100);
    game.add.tween(plus_tutorial.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);


    game.add.tween(tutorial_number_4).to({x:'-600'},1500,'Quad.easeInOut',true,100);
    game.add.tween(tutorial_number_4.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,100);

    
    game.add.tween(Qmark_tutorial).to({alpha:1},500,'Quad.easeInOut',true,1600);
    
    equal_mark_tutorial_tween = game.add.tween(equal_mark_tutorial).to({alpha:1},1000,'Quad.easeInOut',true,2200);
    game.add.tween(equal_mark_tutorial.scale).to({x:0.5,y:0.5},1000,'Quad.easeInOut',true,2200);
    
    game.add.tween(Qmark_tutorial).to({x:'-330',y:'+150'},1000,'Quad.easeInOut',true,2200);
    game.add.tween(Qmark_tutorial.scale).to({x:0.5,y:0.5},500,'Quad.easeInOut',true,2200);
    equal_mark_tutorial_tween.onComplete.add(completed_equal_mark_tutorial_tween, this);
}

var add_mode_text2_tween;

function completed_equal_mark_tutorial_tween(){
    add_mode_text2_tween = game.add.tween(add_mode_text2).to({alpha:1},500,'Linear',true,500);
    add_mode_text2_tween.onComplete.add(completed_add_mode_text2, this);
    tutorial_frame_sheet.alpha = 1;
    tutorial_frame_sheet.animations.play("tutorial_frame_sheet_dyn",10,false);
}

var finger_pointer2_tween;

function completed_add_mode_text2(){
    finger_pointer.x = questionpositionX+150;
    finger_pointer.y = buttonpositionY+50
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);  
    answerpannel_tutorial[2].events.onInputDown.add(correct_answer_tutorial);
    answerpannel_tutorial[2].inputEnabled = true;
}

function correct_answer_tutorial(){
    
    energy_transfer1_tutorial();
    game.add.tween(tutorial_frame_sheet).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial_number_2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(plus_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial_number_4).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(Qmark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(add_mode_text2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(equal_mark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    
    finger_pointer.alpha = 0;
    finger_pointer_tween.pause();
     
    answerpannel_tutorial[2].inputEnabled = false;
    anwser_pannel_light[2].alpha = correctFX;
    game.add.tween(anwser_pannel_light[2]).to({alpha:0},500,'Quad.easeOut',true);
    
    green_FX_sheet.animations.play("green_FX",20,false);
    green_FX_sheet.alpha = 1;
    rightFX.play();

}

var tutorial2_number_2_tween;

function tutorial_q2(){

    show_question_text(9,0);
    show_question_text(-1,1);
    show_question_text(2,2);  
    answerpannel_tutorial[0].inputEnabled = true;  

    show_number(7,0);
    show_number(5,1);
    show_number(2,2);
    
    game.add.tween(tutorial2_number_9).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1000);
    tutorial2_number_2_tween = game.add.tween(tutorial2_number_2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,1500);
    tutorial2_number_2_tween.onComplete.add(completed_tutorial2_number_2_tween, this);    
}

var Qmark_tutorial2_tween;


function completed_tutorial2_number_2_tween(){
    game.add.tween(tutorial2_number_9).to({x:'-550',y:'+150'},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_9.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_2).to({x:'-300'},1500,'Quad.easeInOut',true,500);
    game.add.tween(tutorial2_number_2.scale).to({x:0.5,y:0.5},1500,'Quad.easeInOut',true,500);
    
    game.add.tween(minus_tutorial).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    Qmark_tutorial2_tween = game.add.tween(Qmark_tutorial2).to({alpha:1},500,Phaser.Easing.Elastic.Out,true,2000);
    Qmark_tutorial2_tween.onComplete.add(completed_Qmark_tutorial2_tween, this);    


}

var minus_mode_text2_tween;
var equal_mark_tutorial2_tween;

function completed_Qmark_tutorial2_tween(){

    game.add.tween(Qmark_tutorial2).to({x:'-480'},1000,'Linear',true,500);
    game.add.tween(Qmark_tutorial2.scale).to({x:0.5,y:0.5},1000,'Linear',true,500);
    
    equal_mark_tutorial2_tween = game.add.tween(equal_mark_tutorial).to({alpha:1},1000,'Linear',true,500);
    equal_mark_tutorial2_tween.onComplete.add(completed_equal_mark_tutorial2_tween, this);  
    
    minus_mode_text2_tween = game.add.tween(minus_mode_text2).to({alpha:1},500,'Linear',true,1500);
    minus_mode_text2_tween.onComplete.add(completed_minus_mode_text2, this);

}
function completed_equal_mark_tutorial2_tween(){
    tutorial_frame_sheet.alpha = 1;
    tutorial_frame_sheet.animations.play("tutorial_frame_sheet_dyn",10,false);
}
function completed_minus_mode_text2(){

    answerpannel_tutorial[0].events.onInputDown.add(correct_answer_tutorial2);
    answerpannel_tutorial[0].inputEnabled = true;
    finger_pointer.x = questionpositionX-150;
    finger_pointer.alpha = 1;
    finger_pointer_tween = game.add.tween(finger_pointer).to({y:'+20'},500,'Linear',true,0,false,false).loop(true);
}



function correct_answer_tutorial2(){
    energy_transfer2_tutorial();
    game.add.tween(tutorial_frame_sheet).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial2_number_9).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(tutorial2_number_2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(minus_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(Qmark_tutorial2).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(equal_mark_tutorial).to({alpha:0},500,'Quad.easeInOut',true);
    game.add.tween(minus_mode_text2).to({alpha:0},500,'Quad.easeInOut',true);

    finger_pointer.alpha = 0;
    finger_pointer_tween.stop();
    answerpannel_tutorial[0].inputEnabled = false;
    
    anwser_pannel_light[0].alpha = correctFX;
    game.add.tween(anwser_pannel_light[0]).to({alpha:0},500,'Quad.easeOut',true);
    
    blue_FX_sheet.animations.play("blue_FX",20,false);
    blue_FX_sheet.alpha = 1;
    rightFX.play();
}

function completed_start_game_text(){
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:0.2},500,'Linear',true,0,false,false).loop(true);
    start_game_text.events.onInputDown.add(finish_tutorial);
    start_game_text.inputEnabled = true;    
}

function finish_tutorial(){
    show_up_start_game_text  = false;
    start_game_text.inputEnabled = false;
    start_game_text_tween.stop();
    start_game_text_tween = game.add.tween(start_game_text).to({alpha:0},500,'Linear',true);
    start_game_text_tween.onComplete.add(completed_start_game_text_tween, this);
    clean_pannel();

    game.add.tween(scorebar).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebarBG).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_body_Glass).to({alpha:0},300,'Quad.easeInOut',true);  
    game.add.tween(scorebar_top).to({alpha:0},300,'Quad.easeInOut',true); 
    scorebar_tween.pause();
    
    for(var i = 0;i<=2;i++){
        game.add.tween(answerpannel_tutorial[i]).to({alpha:0},500,'Quad.easeInOut',true);
    }

}

function completed_start_game_text_tween(){
    game.add.tween(button_start_sheet).to({alpha:1},500,'Linear',true);
    button_tutorial_sheet.inputEnabled = true;
    game.add.tween(button_tutorial_sheet).to({alpha:1},500,'Linear',true);
    button_start_sheet.inputEnabled = true;
}
*/
