/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-favourite-heart',
  included: function(app) {
    app.import('vendor/style.css');
    app.import('vendor/assets/web_heart_animation.png');
  }
};
