var Queue = function() {
  var someInstance = {};

  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    stackSize++;
    for (var i = stackSize; i > 0; i--) {
      storage[i] = storage[i - 1]
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    if (stackSize > 0) {
      stackSize--;
      var cache = storage[stackSize];
      delete storage[stackSize];
      return cache;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
