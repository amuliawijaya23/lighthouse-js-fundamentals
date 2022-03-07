const merge = function (firstArray, secondArray) {
  let output = [];
  for (let x = 0; x < firstArray.length; x++) {
    output.push(firstArray[x]);
  }
  for (let i = 0; i < secondArray.length; i++) {
    output.push(secondArray[i]);
  }
  return output.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);