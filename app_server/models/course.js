var mongoose = require('mongoose');

var coursesSchema = new mongoose.Schema({
	title : {
		type: String,
		required: true,
		minlength: 3
	},
	subtitle: {
		type: String,
        required: true,
        minlength: 2
    },
    bannerImage: String,
    author: String,
    category: String,
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    content: [{
        mainTitle: String,
        sub1: String,
        sub2: String,
        sub3: String
    }]
});

mongoose.model('Courses', coursesSchema, 'courses');