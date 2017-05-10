import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params){
      var newPost = this.store.createRecord('post', params);
      newPost.savePost();
    },
    handleError(){
      Document.getElementById("#form-section").hide();
      Document.getElementById("#main-error").show();
    }
  }
});
