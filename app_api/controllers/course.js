var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
} 
var mongoose = require('mongoose');
var CourseModel = mongoose.model('Courses');

const getCourses = function(req, res) {
    CourseModel.find().exec(function (err, coursedata) {
        //console.log(coursedata);
        if (err) {
            res.status(404).json(err);
            return;
        }
        sendJsonResponse(res, 200, coursedata);
    });
};

const createCourse = function(req, res) {
    let contentArray = [];
    let courseContent = req.body.content.split("$");
    const contentLength = courseContent.length;
   

    for(let i=0; i<contentLength; i=i+4) {
        let contentpushObject = {
            mainTitle: courseContent[i],
            sub1: courseContent[i+1],
            sub2: courseContent[i+2],
            sub3: courseContent[i+3]
        };
        contentArray.push(contentpushObject);
    }
    
    CourseModel.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        bannerImage: req.body.bannerImage,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description.toString(),
        createdOn: req.body.createdOn,
        content: contentArray
    }, (err, coursedata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(coursedata);
        }
    });
    //sendJsonResponse(res, 200, {"message" : "Create Mobile method Called"});
}
const getSingleCourse = function(req, res) {
    if (req.params && req.params.courseid) {
        //sendJsonResponse(res, 200, req.params.mobileid);
        CourseModel.findById(req.params.courseid).exec(function (err, coursedata) {
                if (!coursedata) {
                    sendJsonResponse(res, 404, {
                        "message": "Course ID not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, coursedata);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No Course ID in request"
        });
    }
    //sendJsonResponse(res, 200, {"message" : "Get Single Mobile method Called"});
}
const updateCourse = function(req, res) {
    if (!req.params.courseid) {
        res.status(404).json({
            "message": "Not found, Course ID is required"
        });
        return;
    }
    CourseModel.findById(req.params.courseid).exec((err, coursedata) => {
            if (!coursedata) {
                res.status(404).json({
                        "message": "Course ID not found"
                });
                return;
            } else if (err) {
                res.status(404).json(err);
                return;
            }
            coursedata.title = req.body.title,
            coursedata.subtitle = req.body.subtitle,
            coursedata.bannerImage = req.body.bannerImage,
            coursedata.author = req.body.author,
            coursedata.category = req.body.category,
            coursedata.price = req.body.price,
            coursedata.rating = req.body.rating,
            coursedata.description = req.body.description.toString(),
            coursedata.createdOn = req.body.createdOn,
            coursedata.save((err, course) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(200).json(course);
                }
            });

        })
    //sendJsonResponse(res, 200, {"message" : "Update Mobile method Called"});
}
const deleteCourse = function(req, res) {
    const courseid = req.params.courseid;

    if (courseid) {
        CourseModel.findByIdAndRemove(courseid).exec((err, coursedata) => {
                if (err) {
                    res.status(404).json(err);
                    return;
                }
                res.status(204).json(null);
            });
    } else {
        res.status(404).json({ "message": "No Course ID" });
    }
    //sendJsonResponse(res, 200, {"message" : "Delete Mobile method Called"});
}

module.exports = {
    getCourses,
    createCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse
};