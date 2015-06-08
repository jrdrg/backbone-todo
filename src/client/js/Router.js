/**
 * Created by john on 6/7/15.
 */
var Backbone           = require('backbone');
var TodoCollectionView = require('./TodoCollectionView');
var data               = require('./data');
var $                  = require('jquery');

var Router = Backbone.Router.extend({

    initialize: function () {

    },

    routes: {
        ''        : 'home',
        'add'     : 'add',
        'edit/:id': 'edit'
    },

    home: function () {
        console.log('home');

        var todos = data.todos;
        var view  = new TodoCollectionView({
            collection: todos
        });

        $('#todo-container')
            .empty()
            .append(view.render().el);
    },

    add: function () {
        console.log('add');
    },

    edit: function (id) {
        console.log('edit ' + id);
    }


});

module.exports = Router;