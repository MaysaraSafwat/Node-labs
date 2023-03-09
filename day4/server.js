const express = require("express");
const path = require("path");
const http = require("http")
const socketio = require("socket.io")
const app = express();
var PORT = 8002;
const formateMsg = require("./utils/format")
const {join , findUser, userLeaves, getUsers} = require("./utils/users")

let CHAT_NAME = "GVChat"
app.use(express.static(path.join(__dirname, "client")))
let server = http.createServer(app);
let io = socketio(server)

io.on("connection", socket =>{
    socket.on("joinedChat", username =>{
        let user = join(socket.id , username.username)
        socket.emit("message", formateMsg(CHAT_NAME, "Welcome to the Grishavere"));  
        socket.broadcast.emit("message", formateMsg(CHAT_NAME, `${username.username} has Joined the Chat`))
        
        io.emit("chatusers", {
            users : getUsers()
        } )
    })
   //socket.emit("message", formateMsg(CHAT_NAME, "Welcome to the Grishavere"));
   //socket.broadcast.emit("message", formateMsg(CHAT_NAME, "User has Joined the Chat"))
   socket.on("disconnect", ()=>{
    let user = userLeaves(socket.id)
    if(user){
        io.emit("message",formateMsg(CHAT_NAME, `${user.username} has left the Chat`))
        io.emit("chatusers", {
            users : getUsers()
        })
    }
    //io.emit("message",formateMsg(CHAT_NAME, "User has left the Chat"))
   })

   //get chst msg
   socket.on("chatMsg",msg=>{
    let user = findUser(socket.id)
    io.emit("message", formateMsg(user.username, msg))
   })


})
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());


server.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT)
})