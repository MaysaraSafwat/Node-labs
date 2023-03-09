const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const CourseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
   },
   tutor : {
    type: String,
    required: true,
   },
    hours : {
        type : Number,
        required : true,
    },
    students: [
        {type: Schema.Types.ObjectId, ref: 'students'}
      ],
    
}
);

module.exports = mongoose.model("courses", CourseSchema);