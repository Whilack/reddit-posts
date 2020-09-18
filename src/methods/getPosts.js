import { Meteor } from 'meteor/meteor';
import {HTTP} from 'meteor/http';

Meteor.methods({
  getPosts() {
    try {
      return HTTP.get('https://www.reddit.com/r/popular.json');
    } catch (error) {
      throw new Meteor.Error('Error', 'Failed to fetch data from API');
    }
  }
});
