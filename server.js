const http = require("http");
const fs = require("fs");

//fs.writeFileSync("resault.txt", " ")
http.createServer(
    (req,res)=>{
        if(req.url!="/favicon.ico"){
            var arr = req.url.split("/");
            //bonus1 - accepting mor than 2 numbers 
            var segmentedArr = arr.slice(2)
            console.log(segmentedArr)
            var resault;
            var i;
            switch(arr[1]){
                    case "add":
                        resault=0;
                         segmentedArr.forEach(e=> resault+=Number(e))
                    break;

                    case "sub":
                        resault =0;
                        let sortedNreversed = segmentedArr.sort().reverse()
                        sortedNreversed.forEach(e=> resault-=e)
                        
                    break;
                    case "div":
                        resault =1;
                        segmentedArr.forEach(e=> resault /= Number(e))
                    break;
                    case "mult":
                        resault=1;
                        segmentedArr.forEach(e=> resault *= Number(e))
                    break;

            }

            //bonus2 - writing resault in file
           console.log(resault);
           fs.appendFileSync("resault.txt", `  resault = ${resault}`);
        }
        res.end(`<h1> Resault is ${resault}</h1>`)
    }
).listen(6060, ()=>{
    console.log("Listening on port 6060")
})