function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '. ' + this.visitedStatus() + '.';
    },
    visitCountry() {
      this.visited = true;
    },
    visitedStatus() {
      if (this.visited === true) {
        return `I have visited ${this.name}`;
      } else {
        return `I have not visited ${this.name}`;
      }
    }
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa',true);

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

console.log(canada.visited);