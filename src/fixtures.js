import { Meteor } from 'meteor/meteor';
import Posts from './collections/Posts.js';

Meteor.startup(() => {
  Meteor.call('getPosts', (error, result) => {
    if (error) {
      console.error(error);
    } else {
      result.data.data.children.forEach(element => {
        post = Posts.findOne({ id: element.data.id });
        if (post) {
          Posts.update({ id: post.id }, { $set: element.data },  (error, result) => {
            if (error) {
              throw new Meteor.Error(500, error.message);
            } else {
              console.log("Update successful: ", result);
            }
          });
        } else {
          Posts.insert(element.data);
        }
      });
    }
  });
});
