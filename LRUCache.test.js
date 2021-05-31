const { LRUCache } = require("./LRUCache");

test("LRUCache should receive a size parameter", () => {
  const lruCache = new LRUCache(3);
  expect(lruCache.size).toBe(3);
});
