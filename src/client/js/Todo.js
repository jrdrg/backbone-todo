/**
 * Created by john on 6/8/15.
 */


var Backbone = require('backbone');


var Todo = Backbone.Model.extend({

    defaults: {
        'description': null,
        'date'       : new Date()
    },

    url: function () {
        return this.id ? '/todo/' + this.id : '/todo';
    },

    urlRoot: '/todo'

});


module.exports = Todo;