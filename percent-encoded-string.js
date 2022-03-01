const urlEncode = function(text) {
  let output = '';
  
  if (text[0] !== ' ') {
    for (let i = 0; i < text.length; i++) {
      text[i] === ' ' ? output += '%20' : output += text[i];
    }
    return output;
  } else {
    for (let i = 1; i < text.length; i++) {
      text[i] === ' ' ? output += '%20' : output += text[i];
    }
    return output;
  }
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));