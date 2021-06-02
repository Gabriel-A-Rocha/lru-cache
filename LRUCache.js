class Cache {
  size = 5;
  hash = new Map();

  constructor({ size }) {
    typeof size === "number" && (this.size = size);
    typeof size === "string" && (this.size = Number(size));
  }

  add(obj) {
    /* if (this.getHashSize() === this.size) {
      delete this.hash[this.lru];
    } */
    const [key, value] = Object.entries(obj)[0];
    this.hash.set(key, value);
    this.setLru();
  }

  getHashSize() {
    return this.hash.size;
  }

  setLru() {
    const oldestKey = Object.keys(this.hash)[0];
    this.lru = oldestKey;
  }

  clear() {
    this.hash = {};
  }

  remove(key) {
    if (this.hash[key]) {
      delete this.hash[key];
    }
  }

  read(key) {
    const match = this.hash[key];
    if (match) {
      return match;
    }
  }
}

module.exports = { Cache };
