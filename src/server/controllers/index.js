(function(controllers) {
	
	var todo = require('./todoController');

	controllers.init = function(app) {
		todo.init(app);
	};
	
})(module.exports);