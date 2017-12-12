const assert = require('assert');
const sinon = require('sinon');

require('./exercises.js');

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
