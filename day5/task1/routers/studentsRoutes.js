const express = require("express");
let router = express.Router();
let StudentsController = require("../controllers/studentsControllers")

router.get("/",StudentsController.GetAllStudents);
router.get("/:id",StudentsController.GetStudentByID);
router.post("/add",StudentsController.AddNewStudent);
 router.delete("/:id",StudentsController.DeleteStudentByID);
router.put("/:id",StudentsController.UpdateStudentByID);
module.exports = router;