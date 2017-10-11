var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var output = storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    //delete storage[count - 1];

    if (count > 0) {
      count--;
    }
    return output;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
