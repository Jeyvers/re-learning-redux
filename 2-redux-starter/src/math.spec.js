// spec represents a test file
// math represents the math module.

// it defines a test, first argument specifies test name, second argument specifies test function.
import { isEven } from './math';

describe('isEven', () => {
  it('isEven should return true if given an even number', () => {
    // Function under test (SUT)
    const result = isEven(2);
    // Assertion of return value, toEqual is a matcher.
    expect(result).toEqual(true);
  });

  it('isEven should return false if given an odd number', () => {
    // Function under test (SUT)
    const result = isEven(1);
    // Assertion of return value, toEqual is a matcher.
    expect(result).toEqual(false);
  });
});
