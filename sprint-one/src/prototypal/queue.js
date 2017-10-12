var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.count;
};

queueMethods.enqueue = function (value) {
  
  this.storage[this.count] = value;


  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    this.count--;
  }
  var output = this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return output;

};
