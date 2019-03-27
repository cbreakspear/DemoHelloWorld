/*jshint node:true*/


// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3000;

var app = express();

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();


// create a new express server
testservices = require('./routes/testservices');



app.get('/sayHelloTest', testservices.sayHelloTest);
app.get('/', testservices.landPage);


// start server on the specified port and binding host
//app.listen(appEnv.port, appEnv.bind, function() {
app.listen(PORT,  function() {

	// print a message when the server starts listening
  //console.log("server starting on " + appEnv.url);
  console.log("server starting on : " + PORT);
});
