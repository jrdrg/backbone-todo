/**
 * Created by john on 6/8/15.
 */

(function () {

    'use strict';

    var $        = require('jquery');
    var Backbone = require('backbone');
    var template = require('../templates/todoItem');


    var TodoView = Backbone.View.extend({

        state: {
            editing: false
        },

        tagName: 'li',

        events: {
            'click .edit'  : 'edit',
            'click .cancel': 'cancelEdit'
        },

        initialize: function () {
            console.log('TodoView');
        },

        render: function () {
            this.$el.html(template(this.model.toJSON()));
            return this;
        },

        edit: function () {
            console.log(this.model.toJSON());

            var description = this.model.get('description'),
                date        = this.model.get('date');

            this.$('.todo-description > span').hide();
            this.$('.input-description').val(description).show();

            this.$('.edit').hide();
            this.$('.delete').hide();
            this.$('.save').show();
            this.$('.cancel').show();
            this.state.editing = true;

        },

        cancelEdit: function () {
            this.$('.todo-description > span').show();
            this.$('.input-description').hide();

            this.$('.edit').show();
            this.$('.delete').show();
            this.$('.save').hide();
            this.$('.cancel').hide();
            this.state.editing = false;
        }


    });

    module.exports = TodoView;

})();
