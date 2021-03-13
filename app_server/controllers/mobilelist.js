/* const mobileList = [
		{
			"name": "OnePlus Nord",
			"released_date": '2020-08-04',
			"ratings": 4,
			"facilities": ['6.44-inch Fluid AMOLED display with 90Hz refresh rate' ,
						'Snapdragon 765G-8GB RAM' ,
						'48 MP(Quad Camera) 32 MP front', 
						'128GB Storage'],
		},
		{
			"name": "Apple iPhone SE",
			"released_date": '2020-04-24',
			"ratings": 3.5,
			"facilities": ['4.7-inch LCD display and Touch ID',
							'Apple A13 Bionic - 3GB RAM',
							'12 MP(Single Camera) 7MP front',
							'64GB Storage']
		},
		{
			"name": "Google Pixel 5",
			"released_date": '2020-10-29',
			"ratings": 5,
			"facilities": ['6.0-inch LCD display',
							'Qualcomm Snapdragon 765G - 8GB RAM',
							'12.2 MP(Dual Camera) 8MP front',
							'128GB Storage']
		},
	];
*/	

const response = require('express');
var request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
}

const _renderMobileList = function(req, res, responseBody) {
    res.render('list-display', {
        title: 'MobileStore', 
        subtitle: 'Best Place to Buy Latest Mobile Phones',
        mobileList: responseBody
    });
};
const mobilelist = function(req, res) {
    const path = '/api/mobiles';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET' ,
        json : {}
    };
    request(
        requestOptions, (err, response, body) => {
            _renderMobileList(req, res, body);
        }
    );
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('mobile-info', {
        title: 'MobileStore',
        subtitle: 'Best Place to Buy Latest Mobile Phones', 
        currentMobile: responseBody
    });
};
const mobileInfo = function(req, res) {
    const path = `/api/mobiles/${req.params.mobileid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

const _renderCreatePage = function (req, res) {
    res.render('create-new', {
        title: "Add New Mobile"
    });
};

const addNewMobile = function(req, res) {
   _renderCreatePage(req, res);
};

const doAddNewMobile = function(req, res) {
    const path = '/api/mobiles';
    const postdata = {
        name: req.body.name,
        brand: req.body.brand,
        colors: req.body.colors.split(','),
        imgpath: req.body.imgpath,
        releasedDate: req.body.releasedDate,
        rating: req.body.rating,
        features: req.body.features.split(',')
    };

    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/api/mobiles');
            }
        }
    );
};


module.exports = {mobilelist, mobileInfo, addNewMobile, doAddNewMobile};