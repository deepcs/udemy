const aboutCtrl = function(req, res) {
    res.render('about', {title: 'About Us'});
};

module.exports = {aboutCtrl};