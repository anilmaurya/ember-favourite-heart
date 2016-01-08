import Ember from 'ember';
import layout from '../templates/components/ember-favourite-heart';

export default Ember.Component.extend({
  layout: layout,
  liked: false,
  likeCount: 0,

  heartClass: Ember.computed('liked', function() { 
    if(this.get('liked')){
      return "heart heartAnimation";
    }else{
      return "heart";
    }
  }),

  heartStyle: Ember.computed('liked', function() {
    if(this.get('liked')){
      return "";
    }else{
      return "background-position: 0% 50%;";
    }
  }),

  like: function(){
    this.set('liked', true);
    this.set('likeCount', this.get('likeCount') + 1);
  },

  unlike: function(){
    this.set('liked', false);
    this.set('likeCount', this.get('likeCount') - 1);
  },

  actions: {
    toggleFav: function(){
      if(this.get('liked')){
        this.unlike();
      }else{
        this.like();
      }
      this.sendAction();
    }
  }
});
