import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (counters.find({}).fetch().length == 0) {
    counters.insert({
      name: "mycounter",
      value: 0
    })
  }
});
