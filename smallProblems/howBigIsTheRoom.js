let readlineSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let roomLength = readlineSync.question("What is the length of the room in metres?\n");
let roomWidth = readlineSync.question("What is the width of the room in metres?\n");
roomLength = parseInt(roomLength, 10);
roomWidth = parseInt(roomWidth,10);
area_sqm = roomWidth * roomLength;

console.log(`The area of the room is ${area_sqm.toFixed(2)} square metres (${(area_sqm * SQMETERS_TO_SQFEET).toFixed(2)} square feet)`)