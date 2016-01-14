var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    for (var i = this.count; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = value;
    this.count++;
  },

  dequeue: function(){
    if (this.count > 0) {
      var cache = this.storage[--this.count];
      delete this.storage[this.count];
      return cache;
    }
  },

  size: function(){
    return this.count;
  }
};


