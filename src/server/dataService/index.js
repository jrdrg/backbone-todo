(function (service) {

    var storage = require('./dataStorage');

    service.getTodos = function (callback) {
        var todos = storage.getAll();
        callback(null, todos);
    };

    service.saveTodo = function (item, callback) {
        storage.add(item);
        callback(null, { success: true });
    };

    service.updateTodo = function (item, callback) {
        item.updateTimestamp = new Date();
        storage.update(item);
        callback(null, { updated: item });
    }

})(module.exports);