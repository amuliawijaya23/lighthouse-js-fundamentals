const loopyLighthouse = function (range, multiples, word) {
  for (let x = range[0]; x <= range[1]; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] !== 0) {
      console.log(word[0]);
    } else if (x % multiples[1] === 0 && x % multiples[0] !== 0) {
      console.log(word[1]);
    } else if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(word[0] + word[1]);
    } else {
      console.log(x);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);