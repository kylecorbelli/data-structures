var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {}

  someInstance.pop = queueMethods.pop;
  someInstance.push = queueMethods.push;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {
  pop: function() {

  },
  push: function() {

  },
  size: function() {

    return this.counter;
  }
};

var test = Queue();
console.log(test.size());