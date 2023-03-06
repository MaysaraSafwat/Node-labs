const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


var PORT = 8000;
var WelcomeFileHTML = fs.readFileSync("../client/welcom.html").toString();
var JSONFile= "./clients.json";
app.use(express.json());
app.use(express.urlencoded({extended:false}));



function PATH(url){
   return path.join(__dirname,url);
}


 
app.get("/main.html",(req,res)=>{
   res.sendFile(PATH("../client/main.html"));
})
app.get("/style.css",(req,res)=>{
    res.sendFile(PATH("../client/style.css"));  
})
app.get("/welcom.html",(req,res)=>{
    res.sendFile(PATH("../client/welcom.html"));
   
})
app.get("/clients.json",(req,res)=>{
    res.sendFile(JSONFile);
   
})
//POST Method
app.post("/welcom.html", (req,res,next)=>{
    console.log("here")
   let  name = req.body["name"];
   let  number = req.body["number"];
   let  address = req.body["address"];
   let  email = req.body["email"];

    WelcomeFileHTML = WelcomeFileHTML.replace('{name}',name)
    WelcomeFileHTML = WelcomeFileHTML.replace('{number}',number)
    WelcomeFileHTML = WelcomeFileHTML.replace('{address}',address)
    WelcomeFileHTML = WelcomeFileHTML.replace('{email}',email)

        let client = {
            Name : name,
            Number : number,
            Address : address,
            Email : email,
        } 
        
        fs.readFile(JSONFile, function (err, data) {
            var json = JSON.parse(data)
            json.push(client)

            fs.writeFile(JSONFile, JSON.stringify(json), (err)=> console.log(err));
        })

        next();

    },(req,res)=>{

        res.send(WelcomeFileHTML);

    })

 app.all('*',(req,res)=>{
        res.send('<h1>Error 404 : Page Not Found</h1>')
    });

app.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT)
})