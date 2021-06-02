class KeyList {
  length;
  head;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  addToHead(inputKey) {
    const newKey = { key: inputKey };
    newKey.next = this.head;
    this.head = newKey;
    this.length++;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getLru() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node.key;
  }
}

module.exports = KeyList;
