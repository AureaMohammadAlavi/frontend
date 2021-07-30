var express = require('express');
var app = express();
var cors = require('cors');
var app = express();
var request = require('request');

app.use(cors());

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', function(req, res){

//Lets configure and request
request({
    url: `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/date`, //URL to hit
}, function(error, response, body){
    if(error) {
        console.log(error);
        res.render("error", {error: error});
    } else {
        console.log(response.statusCode, body);
        var backend = JSON.parse(body);
        res.render("index", {backend_version: backend.version, backend_date: backend.date});
    }
});

    
});


var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Frontend app listening at http://%s:%s", host, port)
})
