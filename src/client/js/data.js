/**
 * Created by john on 6/8/15.
 */
(function () {

    'use strict';

    var TodoCollection = require('./models/TodoCollection');

    var todos = new TodoCollection([
        { 'description': 'Test todo', 'date': new Date() },
        { 'description': 'Todo number 2', 'date': '2015-06-20' }
    ]);

    module.exports = {
        'todos': todos
    };

})();