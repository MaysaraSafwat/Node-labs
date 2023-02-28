const http = require("http");
const fs = require("fs");

//fs.writeFileSync("resault.txt", " ")
http.createServer(
    (req,res)=>{
        if(req.url!="/favicon.ico"){
            var arr = req.url.split("/");
            //bonus1 - accepting more than 2 numbers 
            var segmentedArr = arr.slice(2)
            var arrToNumbers=[];
            segmentedArr.forEach(e=>{
                arrToNumbers.push(Number(e))
            })
            console.log(segmentedArr)
            var resault;
            var i;
            switch(arr[1]){
                    case "add":
                        resault=0;
                         arrToNumbers.forEach(e=> resault+=Number(e))
                    break;

                    case "sub":
                        resault =0;
                        let sortedNreversed = arrToNumbers.sort().reverse()
                        console.log(sortedNreversed)
                        sortedNreversed.forEach(e=> {
                            console.log(sortedNreversed.indexOf(e)==0)
                            if(sortedNreversed.indexOf(e)==0){
                                resault = e
                            }else{
                                resault-=e
                            }
                            
                            console.log(resault)
                        })
                        
                    break;
                    case "div":
                        resault =1;
                        arrToNumbers.forEach(e=> resault /= e)
                    break;
                    case "mult":
                        resault=1;
                        arrToNumbers.forEach(e=> resault *= e)
                    break;

            }

            //bonus2 - writing resault in file
           fs.appendFileSync("resault.txt", `  resault = ${resault}`);
        }
        res.end(`<h1> Resault is ${resault}</h1>`)
    }
).listen(6060, ()=>{
    console.log("Listening on port 6060")
})