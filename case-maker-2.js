const makeCase = function(input, casing) {
  let output = '';
  let finalOutput = '';
  let result = '';
  let cases = [];
  let finalResult = '';
  let upperCase = '';
  let lowerCase = '';


  if (Array.isArray(casing)) {
    for (let caseName of casing) {
      cases.push(caseName)
    }
  } else {
    cases.push(casing);
  }

  const camelCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      input[i-1] === ' ' ? output = input[i].toUpperCase() : output = input[i];
      finalOutput += output;
    }
    for (let j = 0; j < finalOutput.length; j++) {
      finalOutput[j] === ' ' ? result += '' : result += finalOutput[j];
    }
  };

  const pascalCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      input[i-1] === ' ' ? output = input[i].toUpperCase() : output = input[i];
      finalOutput += output;
    }
    for (let j = 0; j < finalOutput.length; j++) {
      finalOutput[j] === ' ' ? result += '' : result += finalOutput[j];
    }
    var cap = result[0].toUpperCase();
    result = cap + result.slice(1);
  };

  const snakeCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      input[i] === ' ' ? finalOutput += '_' : finalOutput += input[i];
    }
  };

  const kebabCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      input[i] === ' ' ? output += '-' : output += input[i];
    }
  };

  const titleCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      input[i-1] === ' ' ? output = input[i].toUpperCase() : output = input[i];
      finalOutput += output;
    }
    var cap = finalOutput[0].toUpperCase();
    result = cap + finalOutput.slice(1);
  };

  const vowelCasing = function (input) {
    for (let i = 0; i < input.length; i++) {
      (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") ? output += input[i].toUpperCase() : output += input[i];
    }
  };

  const upperCasing = function (input) {
    upperCase = input.toUpperCase();
  };

  const lowerCasing = function (input) {
    lowerCase = input.toLowerCase();
  };

  for (var i = 0; i < cases.length; i++) {
    if (cases[i] === 'camel') {
      camelCasing(input);
      finalResult = result;
      input = output;
    } else if (cases[i] === 'pascal') {
      pascalCasing(input);
      finalResult = result;
      input = output;
    } else if (cases[i] === 'snake') {
      snakeCasing(input);
      finalResult = finalOutput;
      input = finalOutput;
    } else if (cases[i] === 'kebab') {
      kebabCasing(input);
      finalResult = output;
      input = output;
    } else if (cases[i] === 'title') {
      titleCasing(input);
      finalResult = result;
      input = output;
    } else if (cases[i] === 'vowel') {
      vowelCasing(input);
      finalResult = output;
      input = output;
    } else if (cases[i] === 'upper') {
      upperCasing(input);
      finalResult = upperCase;
      input = upperCase;
    } else {
      lowerCasing(input);
      finalResult = lowerCase;
      input = lowerCase;
    }
  };
  return finalResult;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));