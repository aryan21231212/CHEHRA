const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const cors = require("cors")
const user = require('./model/user.js')
const jwt = require('jsonwebtoken')
const {Server} = require("socket.io")



const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.connect("mongodb+srv://aryanpratapsingh862:A98wKuRTWscK0feV@cluster1.8ynb5tf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
.then(()=>{
    console.log("connected")
})

const server = app.listen(3000,()=>{
    console.log("server is listenig on 3000")
})

let connections ={}
let messages = {}
let timeOnline = {}

const io = new Server(server,{
    cors: {
        origin: "https://chehra.vercel.app",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
})

io.on('connection',(socket)=>{

    console.log("something is connected")
    socket.on("join-call",(path)=>{

        if(connections[path] === undefined){
            connections[path]=[]
        }
        connections[path].push(socket.id)

        timeOnline[socket.id] = new Date();
        
        for(let a = 0; a<connections[path].length;a++){
            io.to(connections[path][a]).emit("user-joined",socket.id,connections[path])
        }
        
        if(messages[path] != undefined ){
            for(let a = 0;a<messages[path].length;a++){
                io.to(socket.id).emit("chat-messages",messages[path][a]['data'],
                    messages[path][a]['sender'],messages[path][a]['socket-id-sender'])
            }
        }
    })
    socket.on('signal',(toId,message)=>{
        io.to(toId).emit("signal",socket.id,message)
    })

    socket.on('chat-message',(data,sender)=>{
        const [matchingRoom,found]=Object.entries(connections)
                .reduce(([room,isFound],[roomKey,roomValue])=>{
                    if(!isFound && roomValue.includes(socket.id)){
                        return [roomKey,true]
                    }
                    return [room,isFound];
                },["",false]);
            if(found === true){
                if(messages[matchingRoom]===undefined){
                    messages[matchingRoom]=[]
                }
                messages[matchingRoom].push({'sender':sender,'data':data,"socket-id-sender":socket.id})
                console.log("message",matchingRoom,":",sender,data)

                connections[matchingRoom].forEach((elem)=>{
                    io.to(elem).emit("chat-message",data,sender,socket.id)
                })
            }

    })

    socket.on("disconnect",()=>{
        var diffTime = Math.abs(timeOnline[socket.id]- new Date())

        var key

        for(const [k,v] of JSON.parse(JSON.stringify(Object.entries(connections)))){
            for(let a =0;a<v.length;a++){
                if(v[a] === socket.id){
                    key =k

                    for(let a=0; a<connections[key].length;a++){
                        io.to(connections[key][a]).emit('user-left',socket.id)
                    }

                    var index = connections[key].indexOf(socket.id)
                    connections[key].splice(index,1)

                    if(connections[key].length ===0){
                        delete connections[key]
                    }
                }
            }
        }
    })
})




//signin
app.post("/signup", async (req,res)=>{
    let {name,username,password} = req.body
    let data = await user.findOne({username:username}) 

    if(data){
       return res.json({"message":"user already existed"})
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            let newUser = await user.insertOne({
                name:name,
                username:username,
                password:hash,
            })
            newUser.save()
        });
    });
    res.json({"message":"successfuly register"})

})


//login
app.post("/signin",async (req,res)=>{
    let {username,password} = req.body
    let findUser = await user.findOne({username:username})

    if(findUser){
        bcrypt.compare(password, findUser.password, function(err, result) {
            if(result == true){
                let data = {
                    signInTime: Date.now(),
                    username,
                  }
                
                  const token = jwt.sign(data, 'ssse')
                  res.status(200).json({ message: 'success', token })
            }
            else{
                return res.status(401).json({ message: 'Invalid password' })
            }
        
        });
            
          
         
        }
        else{
            return res.status(404).json({ message: 'Username not found!' })
        }
    }
    
  
)

