import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost(){
      if(this.get('title') && this.get('author') && this.get('text') && this.get('category')){
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          text: this.get('text'),
          category: this.get('category')
        };
        this.sendAction('savePost', params);
      } else{
        this.sendAction('handleError');
      }
    },

  }
});
