import { Meteor } from 'meteor/meteor';
import Posts from '../collections/Posts.js';

Meteor.publish('posts', function () {
  return Posts.find({}, { 
    fields: { 
      _id: 1, 
      author: 1, 
      title: 1,
      permalink: 1, 
      url: 1, 
      ups: 1, 
      upvote_ratio: 1, 
      num_comments: 1, 
      created: 1 } 
    });
});
