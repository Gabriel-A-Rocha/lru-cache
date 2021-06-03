const { Cache } = require("./LRUCache");

const cache = new Cache({ size: 3 });

beforeEach(() => {
  cache.clear();
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
});

test("should receive a size parameter", () => {
  expect(cache.maxSize).toBe(3);
});

test("should be able to add a new hash", () => {
  expect(cache.hash.get("key1")).toEqual("value1");
});

test("should be able to clear the hash object", () => {
  cache.clear();
  expect(cache.hash.size).toEqual(0);
});

test("should be able to remove an entry", () => {
  cache.remove("key1");
  expect(cache.hash.size).toEqual(1);
});

test("should not remove a non existing entry", () => {
  cache.remove("key5");
  expect(cache.hash.size).toEqual(2);
});

test("should read a valid key and return the value", () => {
  const response = cache.read("key2");
  expect(response).toEqual("value2");
});

test("should delete the LRU if new entry overflows size", () => {
  cache.add({ key3: "value3" });
  cache.add({ key4: "value4" });
  console.log(cache.hash);
  expect(cache.hash.size).toBe(3);
});
