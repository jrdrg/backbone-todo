/**
 * Created by john on 6/8/15.
 */
var Backbone = require('backbone');
var Todo     = require('./Todo');


var TodoCollection = Backbone.Collection.extend({

    model: Todo,

    url: '/todo',

    initialize: function () {
        console.log('TodoCollection initialized');
        this.on('change', this.logItems, this);
        this.on('update', this.logUpdate, this);
    },

    logItems: function() {
        console.log('logItems');
    },

    logUpdate: function() {
        console.log('logUpdate');
    }
});


module.exports = TodoCollection;