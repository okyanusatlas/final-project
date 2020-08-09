const {assert} = require('chai');
const calculate = require('./../calculate');
const {NOT_DIVIDABLE_BY_0, WRONG_INPUT} = require('./../errors');

describe('Calculate', () => {
  it('should return Error if divided by 0', () => {
    const result = calculate("7/0");
    assert.deepEqual(result, NOT_DIVIDABLE_BY_0);
  });
  it('should calculate as expected', () => {
    const result = calculate("3+4");
    const expected = "7"
    assert.deepEqual(result, expected);
  });
  it('should return a string', () => {
    const result = typeof calculate("3+4");
    const expected = "string"
    assert.deepEqual(result, expected);
  });
  it('should return 0 if multiplied by 0', () => {
    const result = calculate("7*0");
    const expected = "0"
    assert.deepEqual(result, expected);
  });
  it('should respect parenthesis', () => {
    const result = calculate("(3+4)*2");
    const expected = "14"
    assert.deepEqual(result, expected);
  });
  it('should return max 2 numbers after comma', () => {
    const result = calculate("7/3");
    const expected = "2.33"
    assert.deepEqual(result, expected);
  });
  it('should return an error if input doesnt make sense', () => {
    const result = calculate("((**--+)");
    assert.deepEqual(result, WRONG_INPUT);
  });
});
