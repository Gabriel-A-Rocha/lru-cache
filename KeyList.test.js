const KeyList = require("./KeyList");

test("should instantiate a keylist", () => {
  const keyList = new KeyList();
  expect(keyList.head).toBeNull();
});

test("should add a key to the head", () => {
  const keyList = new KeyList();
  keyList.add("newKey");
  expect(keyList.head).toEqual({ value: "newKey", next: null });
});

test("should add a second key to the head", () => {
  const keyList = new KeyList();
  keyList.add("firstKey");
  keyList.add("secondKey");
  expect(keyList.length).toEqual(2);
  expect(keyList.head.value).toEqual("secondKey");
});

test("should clear the list", () => {
  const keyList = new KeyList();
  keyList.add("firstKey");
  keyList.clear();
  expect(keyList.head).toBeNull();
});

test("should return the LRU Key", () => {
  const keyList = new KeyList();
  keyList.add("firstKey");
  keyList.add("secondKey");
  const lru = keyList.getLRU();
  expect(lru).toEqual("firstKey");
});

test("should delete a node sent as parameter", () => {
  const list = new KeyList();
  list.add("A1");
  list.add("A2");
  list.add("A3");
  const removedKey = list.remove("A2");
  expect(removedKey).toBe("A2");
});

test("should delete a node sent as parameter", () => {
  const list = new KeyList();
  list.add("A1");
  list.add("A2");
  const removedKey = list.removeFromHead();
  expect(removedKey).toBe("A2");
});
