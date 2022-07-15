function triangle(maxNum) {
  for (let stars = 1; stars <= maxNum; stars++) {
    console.log(' '.repeat(maxNum - stars) + '*'.repeat(stars))
  }
}

triangle(5);
triangle(9);
triangle(13);
