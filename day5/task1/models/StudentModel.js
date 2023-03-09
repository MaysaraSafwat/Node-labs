const mongoose = require("mongoose");
//var URL = "mongodb://localhost:27017/nodeday4";


//mongoose.connect(DB_URL,{useNewUrlParser:true});

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
   },
   age : {
    type: Number,
    required: true,
   },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    dept: {
        type : String,
    },
    
}
);

module.exports = mongoose.model("students", StudentSchema);