const KeyList = require("./KeyList");

test("should instantiate a keylist", () => {
  const keyList = new KeyList();
  expect(keyList.head).toBeNull();
});

test("should add a key to the head", () => {
  const keyList = new KeyList();
  keyList.addToHead("newKey");
  expect(keyList.head).toEqual({ key: "newKey", next: null });
});

test("should add a second key to the head", () => {
  const keyList = new KeyList();
  keyList.addToHead("firstKey");
  keyList.addToHead("secondKey");
  expect(keyList.length).toEqual(2);
  expect(keyList.head.key).toEqual("secondKey");
});

test("should clear the list", () => {
  const keyList = new KeyList();
  keyList.addToHead("firstKey");
  keyList.clear();
  expect(keyList.head).toBeNull();
});

test("should return the LRU Key", () => {
  const keyList = new KeyList();
  keyList.addToHead("firstKey");
  keyList.addToHead("secondKey");
  const lru = keyList.getLru();
  expect(lru).toEqual("firstKey");
});
