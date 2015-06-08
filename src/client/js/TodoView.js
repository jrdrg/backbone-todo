/**
 * Created by john on 6/8/15.
 */

var handlebars = require('handlebars');
var Backbone   = require('backbone');
var template = require('./templates/todoItem');


var TodoView = Backbone.View.extend({

    tagName: 'li',

    initialize: function () {
        console.log('TodoView');
    },

    render: function () {
        this.$el.html(template(this.model.attributes));

        return this;
    }


});

module.exports = TodoView;