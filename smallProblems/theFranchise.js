const franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies());
