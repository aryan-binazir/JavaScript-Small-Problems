const swapName = (inputName) => {
  let nameArr = inputName.split(' ');

  return `${nameArr[1]}, ${nameArr[0]}`;
};

console.log(swapName('Joe Roberts'));