const judgeVegetable = function (vegetables, metric) {
  let metricScore = [];
  let metrics = [];
  let highestScore = 0;
  let result = '';

  for(let i = 0 ; i < vegetables.length ; i++) {
  
  metrics = (Object.keys(vegetables[i]));
  
  for(let j = 0 ; j < metrics.length ; j++) {
    if(metrics[j] == metric) {
      metricScore.push(vegetables[i][metric]);
    }
  }
  highestScore = Math.max.apply(null,metricScore)
  for(let i = 0 ; i < vegetables.length ; i++) {
    if(highestScore == vegetables[i][metric]){
      result = vegetables[i]['submitter'];
      
    }
  }
  }
  return result;
  }

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));