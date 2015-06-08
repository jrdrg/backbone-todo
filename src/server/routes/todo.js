/**
 * Created by john on 5/17/15.
 */
var express = require('express');
var router = express.Router();

var data = require('../dataService');

router.get('/', function(req, res) {

    data.getTodos(function(err, todos) {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(todos);
        }

    });
});

router.post('/', function(req, res) {
    // create a new todo
});

router.put('/:id', function(req, res) {
    // update todo with id
});

router.delete('/:id', function(req, res) {

});


module.exports = router;