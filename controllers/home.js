/**
 * Sample controller
 **/
var userModel = require('../models/UserModel');

module.exports.controller = function(app) {


	function process(req, res, next) {
		//Create instance of userModel
		var User =  new userModel();
  		User.setUser('Foo','California');
  		//set user info in session.
  		req.session.user = User;
  		next();
	}

	// Serves the default home page
	app.get('/', process, function(req, res) {	
  		res.render('home', {'user': req.session.user});
	});
}
