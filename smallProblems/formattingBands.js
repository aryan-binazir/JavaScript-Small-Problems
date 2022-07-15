function processBands(bands) {
  bands.map(band => {
    band.country = "Canada";
    band.name = capitalizeName(band);
    band.name = removeDots(band);
  });
  return bands;
}

function removeDots(band) {
  let nameArr = band.name.split('');
  nameArr = nameArr.filter(char => char !== ".");
  return nameArr.join('');
}


function capitalizeName(band) {
  let nameArr = band.name.split(' ');
  nameArr = nameArr.map(word => word[0].toUpperCase() + word.slice(1));
  return nameArr.join(' ');
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]