
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mongo = require('mongodb').MongoClient;
var monk = require('monk');
var db = monk('localhost:27017/foxGame');


db.then(() => {
  console.log('Connected correctly to server')
})

const users = db.get('users');
/*
users.insert([{name: '0000'}, {password:'0000'}])
  .then((docs) => {
    // docs contains the documents inserted with added **_id** fields
    // Inserted 2 documents into the document collection
  }).catch((err) => {
    // An error happened while inserting
  }).then(() => db.close())
*/
//users.remove([{name: 0000}, {password:0000}]);


// =======


app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static(__dirname +'/public'));



var SOCKET_LIST = [];
var User = [];
var Msg = [];
var line = 0;

io.on('connection',function(socket){
    socket.on('newplayer',function(username){
        console.log(username+':is online');
        socket.player = {
            id:Math.random(),
            name:username,
        };
        SOCKET_LIST.push(socket.player.id);
        socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('otherplayers',socket.player);

    });
    socket.on('sendMsg',onSendMsg);
    socket.on('disconnect',function(){
        if(typeof socket.player != "undefined" ){
            console.log(socket.player.name+':is offline...')
            io.emit('remove',socket.player.id);
                
            var index = SOCKET_LIST.indexOf(socket.player.id);
            delete SOCKET_LIST[index];
        }

    });
});


function onSendMsg(username,message){
    console.log(username+':'+message);
    User.push(username);
    Msg.push(message);
    line++;
    io.emit('chatMessage',username,message);
}

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}




http.listen(4000);
console.log('server is running at port 4000');

