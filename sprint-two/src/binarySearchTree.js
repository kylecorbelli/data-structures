var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value) {
    (function recurse(node) {
      if (value > node.value) {
        if (node.right) {
          recurse(node.right);
        } else {
          node.right = BinarySearchTree(value);
        }
      } else {
        if (node.left) {
          recurse(node.left);
        } else {
          node.left = BinarySearchTree(value);
        }
      }
    })(tree);
    // var valueArr = [];
    // // go through and extract all values recursevly from tree
    // (function recurse(node) {
    //   valueArr.push(node.value);
    //   if (node.left) recurse(node.left);
    //   if (node.right) recurse(node.right);
    // })(tree);
    // // sort the tree with the added value
    // valueArr.push(value);
    // valueArr.sort(function(a, b) {
    //   return a - b; 
    // });
    // // construct a new binary search tree
    // var reconstructedTree = (function makeNode(arr) {
    //   var midpointIndex = Math.floor((arr.length - 1) / 2);
    //   var newTree = BinarySearchTree(arr[midpointIndex]);
    //   var leftArr = arr.slice(0, midpointIndex);
    //   if (leftArr.length > 0) newTree.left = makeNode(leftArr);
    //   var rightArr = arr.slice(midpointIndex + 1);
    //   if (rightArr.length > 0) newTree.right = makeNode(rightArr);
    //   return newTree;
    // })(valueArr);
    // tree.value = reconstructedTree.value;
    // tree.left = reconstructedTree.left;
    // tree.right = reconstructedTree.right;
  };

  tree.contains = function(value) {

  };

  tree.depthFirstLog = function() {

  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */