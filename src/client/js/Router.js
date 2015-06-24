/**
 * Created by john on 6/7/15.
 */
(function () {

    'use strict';

    var Backbone           = require('backbone');
    var MainTodoListView   = require('./views/MainTodoListView');
    var TodoCollectionView = require('./views/TodoCollectionView');
    var $                  = require('jquery');
    var data               = require('./data');


    module.exports = Backbone.Router.extend({

        routes: {
            ''        : 'home',
            'add'     : 'add',
            'edit/:id': 'edit'
        },

        home: function () {
            var view = new MainTodoListView({ collection: data.todos });
            $('#page')
                .html(view.render().el);

            data.todos.add([
                { description: 'Testing again' }
            ]);
        },

        add: function () {
            console.log('add');
        },

        edit: function (id) {
            console.log('edit ' + id);
        }


    });

})();