

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj;
  if (this._storage[index] !== undefined) {
    var foundFlag = false;
    this._storage[index].forEach(function(eachObject) { 
      if (k in eachObject) {
        eachObject[k] = v;
        foundFlag = true;
      }
    });
    if (foundFlag === false) {
      obj = {};
      obj[k] = v;
      this._storage[index].push(obj);
    }
  }
  else {
    obj = {};
    obj[k] = v;
    this._storage[index] = [obj];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (k in this._storage[index][i]) return this._storage[index][i][k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (k in this._storage[index][i]) this._storage[index].splice(i, 1);
    break;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


