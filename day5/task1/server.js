const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var DB_URL = "mongodb://localhost:27017/nodeday4";
var PORT = 8001;
let studentModel = require("./models/StudentModel");
let studetsRoutes = require("./routers/studentsRoutes");
let coursRoutes = require("./routers/coursesRoutes")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
//app.use(cors());
mongoose.connect(DB_URL, {
    useNewUrlParser : true,
})

app.use("/api/students", studetsRoutes)
app.use("/api/courses", coursRoutes)

app.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT)
})