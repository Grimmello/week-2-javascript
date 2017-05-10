import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveReply(params){
      this.sendAction('saveReply', params);
    },
    handleError(){
      this.sendAction('handleError');
    }
  }
});
