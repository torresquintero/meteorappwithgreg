import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
});

//tells the html what to render when looking from "counter"
Template.hello.helpers({
  counter() {
    return counters.find({name:"mycounter"}).fetch()[0].value;
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    var myvar = counters.find({name:"mycounter"}).fetch()[0]._id;
    counters.update(myvar,{$inc:{value:1}});
  },
});
