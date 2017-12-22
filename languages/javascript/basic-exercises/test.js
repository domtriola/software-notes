const assert = require('assert');
const sinon = require('sinon');

const {
  unique,
  flatten,
  fizzBuzz,
  fibonacci,
} = require('./exercises.js');

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

describe('fibonacci()', () => {
  it('should return an empty array when n is 0', () => {
    const result = fibonacci(0);

    assert.deepEqual(result, []);
  });

  it('should return the correct result for n < 3', () => {
    const result = fibonacci(1);
    const result2 = fibonacci(2);

    assert.deepEqual(result, [1]);
    assert.deepEqual(result2, [1, 1]);
  });

  it('should return the correct result for larger values of n', () => {
    const result = fibonacci(10);

    assert.deepEqual(result, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
