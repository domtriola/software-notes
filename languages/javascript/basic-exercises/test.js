const assert = require('assert');
const sinon = require('sinon');

const { unique, flatten, fizzBuzz } = require('./exercises.js');

describe('Array', () => {
  describe('#myEach()', () => {
    it('should call callback for each element', () => {
      const array = [1, 2, 3];
      const callback = sinon.spy(el => el);

      array.myEach(callback);

      for (let i = 0; i < array.length; i++) {
        assert(callback.calledWith(array[i]));
      }
    });
  });

  describe('#myReduce()', () => {
    it('should reduce an array down to a result given a callback', () => {
      const array = [1, 2, 3];
      const callback = (el, accum) => el + accum;

      const result = array.myReduce(callback);

      assert.equal(result, 6);
    });

    it('should accept an optional seed argument', () => {
      const array = [1, 2, 3];
      const callback = (el, accum) => el + accum;

      const result = array.myReduce(callback, 4);

      assert.equal(result, 10);
    });
  });
});

describe('unique()', () => {
  it('should return an empty array if given an empty array', () => {
    const array = [];
    const result = unique(array);

    assert.deepEqual(result, []);
  });

  it('should reduce duplicates', () => {
    const array = [1, 2, 2, 3, 4, 3, 5];
    const result = unique(array);

    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });
});

describe('flatten()', () => {
  it('should return the same array if it is one-dimensional', () => {
    const array = [1, 2, 3, 4];
    const result = flatten(array);

    assert.deepEqual(result, [1, 2, 3, 4]);
  });

  it('should flatten a two-dimensional array', () => {
    const array = [1, [2, 3, 4]];
    const result = flatten(array);

    assert.deepEqual(result, [1, 2, 3, 4]);
  });

  it('should flatten a multi-dimensional array', () => {
    const array = [1, [[2], [3, 4, []]]];
    const result = flatten(array);

    assert.deepEqual(result, [1, 2, 3, 4]);
  });
});

describe('fizzBuzz()', () => {
  it('should return an array with fizz-buzzified numbers', () => {
    const result = fizzBuzz(20);

    assert.deepEqual(
      result,
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13,
       14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']
    );
  });
});
