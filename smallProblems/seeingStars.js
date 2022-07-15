const STAR = '*';

function star(n) {
  let starLines = [];
  let innerGap = (n - 3) / 2;
  let outerGap = 0;

  do {
    starLines.push(' '.repeat(outerGap) + STAR + ' '.repeat(innerGap) + STAR + ' '.repeat(innerGap)  + STAR +
      ' '.repeat(outerGap));
    innerGap -= 1;
    outerGap += 1;
  }
  while (innerGap >= 0);

  printStarLines(starLines);
  console.log(STAR.repeat(n));
  printStarLines(starLines.reverse());
}

function printStarLines(lines) {
  lines.forEach(line => console.log(line));
}

star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/


star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/