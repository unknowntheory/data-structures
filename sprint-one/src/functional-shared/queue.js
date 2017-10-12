var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.storage = {};
  someInstances.count = 0;
  extend(someInstances, queueMethods);
  return someInstances;
};

var queueMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;


};


queueMethods.dequeue = function() {
  if ( this.count > 0) {
    this.count--;
  }

  var output = this.storage[0];
  for (var key in this.storage) {
    this.storage[this.count - 1] = this.storage[this.count];
  }

  return output;

};


queueMethods.size = function() {
  return this.count;

};