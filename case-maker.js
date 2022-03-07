const camelCase = function(input) {
  let output = '';
  let finalOutput = '';
  let result = '';
  for (let i = 0; i < input.length; i++) {
    input[i -1] === ' ' ? output = input[i].toUpperCase() : output = input[i];
    finalOutput += output;
  }
  for (let j = 0; j < finalOutput.length; j++) {
    finalOutput[j] === ' ' ? result += '' : result += finalOutput[j];
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));