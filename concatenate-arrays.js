let concat = function(arrayA, arrayB) {
  let arrayCombined = [];
  for (let i = 0; i < (arrayA.length); i++) {
    arrayCombined.push(arrayA[i]);
  }
  for (let x = 0; x < (arrayB.length); x++) {
    arrayCombined.push(arrayB[x]);
  }
  return arrayCombined;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);