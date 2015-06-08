/**
 * Created by john on 6/8/15.
 */
var Backbone = require('backbone');
var Todo     = require('./Todo');


var TodoCollection = Backbone.Collection.extend({

    model: Todo,

    url: '/todo',

    initialize: function () {
        console.log('Todo initialized');
    }
});


module.exports = TodoCollection;