/**
 * Created by john on 6/8/15.
 */
var Backbone = require('backbone');
var TodoView = require('./TodoView');

var TodoCollectionView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
        console.log('TodoCollectionView');
        this.render();
    },

    render: function () {
        var self = this;

        this.$el.empty();
        this.$el.css('background', '#ccc');

        this.collection.each(function (todo) {
            console.log(todo);
            console.log(self.$el);

            var view = new TodoView({ model: todo });

            self.$el.append(view.render().el);
        });

        return this;
    }

});


module.exports = TodoCollectionView;