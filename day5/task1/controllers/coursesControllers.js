let CourseModel = require("../models/CourseModel");

var getAllCourses= async(req,res)=>{
    var allCourses = await CourseModel.find({})
    res.json(allCourses);//[]
}
var getCourseById = async(req,res)=>{
    var id=req.params.id;
    var found = await CourseModel.findById(id)
    res.json(found);
}
var addNewCourse = (req,res)=>{
    var newCourse = req.body; 
    var valid = true;
    if(valid){
        var newCourseModel = new CourseModel(newCourse)
        newCourseModel.save()
        res.status(201).json(newCourseModel);
    }else{
        res.status(400).send("Check ur Data Type")
    }
}
var deleteCourseById = async(req,res)=>{
    var id = req.params.id;
    await CourseModel.deleteOne({_id : id})
    res.send("Deleted Successfully");
}

var updateCourseById = async(req, res)=>{
    var id = req.params.id;
    var updatedStudent = req.body;

   await CourseModel.findByIdAndUpdate({_id: id}, {
    name : updatedStudent.name,
    tutor : updatedStudent.tutor,
    hours : updatedStudent.hours,
   })
 
   res.json("updated successfully")
}
module.exports = {
    getAllCourses,
    addNewCourse,
    updateCourseById,
    deleteCourseById,
    getCourseById
};