function possibleSums(coins, quantity) {
  var combos = {};
  var sums = {};
  var count = 0;
  // loop through coins
  // for each coin, for each quantity of coin add to sums and to each sum in there
  //increase count.

  coins.forEach((coin, i) => {
    var coinString = coin.toString();

    if (!combos[coinString]) {
      combos[coinString] = eval(coin);
    }

    if (!sums[coinString]) {
      sums[coinString] = eval(coin);
      count++;
    }

    for (var q = 1; q <= quantity[i]; q++) {
      for (var key in combos) {
        var sum = eval(combos[key]) + eval(coinString);
        var combo = `${key}+${coinString}`;
        if (key !== coin.toString()) {
          // && !sums[sum.toString()] && !combos[combo]
          if (!combos[combo]) {
            combos[combo] = eval(combo);
          }
          if (!sums[eval(combo)]) {
            sums[eval(combo)] = sum;
            count++;
          }
        }
      }
      console.log('coinstr', coinString)
      coinString+= `+${coin.toString()}`;
    }

  });

  console.log('sums', sums);
  console.log('combos', combos);
  return count;
}

var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log('test1: ', possibleSums(coins, quantity)); // 9



coins = [10, 50, 100, 500]
quantity = [5, 3, 2, 2]
// console.log('test2: ', possibleSums(coins, quantity)); // 122


coins = [1, 2]
quantity = [50000, 2]
// console.log('test5: ', possibleSums(coins, quantity)); // 50004