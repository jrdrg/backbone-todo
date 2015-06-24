/**
 * Created by john on 6/8/15.
 */

(function () {

    'use strict';

    var Backbone = require('backbone');
    var template = require('../templates/todoItem');


    module.exports = Backbone.View.extend({

        state: {
            editing: false
        },

        tagName: 'li',

        events: {
            'click .edit'  : 'edit',
            'click .cancel': 'cancelEdit',
            'click .save'  : 'save'
        },

        initialize: function () {
            console.log('Todo View');
        },

        render: function () {
            this.$el.html(template(this.model.toJSON()));
            return this;
        },

        edit: function () {
            console.log(this.model.toJSON());

            var description    = this.model.get('description'),
                date           = this.model.get('date');

            this.$('.todo-description > span').hide();
            this.$('.todo-date > span').hide();
            this.$('.input-description').val(description).show();
            this.$('.input-date').val(date).show();

            this.$('.edit, .delete').hide();
            this.$('.save, .cancel').show();
            this.state.editing = true;

        },

        cancelEdit: function () {
            this.$('.todo-description > span').show();
            this.$('.todo-date > span').show();
            this.$('.input-description').hide();
            this.$('.input-date').hide();

            this.$('.edit, .delete').show();
            this.$('.save, .cancel').hide();
            this.state.editing = false;
        },

        save: function () {
            var newDesc = this.$('.input-description').val(),
                newDate = new Date(this.$('.input-date').val());

            this.model.set('description', newDesc);
            this.model.set('date', newDate);

            this.model.save(null, {
                success: function (model, response, options) {
                    console.log('success');
                },
                error  : function (model, response, options) {
                    console.log('error');
                }
            });

            this.cancelEdit();
            this.render();
        }


    });

})();
