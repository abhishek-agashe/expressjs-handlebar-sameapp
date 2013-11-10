/**
 * Sample model
 **/

var user = function() {
	this.name;
	this.state;
};

user.prototype.setUser = function(name, state) {
	this.name = name;
	this.state = state; 	
};

user.prototype.getName = function() {
	return this.name;
};

module.exports = user;


