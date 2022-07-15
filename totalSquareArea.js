const totalArea = function totalArea(measurements) {
  let areas = measurements.filter(pair => pair[0] === pair[1]);
  areas = areas.map(entry => {
    let height = entry[0];
    let width = entry[1];

    return height * width;
  });
  return areas.reduce((totalArea, area) => totalArea + area);
};

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141