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

            $('.todo-description > span').css('display', 'none');
            $('.input-description').css('display', 'inline');

            $('.edit').css('display', 'none');
            $('.delete').css('display', 'none');
            $('.save').css('display', 'inline');
            $('.cancel').css('display', 'inline');
            this.state.editing = true;
        },

        cancelEdit: function () {
            $('.todo-description > span').css('display', 'inline');
            $('.input-description').css('display', 'none');

            $('.edit').css('display', 'inline');
            $('.delete').css('display', 'inline');
            $('.save').css('display', 'none');
            $('.cancel').css('display', 'none');
            this.state.editing = false;
        }


    });

    module.exports = TodoView;

})();
