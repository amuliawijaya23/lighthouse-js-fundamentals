const smartGarbage = function (trash, bins) {
  let bin = {
    waste: 0,
    recycling: 0,
    compost: 0
  }
  if (trash === 'waste') {
    bin.waste = bins.waste + 1;
    bin.recycling = bins.recycling;
    bin.compost = bins.compost;
  } else if (trash === 'recycling') {
    bin.waste = bins.waste;
    bin.recycling = bins.recycling + 1;
    bin.compost = bins.compost;
  } else {
    bin.waste = bins.waste;
    bin.recycling = bins.recycling;
    bin.compost = bins.compost + 1;
  }
  return bin;
}
smartGarbage('compost', { waste: 1, recycling: 1, compost: 2 });