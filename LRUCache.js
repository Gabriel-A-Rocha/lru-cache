class Cache {
  size = 5;
  hash = {};

  constructor(size) {
    typeof size === "number" && (this.size = size);
    typeof size === "string" && (this.size = Number(size));
  }
}

module.exports = { Cache };
