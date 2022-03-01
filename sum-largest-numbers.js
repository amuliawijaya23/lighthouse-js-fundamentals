const sumLargestNumbers = function(data) {
  // Put your solution here
  let num1 = 0;
  let num2 = 0;
  num1 = Math.max.apply(null, data);
  
  data.splice(data.indexOf(num1), 1);
  num2 = Math.max.apply(null, data);

  return num1 + num2;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));