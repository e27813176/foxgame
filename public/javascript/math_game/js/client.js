
var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(username){
    Client.socket.emit('newplayer',username);
};
Client.chatroom = {
    sendMessage:function(username,message){
       Client.socket.emit('sendMsg',username,message);
    },
};  
Client.socket.on('chatMessage',function(username,message){
    demo.HomeMenu.chatroom.acceptMessage(username,message);
});
/*
Client.startNewGame = function(){
    Client.socket.emit('askToStart');
    //console.log('ask to start');
};
Client.checkAnswerTutorial = function(MyPlayerID,mode){
    Client.socket.emit('checkAnswerTutorial',MyPlayerID,mode);
};
Client.TutorialCheck = function(MyPlayerID){
    Client.socket.emit('TutorialCheck',MyPlayerID);
};
Client.TutorialFinish = function(){
    Client.socket.emit('TutorialFinish');
};
Client.Prepare = function(){
    Client.socket.emit('Prepare');
};

Client.StartFishing = function(){
    console.log('start');
    Client.socket.emit('StartFishing');
    Client.socket.emit('createNewQuestion');
    
};
Client.AnswerCorrect = function(data){
    Client.socket.emit('answerCorrect',data);    
};
Client.AnswerWrong = function(MyPlayerID){
    Client.socket.emit('answerWrong',MyPlayerID);
};
Client.NextQuestion = function(){
    Client.socket.emit('createNewQuestion');
}; 

Client.FinishFishing = function(PlayerID){
    Client.socket.emit('FinishFishing',PlayerID);
};


Client.socket.on('myID',function(data){
    Game.GetMyID(data.id,data.x,data.y);
});
Client.socket.on('startTutorial',function(data,answer,addmode){
    Game.startTutorial(data,answer,addmode);
    Game.EnableAnswerPanel();
});
Client.socket.on('StartFishing',function(){
    Game.StartFishing();
    
});


Client.socket.on('EnablePanel',function(){
    //Game.EnableAnswerPanel();
});

Client.socket.on('LockPanel',function(){
    //Game.LockAnswerPanel();
});
*/
Client.socket.on('otherplayers',function(data){
    demo.addNewPlayer(data.name,data.id);
    //demo.HomeMenu.chatroom.addUser();
});

Client.socket.on('allplayers',function(data){
    
    for(var i = 0; i < data.length; i++){
        demo.addNewPlayer(data[i].name,data[i].id);
    }
    
    //demo.addNewPlayer(data.name);

    Client.socket.on('checkAnswerTutorial',function(MyPlayerID,mode){
        CorrectTutorial(MyPlayerID,mode);
    });
    Client.socket.on('NextTutorial',function(){
        tutorialMinus();
    });
    Client.socket.on('Prepare',function(){
        Prepare();
    });
    Client.socket.on('FinishTutorial',function(){
        FinishTutorial();
    
    });
    Client.socket.on('answerCorrect',function(data,addmode){
        Game.CorrectCheck(data,addmode); 
    });
    Client.socket.on('answerWrong',function(ID){
        Game.WrongCheck(ID); 
    });
    Client.socket.on('newQuestion',function(equation,answer,addmode){
        createQuestion(equation,answer,addmode);
    });
    Client.socket.on('FinishGame',function(PlayerID,addmode){
        Game.FinishGame(PlayerID,addmode); 
    });

    Client.socket.on('remove',function(id){
        demo.removePlayer(id);
    });
});


