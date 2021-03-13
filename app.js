var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('./app_server/models/db');

//var indexRouter = require('./app_server/routes/index');
var displayRouter = require('./app_server/routes/display');

const courseListRouter = require('./app_server/routes/displaylist');
const aboutRouter = require('./app_server/routes/about');

const apiRouter = require('./app_api/routes/courses'); 

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'app-public', 'build')));
app.use('/about', aboutRouter);
app.use('/displaylist', courseListRouter);

app.use('/display', displayRouter);
app.use('/api', apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
