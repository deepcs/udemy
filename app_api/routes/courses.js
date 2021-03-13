var express = require('express');
var router = express.Router();

const cntrlCourse = require('../controllers/course');

router.get('/courses', cntrlCourse.getCourses);
router.post('/courses', cntrlCourse.createCourse);
router.get('/courses/:courseid', cntrlCourse.getSingleCourse);
router.put('/courses/:courseid', cntrlCourse.updateCourse);
router.delete('/courses/:courseid', cntrlCourse.deleteCourse);



module.exports = router;