import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      entries: this.store.findAll('entry'),
      replys: this.store.findAll('reply')
    });
  },
  actions: {
    saveReply(params){
      var newReply = this.store.createRecord('reply', params);
      var post = params.entry;
      post.get('replies').addObject(newReply);
      newReply.save().then(()=>{
        return post.save();
      });
      this.transitionTo('posts');
    },
    handleError(){
      Document.getElementById("#post-display-secion").hide();
      Document.getElementById("#main-error").show();
    }
  }
});
