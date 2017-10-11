var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  

 // this.someInstance = {};
  this.storage = {};
  this.count = 0;
  
};


Stack.prototype.push = function(value) {
  
  this.storage[this.count] = value;
  this.count++;
};
// storage { 0: a}
Stack.prototype.pop = function () {
  if (this.count > 0) {
    this.count--;
  }
  var output = this.storage[this.count];
  delete this.storage[this.count];
  return output;

};
// storage = {};
Stack.prototype.size = function () {
  return this.count;
};


