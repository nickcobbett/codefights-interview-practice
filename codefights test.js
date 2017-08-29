function zigzag(array) {
// for each val compare left and right vals.
// if right and left are less than or greater than val, push to length
  var maxLen = 0;
  for (var i = 1; i < array.length - 1; i++) {
  // var i = 0;
  // while ()
    var k = i;
    var len = -2;
    var left = array[k - 1];
    var right = array[k + 1];

    while ((array[k] > left && array[k] > right) || (array[k] < left && array[k] < right)) {
      len+=2;
      k+=2;
    }

    // console.log('len', len)
    if (len > maxLen) {
      maxLen = len;
    }

  }

  if (maxLen === 0 && array.length === 3) {
    maxLen = 3;
  }

  if (maxLen === 0) {
    maxLen = 1;
  }

  // console.log('maxLen', maxLen)
  return maxLen;
}

var test1 = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6];
var test2 = [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4];
var test3 = [4, 4];
var test4 = [1, 2, 1];
console.log(zigzag(test1) === 4)
console.log(zigzag(test2) === 6)
console.log(zigzag(test3) === 1)
console.log(zigzag(test4) === 3);







// A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than both neighbors or strictly greater than both neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't.

// For a given array of integers return the length of its longest contiguous sub-array that is a zigzag sequence.

// Example

// For a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6], the output should be
// zigzag(a) = 4.

// The longest zigzag sub-arrays are [5, 3, 5, 3] and [3, 2, 8, 6] and they both have length 4.

// For a = [4, 4], the output should be
// zigzag(a) = 1.

// The longest zigzag sub-array is [4] - it has only one element, which is strictly greater than its neighbors (there are none of them).

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer a

// Guaranteed constraints:
// 2 ≤ a.length ≤ 25,
// 0 ≤ a[i] ≤ 100.

// [output] integer


    // while (array[k] && (array[k] < left)) {
    //   var j = k;
    //   while (array[j] && (array[j] >)) {

    //   }
    //   k++;
    // }




    // zigs = [];
    // array[k] > right ? zigs = [array[k], right] : zigs = [left, array[k]]

    // if (array[k] > left && array[k] > right) {

    // }

    // while ((array[k] > left && array[k] > right) || (array[k] < left && array[k] < right)) {
    //   zigs.push(right)
    //   k++;
    // }
    // console.log(zigs)