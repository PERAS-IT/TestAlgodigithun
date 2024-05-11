function max(array) {
  if (array.length == 0 && null) {
    return "wrong input";
  }
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

function secondMax(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    }
  }
  let diffArray = [];
  for (let i = 0; i < array.length; i++) {
    diffArray.push(maxNumber - array[i]);
  }
  let minDiff = diffArray[0];
  let minIndex = 0;
  Math.min(...minDiff);
}

function sumMax(array, numSum) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i <= array.length - numSum; i++) {
    for (let j = i; j < i + numSum; j++) {
      sum += array[j];
    }
    if (sum >= max) {
      max = sum;
    }
  }
  return max;
}
