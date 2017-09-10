var user = {
    name:'111',
    password:'111',
    level:1
};

demo.user = {
    create:function(){
        this.posX = 100;
        this.posY = 100;
        var style = { font: "bold 20px Arial", fill: "#f6ebab", align: "center" }; 
        this.panel = game.add.image(this.posX,this.posY,'UserPanel');
        this.name = game.add.text(this.posX+150,this.posY+40,user.name, style);
        style.font = 'bold 25px Arial';
        this.level = game.add.text(this.posX+17,this.posY+89,user.level, style);


    },

}

demo.playerList = [];
demo.usernameList = [];
demo.addNewPlayer = function(username,id){
    //console.log(username);
    demo.playerList.push(id);
    demo.usernameList[id] = username;
};

demo.removePlayer = function(id){
    var index = demo.playerList.indexOf(id);
    demo.HomeMenu.chatroom.userOffline(id);

    delete demo.playerList[index];
    delete demo.usernameList[id];
    //console.log(demo.usernameList);
};