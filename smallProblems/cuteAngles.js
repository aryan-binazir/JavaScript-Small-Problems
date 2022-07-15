/*
input: floating point number between 0 and 360 degrees
output: string representing angle in degrees,minutes, seconds

requirements
- use degree symbol to represent degrees
- use single quote to represent minutes
- double quote to represent seconds

*/
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degrees) {
  const degreesInt = Math.floor(degrees);
  const minutes = Math.floor((degrees - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degrees - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE
  );

return `${String(degrees) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"