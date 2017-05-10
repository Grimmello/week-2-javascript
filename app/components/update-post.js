import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm:false,
  actions:{
    updatePostForm(){
      this.set('updatePostForm', true);
    },
    updatePost(post){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        details: this.get('details'),
        category: this.get('category')
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
})
