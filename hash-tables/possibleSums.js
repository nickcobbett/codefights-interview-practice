function possibleSums(coins, quantity) {
  var combos = {};
  var sums = {};
  var count = 0;

  coins.forEach((coin, i) => {
    var coinStr = coin.toString();

    if (!combos[coinStr]) {
      combos[coinStr] = eval(coin);
    }

    if (!sums[coinStr]) {
      count++;
      sums[coinStr] = eval(coin);
    }

    for (var q = 1; q <= quantity[i]; q++) {
      for (var key in combos) {
        var combo = `${key}+${coinStr}`; // big strings, make em smaller use different value for the sum

        var sum = eval(combo);
        if (key !== coinStr || q > 1) { // && !combos[combo] && !sums[sum]
          // console.log(key, coinStr)
          if (!combos[combo] && !sums[sum.toString()]) {
            combos[combo] = sum;
            sums[sum.toString()] = sum;
            count++;
          }
        }
      }
    }

  });

  // console.log('sums', sums);
  // console.log('combos', combos);
  return count;
}

var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log('test1: ', possibleSums(coins, quantity)); // 9
coins = [10, 50, 100, 500];
quantity = [5, 3, 2, 2];
console.log('test2: ', possibleSums(coins, quantity)); // 122
coins = [1];
quantity = [5];
console.log('test3: ', possibleSums(coins, quantity)); // 5
coins = [1, 1];
quantity = [2, 3];
console.log('test4: ', possibleSums(coins, quantity)); // 5
coins = [1, 2];
quantity = [50000, 2];
// console.log('test5: ', possibleSums(coins, quantity)); // 50004