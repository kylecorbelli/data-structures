var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    this.counter++;
    for (var i = this.counter; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = value;
  },
  dequeue: function() {
    if (this.counter > 0) {
      this.counter--;
      var temp = this.storage[this.counter];
      delete this.storage[this.counter];
      return temp;
    }
  },
  size: function() {
    return this.counter;
  }
};

var test = Queue();
console.log(test.size());