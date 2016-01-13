var Stack = function() {
  var someInstance = {};

  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    if (stackSize > 0) {
      stackSize--;
      var tempVar = storage[stackSize];
      delete storage[stackSize];
      return tempVar;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
