var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.pop = function(){
  if (this.count > 0) {
    this.count--;
    var cache = this.storage[this.count];
    delete this.storage[this.count];
    return cache;
  }
};
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.size = function(){
  return this.count;
};


