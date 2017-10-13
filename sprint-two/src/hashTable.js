

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] !== undefined) {
    this._storage[index].push([k, v]);
  }
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
   
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var output = undefined;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      output = this._storage[index][i][1];
    }
  }
  return output;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var toBeRemoved = undefined;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//[0,1,2]=> 0 = [[dog,fred]] we want to add [cat,sue] to 0 [[dog,fred],[cat,sue]]

