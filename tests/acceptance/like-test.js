import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | like', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('add heartAnimation class on like event', function(assert) {
  visit('/');

  andThen(function() {
    click('.heart:first');
    andThen(function(){
      assert.equal(find('.heart.heartAnimation').length, 1);
    });
  });
});

test('do not add heartAnimation class on like event for disabled', function(assert) {
  visit('/');

  andThen(function() {
    click('.heart:last');
    andThen(function(){
      assert.equal(find('.heart.heartAnimation').length, 0);
    });
  });
});

test('remove heartAnimation class on unlike event', function(assert) {
  visit('/');

  andThen(function() {
    click('.heart:first');
    andThen(function(){
      assert.equal(find('.heart.heartAnimation').length, 1);
      click('.heart.heartAnimation');
      andThen(function(){
        assert.equal(find('.heart.heartAnimation').length, 0);
      });
    });
  });
});

test('increase like count on like event', function(assert) {
  visit('/');

  andThen(function() {
    click('.heart:first');
    andThen(function(){
      assert.equal(find('.heartCount:first').text().trim(), "201");
    });
  });
});

test('decrease like count on unlike event', function(assert) {
  visit('/');

  andThen(function() {
    click('.heart:first');
    andThen(function(){
      assert.equal(find('.heartCount:first').text().trim(), "201");
      click('.heart.heartAnimation');
      andThen(function(){
        assert.equal(find('.heartCount:first').text().trim(), "200");
      });
    });
  });
});
