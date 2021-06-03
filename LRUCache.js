const KeyList = require("./KeyList");

class Cache {
  maxSize;
  hash = new Map();
  keyList = new KeyList();

  constructor({ size }) {
    this.maxSize = Number(size);
  }

  add(keyValueObj) {
    const [key, value] = Object.entries(keyValueObj)[0];

    if (this.hash.size < this.maxSize) {
      this.hash.set(key, value);
      this.keyList.add(key);
      return;
    }

    const lru = this.keyList.getLRU();
    this.remove(lru);
    this.hash.set(key, value);
    this.keyList.add(key);
    return;
  }

  clear() {
    this.hash.clear();
  }

  remove(key) {
    if (this.hash.get(key)) {
      this.hash.delete(key);
      this.keyList.remove(key);
    }
  }

  read(key) {
    const value = this.hash.get(key);

    if (value) {
      this.keyList.remove(key);
      this.keyList.add(key);
    }
    return value;
  }
}

/* const cache = new Cache({ size: 3 });

cache.add({ key1: "value1" });
cache.add({ key2: "value2" });
cache.add({ key3: "value3" });
cache.add({ key4: "value4" });

const response = cache.hash;
console.log(response); */

module.exports = { Cache };
