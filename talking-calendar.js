const talkingCalendar = function(date) {
  let year = date[0] + date[1] + date[2] + date[3];
  let month = date[5] + date[6];
  let day = date[8]+ date[9];

  if (day === '01') {
    day = '1st';
  } else if (day === '02') {
    day = '2nd';
  } else if (day === '03') {
    day = '3rd';
  } else if (day > 3 && day < 10) {
    day = day[1] + 'th';
  } else {
    day = day + 'th';
  }

  switch (month) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));