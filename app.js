//Load required modules
var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express(),
	exphbs  = require('express3-handlebars'),
	fs = require('fs');

var app = express();
//Change the default path of layouts from 'views/layouts' to 'public/templates/layouts/main'
app.locals.layout = __dirname + '/public/templates/layouts/main';
//Set the port
app.set('port', process.env.PORT || 3000);
//Set template location. 
app.set('views', __dirname + '/public/templates');
app.engine('handlebars', exphbs());
//Set view engine to handlebars
app.set('view engine', 'handlebars');

app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({secret: 'your secret here'}));
app.use(app.router);

//Set path to static assets
app.use(express.static(path.join(__dirname, 'public')));

//Read all controllers to serve pages based of routes set in each of them.
fs.readdirSync('./controllers').forEach(function(file){
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		route.controller(app);
	}
});

//Create the server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Listening on port 3000');
});

