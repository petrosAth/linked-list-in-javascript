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

  contains(value) {
    const node = this.listHead;

    if (node === null) {
      return undefined;
    }

    const searchList = (node) => {
      if (node.value === value) {
        return true;
      }

      if (node.nextNode === null) {
        return false;
      }

      return searchList(node.nextNode);
    };

    return searchList(node);
  }

  find(value) {
    const node = this.listHead;
    let index = 0;

    const searchList = (node) => {
      if (node === null) {
        return null;
      }

      if (node.value === value) {
        return index;
      }

      index++;

      return searchList(node.nextNode);
    };

    return searchList(node);
  }

  insertAt(value, index) {
    const node = this.listHead;
    const newNode = new Node(value);
    let nodeIndex = 0;

    const searchList = (node, lastNode = null) => {
      if (node === null) {
        this.listHead = newNode;
        return;
      }

      if (index === 0) {
        newNode.nextNode = node;
        this.listHead = newNode;
        return;
      }

      if (nodeIndex === index) {
        newNode.nextNode = node;
        lastNode.nextNode = newNode;
        return;
      }

      nodeIndex++;

      searchList(node.nextNode, node);
    };

    return searchList(node);
  }

  removeAt(index) {
    const node = this.listHead;
    let nodeIndex = 0;

    if (node === null) {
      return;
    }

    const searchList = (node, lastNode) => {
      if (node === null) {
        return;
      }

      if (nodeIndex === index) {
        if (index === 0) {
          this.listHead = node.nextNode;
        } else {
          lastNode.nextNode = node.nextNode;
        }

        node = null;

        return;
      }

      nodeIndex++;

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

  get toString() {
    const node = this.listHead;

    if (node === null) {
      return undefined;
    }

    let listString = `( ${node.value} )`;

    const searchList = (node) => {
      if (node === null) {
        listString += ' -> null';
        return listString;
      }

      listString += ` -> ( ${node.value} )`;

      return searchList(node.nextNode);
    };

    return searchList(node.nextNode);
  }
}
