function reverse(string) {
  let outputStr = '';

  for (let index = string.length - 1; index >= 0; index -= 1) {
    outputStr += string[index];
  }
  return outputStr;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"