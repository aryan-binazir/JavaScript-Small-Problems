function greetings (nameArr, infoObj) {
  let name = 'Hello, ' + nameArr.join(' ') + '!';
  let info = 'Nice to have a ' + infoObj.title + ' ' + infoObj.occupation + ' around.';

  console.log(name + ' ' + info);
}



console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output - Hello, John Q Doe! Nice to have a Master Plumber around.
