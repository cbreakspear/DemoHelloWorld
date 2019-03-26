
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();



exports.sayHelloTest = function(req, res) {
   
    console.log('Reaching service for testing container');

    res.send('You have reached the SERVICE :)');
};

exports.landPage = function(req, res) {
    
     console.log('Landing Page');
 
     res.sendFile(__dirname + '/Test.html');
 };

