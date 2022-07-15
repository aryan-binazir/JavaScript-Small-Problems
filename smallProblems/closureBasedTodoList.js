function makeList() {
  let list = [];
  return function todoList(item = '') {
    if(item === '') {
      if (list.length === 0) {
        console.log('The list is empty!')
      } else {
        list.forEach(item => console.log(item));
      }
    } else {
      let index = list.indexOf(item);
      if(index === -1) {
        list.push(item);
        console.log(`${item} has been added!`);
      } else {
        list.splice(index, 1);
        console.log(`${item} was removed!`);
      }
    } 
  }
}

let list = makeList();

// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book