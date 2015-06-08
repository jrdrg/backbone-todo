/**
 * Created by john on 6/8/15.
 */

var TodoCollection = require('./TodoCollection');

var todos = new TodoCollection([
    { 'description': 'Test todo', 'date': new Date() },
    { 'description': 'Todo number 2', 'date': '2015-06-20' }
]);

module.exports = {
    'todos': todos
};