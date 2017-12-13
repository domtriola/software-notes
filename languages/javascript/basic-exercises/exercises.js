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
}

module.exports = {
  unique
};
