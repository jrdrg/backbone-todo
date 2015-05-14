(function(todo) {
	
	var data = require('../dataService');
	
	todo.init = function(app) {
		
		app.get('/todo', function(req, res) {
			
			data.getTodos(function(err, todos) {
				if (err) {
					res.status(500).send('Error');
				} else {
					res.setHeader('Content-Type', 'application/json');
					res.send(todos);
				}
							
			});			
		});
		
		app.post('/todo', function(req, res) {
			// create a new todo
		});
		
		app.put('/todo/:id', function(req, res) {
			// update todo with id
		});
		
		app.delete('/todo/:id', function(req, res) {
			
		});
		
	};
	
})(module.exports);