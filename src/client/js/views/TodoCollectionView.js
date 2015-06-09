/**
 * Created by john on 6/8/15.
 */

(function () {

    'use strict';

    var Backbone = require('backbone');
    var TodoView = require('./TodoView');

    module.exports = Backbone.View.extend({

        tagName: 'ul',

        initialize: function () {
            console.log('TodoCollectionView');

            this.collection.on('add', this.addItem, this);
        },

        render: function () {
            var self = this;

            this.$el.empty();
            this.$el.css('background', '#eee');

            this.collection.each(function (todo) {
                console.log(todo);
                console.log(self.$el);

                var view = new TodoView({ model: todo });

                self.$el.append(view.render().el);
            });
            return this;
        },

        addItem: function (todo) {
            var view = new TodoView({ model: todo });

            this.$el.append(view.render().el);
            return this;
        }

    });

})();