const { Cache } = require("./LRUCache");

test("should receive a size parameter", () => {
  const cache = new Cache({ size: 3 });
  expect(cache.size).toBe(3);
});

test("should accept a string number as parameter", () => {
  const cache = new Cache({ size: "5" });
  expect(cache.size).toBe(5);
});

test.only("should be able to add a new hash", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  expect(cache.hash.get("key1")).toEqual("value1");
});

test("should retrieve the current size of the hash", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  expect(cache.getHashSize()).toBe(2);
});

test("should set lru as the first object position (oldest)", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  cache.add({ key3: "value3" });
  expect(cache.lru).toEqual("key1");
});

test("should reassign lru properly on size overflow", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  cache.add({ key3: "value3" });
  cache.add({ key4: "value4" });
  expect(cache.lru).toEqual("key2");
});

test("should be able to clear the hash object", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  cache.clear();
  expect(cache.hash).toEqual({});
});

test("should be able to remove an entry", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  cache.remove("key1");
  expect(cache.hash).toEqual({ key2: "value2" });
});

test("should not remove a non existing entry", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  cache.remove("key5");
  expect(cache.hash).toEqual({ key1: "value1", key2: "value2" });
});

test("should read a valid key and return the value", () => {
  const cache = new Cache({ size: 3 });
  cache.add({ key1: "value1" });
  cache.add({ key2: "value2" });
  const response = cache.read("key2");
  expect(response).toEqual("value2");
});
