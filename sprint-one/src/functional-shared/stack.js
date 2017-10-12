var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.storage = {};
  someInstances.count = 0;
  extend(someInstances, stackMethods);

  return someInstances;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {

  this.storage[this.count] = value;
  this.count++;

};



stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  return this.storage[this.count];
};



stackMethods.size = function() {

  return this.count;

};
