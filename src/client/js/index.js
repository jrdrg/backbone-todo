/**
 * Created by john on 6/7/15.
 */

(function() {

    'use strict';

    var Backbone = require('backbone');
    var Router   = require('./Router');


    new Router();
    Backbone.history.start({ pushState: true });

})();
