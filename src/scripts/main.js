import '../stylesheets/normalize.css';
import '../stylesheets/typography.css';
import '../stylesheets/variables.css';
import '../stylesheets/main.css';

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    const node = this.listHead;

    if (node === null) {
      this.listHead = new Node(value);
      return;
    }

    const searchList = (node) => {
      if (node.nextNode === null) {
        node.nextNode = new Node(value);
        return;
      }

      searchList(node.nextNode);
    };

    return searchList(node);
  }

  prepend(value) {
    let node = this.listHead;

    if (node === null) {
      node = new Node(value);
      return;
    }

    const newHeadNode = new Node(value, node);
    this.listHead = newHeadNode;
  }

  at(index) {
    const node = this.listHead;
    let nodeIndex = 0;

    if (node === null) {
      return undefined;
    }

    if (index === undefined) {
      return this.listHead;
    }

    const searchList = (node, index) => {
      if (node === null) {
        return undefined;
      }

      if (index === nodeIndex) {
        return node;
      }

      nodeIndex++;

      return searchList(node.nextNode, index);
    };

    return searchList(node, index);
  }

  pop() {
    const node = this.listHead;

    if (node === null) {
      return;
    }

    const searchList = (node, lastNode = null) => {
      if (node.nextNode === null) {
        node = null;
        lastNode.nextNode = null;
        return;
      }

      return searchList(node.nextNode, node);
    };

    return searchList(node);
  }

  get size() {
    const node = this.listHead;
    let size = 0;

    if (node === null) {
      return size;
    }

    const searchList = (node) => {
      size++;

      if (node.nextNode === null) {
        return size;
      }

      return searchList(node.nextNode);
    };

    return searchList(node);
  }

  get head() {
    return this.listHead === null ? undefined : this.listHead;
  }

  get tail() {
    const node = this.listHead;

    if (node === null) {
      return undefined;
    }

    const searchList = (node) => {
      if (node.nextNode === null) {
        return node;
      }

      return searchList(node.nextNode);
    };

    return searchList(node);
  }
}
