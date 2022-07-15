const lsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Launch School");
  }, 2000);
})

lsPromise.then((value) => {
  console.log(value);
});