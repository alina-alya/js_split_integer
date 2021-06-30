'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof splitInteger()).toBe('object');
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toStrictEqual([8]);
  });

  // write more tests here

  it(`the parts of the 'num' should be as close as possible`, () => {
    expect(splitInteger(17, 4)).toStrictEqual([4, 4, 4, 5]);
  });

  it(`the integers in the result array should be ordered ASC`, () => {
    expect(splitInteger(32, 6)).toStrictEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return an empty array if num = 3, parts = 'string'`, () => {
    expect(splitInteger(3, 'string')).toStrictEqual([]);
  });

  it(`should return an empty array if num = 'string', parts = 5`, () => {
    expect(splitInteger('string', 5)).toStrictEqual([]);
  });

  it(`should return an empty array if num = 'string', parts = 'string'`, () => {
    expect(splitInteger('string', 'string')).toStrictEqual([]);
  });
});
