const validate = require("../utils/StudentsValidator");
let StudentModel = require("../models/StudentModel");

var GetAllStudents = async(req,res)=>{
    var AllStudents = await StudentModel.find({})
    res.json(AllStudents);//[]
}
var GetStudentByID = async(req,res)=>{
    var id=req.params.id;
    var foundStudent = await StudentModel.findById(id)//((s)=>{return s._id == id})
    res.json(foundStudent);
}
var AddNewStudent = (req,res)=>{
    var newStudent = req.body; 
    var valid = true;
    if(valid){
        var newStudentModel = new StudentModel(newStudent)
        newStudentModel.save()
        res.status(201).json(newStudentModel);
    }else{
        res.status(400).send("Check ur Data Type")
    }
}
var DeleteStudentByID = async(req,res)=>{
    var id = req.params.id;
    await StudentModel.deleteOne({_id : id})
    res.send("Deleted Successfully");
}
var UpdateStudentByID = async(req, res)=>{
    var id = req.params.id;
    var updatedStudent = req.body;
    var index ;

   await StudentModel.findByIdAndUpdate({_id: id}, {
    name : updatedStudent.name,
    age : updatedStudent.age,
    dept : updatedStudent.dept,
   })
 
   res.json("updated successfully")
}
module.exports = {
    GetAllStudents,
    GetStudentByID,
    AddNewStudent,
   DeleteStudentByID,
    UpdateStudentByID
};