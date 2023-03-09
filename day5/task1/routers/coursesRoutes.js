const express = require("express");
let router = express.Router();
let coursesControllers = require("../controllers/coursesControllers")

router.get("/",coursesControllers.getAllCourses);
router.get("/:id",coursesControllers.getCourseById);
router.post("/add",coursesControllers.addNewCourse);
 router.delete("/:id",coursesControllers.deleteCourseById);
router.put("/:id",coursesControllers.updateCourseById);
module.exports = router;