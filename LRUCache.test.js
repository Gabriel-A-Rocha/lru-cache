const { Cache } = require("./LRUCache");

test("should receive a size parameter", () => {
  const cache = new Cache(3);
  expect(cache.size).toBe(3);
});

test("should accept a string number as parameter", () => {
  const cache = new Cache("5");
  expect(cache.size).toBe(5);
});

test("cache size should default to 5", () => {
  const cache = new Cache();
  expect(cache.size).toBe(5);
});
