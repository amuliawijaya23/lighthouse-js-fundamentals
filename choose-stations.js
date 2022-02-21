const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for (const stationName of stations) {
    capacity = stationName[1];

    if (capacity >= 20) {
      venueType = stationName[2];

      if (venueType === 'school' || venueType === 'community centre') {
        goodStations.push(stationName[0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));