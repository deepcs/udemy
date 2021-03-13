var mongoose = require('mongoose');
var gracefulShutdown;

var dbURI = 'mongodb+srv://shubham:Shubham@cluster0.bn9wf.mongodb.net/CourseDB?retryWrites=true&w=majority';

mongoose.connect(dbURI);

//COnnection Events
mongoose.connection.on('connected', function () {
 console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
 console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('Mongoose disconnected');
});

//Capture App Termination
gracefulShutdown = function (msg, callback) {
 mongoose.connection.close(function () {
 console.log('Mongoose disconnected through ' + msg);
 callback();
 });
};
// For nodemon restarts
process.once('SIGUSR2', function () {
 gracefulShutdown('nodemon restart', function () {
 process.kill(process.pid, 'SIGUSR2');
 });
});
// For app termination
process.on('SIGINT', function() {
 gracefulShutdown('app termination', function () {
 process.exit(0);
 });
});

require('./course');