/**
 * Created by john on 6/8/15.
 */
(function () {

    'use strict';

    var Backbone           = require('backbone');
    var TodoCollectionView = require('./TodoCollectionView');
    var template           = require('../templates/mainView');


    module.exports = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click #new-todo': 'addTodo'
        },

        initialize: function () {
            this._todoCollection = new TodoCollectionView({ collection: this.collection });
        },

        render: function () {
            this.$el.html(template());
            this.$('#todo-container').html(this._todoCollection.render().el);
            return this;
        },

        addTodo: function () {
            this.collection.add({ description: 'asdf', date: new Date() });
        }

    });

})();