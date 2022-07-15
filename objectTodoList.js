function makeList() {
  const todos = [];
  return {
    add(item) {
      todos.push(item);
      console.log(`${item} added!`)
    },
    list() {
      todos.forEach(item => console.log(item));
    },
    remove(item) {
      todos.splice(todos.indexOf(item), 1);
      console.log(`${item} removed!`)
    },
  };
}



let list = makeList();

list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn