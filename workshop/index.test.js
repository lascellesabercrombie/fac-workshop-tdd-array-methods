// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should work on arrays of strings", () => {
  const result = map(["make", "me", "uppercase"], (x) => x.toUpperCase());
  equal(result[0], "MAKE");
})

test("map() should return a new array", () => {
  const result = map([1, 2, 3], (x) => x);
  notEqual(result, [1, 2, 3]);
})

// testing filter()

test('filter should return an array the same size if all elements meet the condition', () => {
  const result = filter([1, 2, 3, 4], (x) => x > 0);
  equal(result.length, 4);
})

test('filter should return an array containing only elements that meet the condition', () => {
  const result = filter([1, 2, 3, 4], (x) => x%2 == 0);
  equal(result[0], 2);
})

//testing every()

test('every should return a boolean value', () => {
  const result = every([1, 2, 3, 4], (x) => x)
  equal(typeof(result), 'boolean');
})

test('every should return true if all values match condition', () => {
  const result = every([1, 2, 3, 4], (x) => x)
  equal(result, true);
})

test('every should return false if one value does not match the condition', () => {
  const result = every([1, 2, 3, 4], (x) => x > 1)
  equal(result, false);
})

//testing some()

test('some() should return a boolean value', () => {
  const result = some([1, 2, 3, 4], (x) => x)
  equal(typeof(result), 'boolean');
})

test('some() should return true if one value matches condition', () => {
  const result = some([1, 2, 3, 4], (x) => x > 3)
  equal(result, true);
})

test('some() should return false if no values match the condition', () => {
  const result = some([1, 2, 3, 4], (x) => x > 4)
  equal(result, false);
})

//testing find()

test('find() should return a single value', () => {
  const result = find([1, 2, 3, 4], (x) => x == 2);
  equal(typeof(result), 'number');
})
//NB: this doesn't work for undefined

test('find should return an element that matches the condition', () => {
  const result = find([1, 2, 3, 4], (x)=> x == 3);
  equal(result, 3)
})

test('find() should return false if no element matches condition', () => {
const result = find([1, 2, 3, 4], (x)=> x * 3 == 15);
equal(result, undefined)
})

test('find() should return first element to match condition if multiple elements match', () => {
const result = find([15, 1, 5, 3, 2, 10], (x) => x%5 == 0);
equal(result, 15);
})

//testing reduce()

test('reduce() should return a single value', () => {
const result = reduce([1, 2, 3], (total, x) => total + x, 0);
equal(typeof(result), 'number');
})
//does not work for undefined


test('reduce() with an addition function should return the sum of all the elements', () => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(result, 6);
  })

test('reduce() should apply reducer with things other than addition', () => {
  const getMax = (a, b) => Math.max(a, b)
  const result = reduce([1, 2, 3], getMax, 0);
  equal(result, 3);
})

test('reduce() should work without an initial value', () => {
  const array = [15, 16, 17, 18, 19];
  const getSum = (a, b) => a + b;
  const result = reduce(array, getSum);
  equal(result, 85);
})

test('reduce() should work with an initial value other than 0', () => {
  const array = [15, 16, 17, 18, 19];
  const getMin = (a, b) => Math.min(a, b);
  const result = reduce(array, getMin);
  equal(result, 15);
})

test('reducing an empty array should return initial value', () => {
const array = [];
const getSum = (a, b) => a + b;
const result = reduce(array, getSum, 10);
equal(result, 10);
})

test('reduce() should work with strings', () => {
  const array = [':', ')'];
  const getConcat = (a, b) => a + '-' + b;
  const result = reduce(array, getConcat);
  equal(result, ':-)');
  })

//testing flat()

test('flat() should return an array', () => {
  const array = [];
  const result = flat(array);
  equal(Array.isArray(result), true);
})
//not specific to array

test('flat() should return a flat array from a nest of depth 1', () => {
  const array = [1, 2, 3, [4, 5, 6]];
  const result = flat(array);
  console.log(result);
  console.log(result.length)
  equal(result.length, 6);
})

test('flat() should return a flat array from a nest of depth 2 if depth == 2', () => {
  const array = [1, 2, 3, [4, 5, [6]]];
  const result = flat(array, 2);
  console.log(result);
  console.log(result.length)
  equal(result.length, 6);
})

