const calculateChange = function(total, cash) {
  let youGet = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  let changeType = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickle', 'penny'];
  const changeValue = [2000, 1000, 500, 200, 100, 25, 10, 5 ,1];

  let change = cash - total;

  for (let i = 0; i < changeValue.length; i++) {
    let changeAmount = Math.floor(change/changeValue[i]);

    if (changeAmount > 0) {
      youGet[changeType[i]] = changeAmount;
      change = change % changeValue[i]
    }
  }
  Object.keys(youGet).forEach(function(key) {
    if (youGet[key] === 0) {
      delete youGet[key];
    }
  });
  return youGet;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));