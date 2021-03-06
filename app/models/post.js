import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  category: DS.attr(),
  replies: DS.hasMany('reply', {async: true})
});
