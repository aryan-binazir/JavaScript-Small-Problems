/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded',() => {
  let classifications = document.querySelector('#animal-classifications');
  let animals = document.querySelector('#animals');
  let clearButton = document.querySelector('#clear')

  const CORRESPONDING_OPTIONS = {
    classifications: {
      Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
      'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
      'Cold-blooded': ['Salmon', 'Turtle'],
      Mammal: ['Bear', 'Whale'],
      Bird: ['Ostrich'],
      Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    },
    animals: {
      Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
      Turtle: ['Vertebrate', 'Cold-blooded'],
      Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
      Salmon: ['Vertebrate', 'Cold-blooded'],
      Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
      Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
    },
  };

  classifications.addEventListener('change', () => {
    let selected = isSelected(classifications).text;
    setNewOptions(animals, CORRESPONDING_OPTIONS['classifications'][selected]);
  });

  animals.addEventListener('change', () => {
    let selected = isSelected(animals).text;
    setNewOptions(classifications, CORRESPONDING_OPTIONS['animals'][selected]);
  });

  clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    setNewOptions(classifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
    setNewOptions(animals,  ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);
  });

  function setNewOptions({options}, newOptions) {
    options.length = 0;
    newOptions.forEach((value, index) => {
      options[index] = new Option(value);
    });
  }

  function isSelected(list) {
    let listToFilter = Array.prototype.slice.call(list);
    let selectedNode = listToFilter.filter(node => node.selected);
    return selectedNode[0];
  }
});