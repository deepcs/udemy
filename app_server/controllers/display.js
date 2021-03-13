/* Get Display Page */

const display = function(req, res){
    res.render('display', {title:'Mobile Phone Store'});
};


module.exports = {display};