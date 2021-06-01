const { Cache } = require("./LRUCache");

test("should receive a size parameter", () => {
  const cache = new Cache({ size: 3 });
  expect(cache.size).toBe(3);
});

test("should accept a string number as parameter", () => {
  const cache = new Cache({ size: "5" });
  expect(cache.size).toBe(5);
});

test("should be able to add a new hash", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  expect(cache.hash["key1"]).toEqual("value1");
});
