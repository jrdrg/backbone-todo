(function(data) {
	var _ = require('lodash');
	
	var items = [];
	
	items.push({
		date: '2015-05-14',
		description: 'Reserve elevator'
	});
	
	data.getAll = function() {
		return items;
	};
	
	data.getByIdx = function(idx) {
		return items[idx];
	};
	
	data.add = function(item) {
		items.push(item);
	};
	
	data.update = function(index, item) {
		if (items.length > index) {
			_.assign(items[index], item);
		}
	};
	
})(module.exports);