function compareVersions(version1, version2) {
  let version1Arr = sanitizeArr(version1.split('.'));
  let version2Arr = sanitizeArr(version2.split('.'));
  if (illegalChar(version1Arr) || illegalChar(version2Arr)) return null;
  let index = 0;

  while (true) {
    let v1digit = version1Arr[index];
    let v2digit = version2Arr[index];
    if ((v1digit === undefined) && (v2digit === undefined)) {
      break;
    } else if ((v1digit > v2digit || ((v1digit !== undefined) &&
      (v2digit === undefined)))) {
      return 1;
    } else if ((v2digit > v1digit) || ((v1digit !== undefined) &&
      (v2digit === undefined))) {
      return -1;
    }
    index += 1;
  }
  return 0;
}

function sanitizeArr(arr) {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === '0') {
      arr.pop();
    } else {
      break;
    }
  }
  return arr;
}

function illegalChar(arr) {
  for (let index = 0; index <= arr.length - 1; index += 1) {
    let currentChar = Number(arr[index]);
    if ((typeof currentChar === 'number' || currentChar === '.') && !(Number.isNaN(Number(currentChar)))) {
      continue;
    } else {
      return true;
    }
  }
  return false;
}

console.log(compareVersions('0.1', '1.0')); // -1
console.log(compareVersions('1.0', '0.1')); // 1
console.log(compareVersions('1.1', '1.1')); // 0
console.log(compareVersions('2.2.2.4', '2.2.2.4.0.0.0')); // 0
console.log(compareVersions('134.2.0.0.0.4', '134.2.0.0')); // 1
console.log(compareVersions('','')); // 0
console.log(compareVersions('1.2.3.0.0','a.3.4.1')); // null
console.log(compareVersions('134.2.0.0.0.0', '134.2.0.0')); // 0