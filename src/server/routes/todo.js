/**
 * Created by john on 5/17/15.
 */
var express = require('express');
var router  = express.Router();

var data = require('../dataService');

router.get('/', function (req, res) {

    data.getTodos(function (err, todos) {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(todos);
        }

    });
});

router.post('/', function (req, res) {
    // create a new todo
    console.log('create new todo');
    var todo = req.body;

    data.saveTodo(todo, function (err, data) {
        todo.id = todo.id || Math.ceil(Math.random() * 100);
        console.log('saved');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(todo);
    });
});

router.put('/:id', function (req, res) {
    // update todo with id
    var todo = req.body;
    data.updateTodo(todo, function (err, data) {
        console.log('updated');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data.updated);
    });
});

router.delete('/:id', function (req, res) {

});


module.exports = router;