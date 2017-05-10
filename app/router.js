import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('post', {path: '/posts/:post_id'});
  this.route('replies');
  this.route('new-post');
});

export default Router;
