const lsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Not Launch School");
  }, 2000);
})

lsPromise.then((value) => {
  console.log(value);
}).catch((value) => {
  console.log("Error: " + value);
});