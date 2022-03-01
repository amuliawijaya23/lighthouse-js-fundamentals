const conditionalSum = function(values, condition) {
  // Your code here
  if (values && (values.length >= 1)) {
    let oddNum = [];
    let evenNum = [];
    for (let i = 0; i < (values.length); i++) {
      if (values[i] % 2 === 0) {
        evenNum.push(values[i]);
      } else {
        oddNum.push(values[i]);
      }
    }
    let sum = 0;
    if (condition === 'even') {
      for (let x = 0; x < (evenNum.length); x++) {
        sum += evenNum[x];
      }
      return sum;
    } else if (condition === 'odd') {
      for (let y = 0; y < (oddNum.length); y++) {
        sum += oddNum[y];
      }
      return sum;
    } else {
      return 'Invalid Condition'
    }
  } else {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));