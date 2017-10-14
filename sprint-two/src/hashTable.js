

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.filledSpaces = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this.filledSpaces + 1 > this._limit * 0.75) {
    this.resizeStorage(2); /// resizes storage to double the size
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] !== undefined) {
    this._storage[index].push([k, v]);
  }
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  }
  this.filledSpaces++;
};

HashTable.prototype.resizeStorage = function(doubleOrHalf) {

  var tempHash = new HashTable();
  tempHash._limit = this._limit * doubleOrHalf;
  tempHash._storage = LimitedArray(tempHash._limit);
  for ( var i = 0; i < this._limit; i++) {
    if (this._storage[i] !== undefined) {
      for (var j = 0; j < this._storage[i].length; j++) {
        var key = this._storage[i][j][0];
        var value = this._storage[i][j][1];
        tempHash.insert(key, value);
      }
    }
  }
  this._limit = tempHash._limit;
  this._storage = tempHash._storage;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var output = undefined;

  if (this._storage[index] !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        output = this._storage[index][i][1];
      }
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
  
  this.filledSpaces--;
  if (this.filledSpaces < this._limit * 0.25) {
    this.resizeStorage(0.5); /// resizes storage to 0.5 or half the size
  }

};

// To prevent excessive collisions, make your hashTable double in size as soon 
// as 75 percent of the spaces have been filled

// To save space, make sure the hashTable halves in size when space usage 
// falls below 25 percent


/*
 * Complexity: What is the time complexity of the above functions?
 */


