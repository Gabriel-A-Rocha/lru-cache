const KeyList = require("./KeyList");

class Cache {
  size = 5;
  hash = new Map();
  lru = "";
  keyList = new KeyList(this.size);

  constructor({ size }) {
    typeof size === "number" && (this.size = size);
    typeof size === "string" && (this.size = Number(size));
  }

  add(obj) {
    if (this.hash.size === this.size) {
      // this.remove(this.lru);
    }
    const [key, value] = Object.entries(obj)[0];
    this.hash.set(key, value);
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

module.exports = { Cache };
