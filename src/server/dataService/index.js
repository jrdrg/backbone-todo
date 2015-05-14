(function(service) {
	
	var storage = require('./dataStorage');
	
	service.getTodos = function(callback) {
		var todos = storage.getAll();
		callback(null, todos);
	};
	
	service.saveTodo = function(item, callback) {
		storage.add(item);
		callback(null, true);
	};
	
})(module.exports);