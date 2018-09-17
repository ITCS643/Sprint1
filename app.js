//
//
// Documentation:
// 1. get started
//   https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
// 2. request path params
//   https://expressjs.com/en/guide/routing.html
//

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   console.log("Response with First Page")
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/courses', function (req, res) {
   console.log("Response with Second Page")
   res.sendFile( __dirname + "/" + "list.html" );
})

app.get('/course/syllabus/:courseId', function (req, res) {
   console.log("Response with Syllabus file")
   console.log(req.params)
   var courseId = req.params['courseId']
   res.sendFile( __dirname + "/" + "files/" + "syllabus" + courseId + ".txt" );
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Happy Learning app listening at http://%s:%s", host, port)
})
