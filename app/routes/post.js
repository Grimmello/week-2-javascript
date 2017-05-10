import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions:{
    updateQuestion(model, params){
      Object.keys(params).forEach(key=>{
        if(params[key] !== undefined){
          model.set(key, params[key]);
        }
      });
      model.save();
    },
    saveReply(params){
      var newReply = this.store.createRecord('reply', params);
      var post = params.entry;
      post.get('replies').addObject(newReply);
      newReply.saveReply().then(()=>{
        return post.save();
      });
    },
    updateReply(Reply, params){
      console.log(Reply);
      console.log(params);
      Object.keys(params).forEach(key=>{
        if(params[key] !== undefined){
          Reply.set(key,params[key]);
        }
      });
      Reply.save();
      location.reload(true);
    },
    handleError(){
      $("#question-detailed-section").hide();
      $("#main-error").show();
    }
});
