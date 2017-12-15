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

module.exports = {
  unique,
  flatten
};
