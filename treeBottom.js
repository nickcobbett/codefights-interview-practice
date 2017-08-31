var Node = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function treeBottom(str) {

  var tree = new Node(str[1]);
  str = str.slice(3);
  // console.log(str);

  var leftNodeClosed = false;
  var buildTreeFromString = (node, str) => {
    // console.log('currentNode', node);
    if (str[0] === '(') {
      if (str[1] !== ')') {
        if (!leftNodeClosed) {
          node.left = new Node(str[1]);
          buildTreeFromString(node.left, str.slice(3));
        } else {
          node.right = new Node(str[1]);
          buildTreeFromString(node.right, str.slice(3));
        }
      } else {
        leftNodeClosed = !leftNodeClosed;
      }
    }
    if (str[0] === ' ') {
      console.log('no')
    }
    if (str[0] === ')') {
     console.log('no')
    }
  };

  buildTreeFromString(tree, str);

  console.log('tree', tree);
}

var tree1 = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))";
var tree1ExpectedOutput = [5, 11, 4];
// var tree1Actual = treeBottom(tree1);
// console.log('tree1', tree1Actual);

var tree2 = '(2 (1 () ()) (3 () ())'
var tree2ExpectedOutput = [2, 3];
var tree2Actual = treeBottom(tree2);
console.log('tree2', tree2Actual);

var tree3 = '(1 () ())'
var tree3ExpectedOutput = [1];
// var tree3Actual = treeBottom(tree3);
// console.log('tree3', tree3Actual);


// tree = tree.replace(/\)|\)/g, "]");
  // var testStr = '(1)'
  // console.log(testStr.slice(2))

// If the string starts with '(', it starts a tree, following 'A' is the root
// If it is, e.g., 'B', that is a leaf
// If it is '(', recurse
// If next is ')', close off the node started above