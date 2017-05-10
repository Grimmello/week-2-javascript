import Ember from 'ember';

export default Ember.Component.extend({
  displayReplyForm: false,
  actions: {
    displayReplyForm(){
      this.set('displayReplyForm', true);
    },
    saveReply(){
      this.set('displayReplyForm', false);
      var params = {
        author: this.get('author'),
        details: this.get('details'),
        entry: this.get('post')
      };
      this.sendAction('saveReply', params)
    }
  }
});
