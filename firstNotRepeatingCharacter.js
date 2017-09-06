function firstNotRepeatingCharacter(s) {
  var accum = {
    ones: [],
    dups: []
  }

  var chars = s.split('').reduce((prev, next, i) => {
    console.log(prev)
    if (prev.ones.includes(next)) {
      var dup = prev.ones.splice(prev.ones.indexOf(next), 1)[0];
      prev.dups.push(dup);
    } else if (!prev.dups.includes(next)) {
      prev.ones.push(next);
    }
    return prev;
  }, accum);

  // console.log(chars)
  return chars.ones[0] || '_';
  // console.log(chars);
}

var s1 = "abacabad";
// console.log(firstNotRepeatingCharacter(s1)); // 'c'

var s2 = "abacabaabacaba";
// console.log(firstNotRepeatingCharacter(s2)); // '_'

var s3 = "bcccccccb";
console.log(firstNotRepeatingCharacter(s3)); // '_'

// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.