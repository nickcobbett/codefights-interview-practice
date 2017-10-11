//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

class Queue {
  constructor(val) {
    this.storage = [val];
  }

  pop() {
    return this.storage.pop();
  }

  push(val) {
    this.storage.unshift(val)
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  forEach(cb) {
    this.storage.forEach((val, i, arr) => {
      cb(val, i, arr);
    })
  }
}

function largestValuesInTreeRows(t) {
  if (!t) return [];

  var queue = [[t]];

  var levels = [];
  var level = 0;
  while (queue.length) {
    var nodes = queue.pop();
    var children = [];

    if (!levels[level]) {
      levels[level] = [];
    }

    nodes.forEach(node => {
      levels[level].push(node.value);
      if (node.left) {
        children.push(node.left);
      }
      if (node.right) {
        children.push(node.right);
      }
    });

    if (children.length) queue.unshift(children);

    level++;

  }
  console.log(levels)
  var filtered = levels.filter(level => level.length).map(arr => Math.max(...arr));
  return filtered;

}

var t =  {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    }
}
// console.log('test1',largestValuesInTreeRows(t)); // [1,2,4,3,5]

t = {
    "value": -1,
    "left": null,
    "right": null
}

// console.log('test2', largestValuesInTreeRows(t));

t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

// console.log('test4', largestValuesInTreeRows(t));

t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": {
            "value": -1,
            "left": {
                "value": 10,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

console.log('test5', largestValuesInTreeRows(t)); // [-1, 7, 1, 10]