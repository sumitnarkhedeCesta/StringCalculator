
const { add } = require('./stringCalculator');

test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});

test('single number returns the number', () => {
    expect(add("1")).toBe(1);
});

test('two numbers return their sum', () => {
    expect(add("1,5")).toBe(6);
});

test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});