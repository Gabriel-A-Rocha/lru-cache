const KeyList = require("./KeyList");

class Cache {
  maxSize;
  hash = new Map();
  keyList = new KeyList();

  constructor({ size }) {
    this.maxSize = Number(size);
  }

  add(obj) {
    if (this.hash.size > this.maxSize) {
      const lru = this.keyList.getLRU();
      this.hash.delete(lru);
    }
    const [key, value] = Object.entries(obj)[0];
    this.hash.set(key, value);
    this.keyList.add(obj);
    return;
  }

  clear() {
    this.hash.clear();
  }

  remove(key) {
    this.hash.get(key) && this.hash.delete(key);
  }

  read(key) {
    return this.hash.get(key);
  }
}

const cache = new Cache({ size: 3 });
cache.add({ key1: "value1" });
const response = cache.hash.get("key1");

module.exports = { Cache };
