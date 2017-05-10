import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(this);
    return this.store.findAll('reply', params.post_id);
  }
});
