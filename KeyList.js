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
    if (this.length === 0) {
      return undefined;
    }

    let node = this.head;

    while (node["next"] !== null) {
      node = node["next"];
    }
    return node["value"];
  }

  remove(k) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head["value"] === k) {
      return this.removeFromHead();
    }

    let previous = this["head"];
    let node = previous["next"];

    while (node["value"] !== k) {
      node = node["next"];
    }

    while (previous["next"] !== node) {
      previous = previous["next"];
    }

    previous["next"] = node["next"];
    this.length--;

    return this;
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
