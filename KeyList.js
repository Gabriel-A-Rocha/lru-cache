class KeyList {
  length;
  head;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(k) {
    const node = {
      value: k,
      next: this.head,
    };
    this.head = node;
    this.length++;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getLRU() {
    let node = this.head;
    while (node["next"] !== null) {
      node = node["next"];
    }
    return node["value"];
  }

  removeLRU() {
    let node = this.head;
    let previous = this.head;

    while (node["next"] !== null) {
      node = node["next"];
    }

    while (previous["next"] !== node) {
      previous["next"] = null;
    }
  }

  remove(k) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      return this.removeFromHead();
    }

    let previous = this["head"];
    let node = previous["next"];

    while (node) {
      if (node["value"] === k) {
        break;
      }
      previous = node;
      node = node["next"];
    }

    if (node === "null") {
      return undefined;
    }

    previous["next"] = node["next"];
    this.length--;

    return node["value"];
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head["value"];
    this.head = this.head["next"];
    this.length--;
    return value;
  }
}

module.exports = KeyList;
