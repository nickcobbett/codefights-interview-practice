function swapLexOrder(str, pairs) {
  // while swap is still yielding new results go through all the pairs
  // swap letters and add to swaps and compare to maxStr
  var maxStr = str;
  var swaps = {};
  swaps[str] = 1;

  const replaceAt = (str, index, replacement) => {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
  }

  const swapLtrs = (str, pair) => {

    var str = str;
    var a = pair[0] - 1;
    var b = pair[1] - 1;
    var temp = str[a];

    str = replaceAt(str, a, str[b]);
    str = replaceAt(str, b, temp);

    return str;
  };

  var keepSearching = true;
  while (keepSearching && pairs.length) {
    pairs.forEach(pair => {
      for (var key in swaps) {
        keepSearching = false;
        str = swapLtrs(key, pair);
        if (str > maxStr) maxStr = str;
        if (!swaps[str]) keepSearching = true;
        swaps[str] = 1;
      }
    });
  }

  // console.log('swaps', swaps);
  console.log('maxStr', maxStr);
  return maxStr;
};


var str = "abdc";
var pairs = [[1,4], [3,4]];
// console.log('test1: ', swapLexOrder(str, pairs) === 'dbca');
str = "acxrabdz"
pairs = [[1,3], [6,8], [3,8], [2,7]];
// console.log('test3: ', swapLexOrder(str, pairs) === 'zdxrabca');
str = "z"
pairs = [];
// console.log('test4: ', swapLexOrder(str, pairs) === 'z');
str = "fixmfbhyutghwbyezkveyameoamqoi";
pairs = [[8,5],
 [10,8],
 [4,18],
 [20,12],
 [5,2],
 [17,2],
 [13,25],
 [29,12],
 [22,2],
 [17,11]];
// console.log('test6: ', swapLexOrder(str, pairs) === 'fzxmybhtuigowbyefkvhyameoamqei');

str = "lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv";
pairs = [[13,23],
 [13,28],
 [15,20],
 [24,29],
 [6,7],
 [3,4],
 [21,30],
 [2,13],
 [12,15],
 [19,23],
 [10,19],
 [13,14],
 [6,16],
 [17,25],
 [6,21],
 [17,26],
 [5,6],
 [12,24]];
console.log('test7: ', swapLexOrder(str, pairs) === 'lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv');