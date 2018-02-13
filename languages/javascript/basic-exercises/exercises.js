// Each
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// Reduce
Array.prototype.myReduce = function(callback, seed) {
  let result = seed || this[0];

  let index = seed === undefined ? 1 : 0;

  while (index < this.length) {
    result = callback(result, this[index]);
    index++;
  }

  return result;
}

// Unique
const unique = array => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
};

// Flatten - functional approach
const flatten = (array, result = []) => {
  const retrieveHead = el => Array.isArray(el) ? el[0] : el;
  const retrieveTail = el => Array.isArray(el) ? el.slice(1) : [];
  const flattenIfArray = el => Array.isArray(el) ? flatten(el) : el;

  const head = retrieveHead(array);
  const tail = retrieveTail(array);

  return array.length > 0 ?
    flatten(tail, result.concat(flattenIfArray(head))) :
    result;
};

// Fizz-Buzz
function fizzBuzz(max) {
  const result = [];

  for (let i = 1; i <= max; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }

  return result;
}

// Fibbonacci
function fibonacci(n) {
  const result = [1, 1];

  if (n < 3) return result.slice(0, n);

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// Merge Sort
function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.concat(right));
}

module.exports = {
  unique,
  flatten,
  fizzBuzz,
  fibonacci,
  mergeSort,
};
