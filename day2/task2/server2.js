const http = require("http");
const fs = require("fs");

let mainHTML= fs.readFileSync("./client/main.html").toString();
let welcomeHTML = fs.readFileSync("./client/welcom.html").toString();
let styleCSS = fs.readFileSync("./client/style.css").toString();
let fIcon = fs.readFileSync("./client/favicon.ico");


let name
let address
let number
let email

var users = []
var user = {
    name,
    address,
    number,
    email
}
http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/main.html":
                    res.setHeader("Access-Control-Allow-Origin","*");
                    res.write(mainHTML);
                break;
                case "/welcom.html":
                    console.log("here")
                    //res.setHeader("Access-Control-Allow-Origin","*");
                    res.write(welcomeHTML);
                break;
                case "/style.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(styleCSS)
                break;
                case "/favicon.ico":
                    res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                    res.write(fIcon)
                break;
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    // //#endregion
    // //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            let values =[];
            let dataString = data.toString().split("&")
            dataString.forEach(element => {
               let pairs= element.split("=")
               values.push(pairs[1])
            });
            user.name = values[0]
            user.email = values[1]
            user.address = values[2]
            user.number = values[3]
            users.push(user)
            console.log(users);
            
        })
        req.on("end",()=>{
            console.log("on end here ")
            welcomeHTML = welcomeHTML.replace("{name}",user.name)
            welcomeHTML = welcomeHTML.replace("{address}",user.address)
            welcomeHTML = welcomeHTML.replace("{email}",user.email)
            welcomeHTML = welcomeHTML.replace("{number}",user.number)
             res.write(welcomeHTML);
            res.end();
        })
    }
    // //#endregion
    // //#region PUT
    // else if(req.method == "PUT"){

    // }
    // //#endregion
    // //#region DELETE
    // else if(req.method == "DELETE"){

    // }
    // //#endregion
    
}).listen("7000", ()=>{console.log("http://localhost:7000")})