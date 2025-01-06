const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Class representing a single node in a linked list.
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Implement the Queue with a given interface via linked list.
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; 
    this.tail = null; 
  }

  /**
   * Returns the underlying linked list.
   * @returns {ListNode} The head of the linked list.
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Adds a value to the end of the queue.
   * @param {*} value The value to add.
   */
  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail) {
      this.tail.next = newNode; 
    }
    this.tail = newNode; 

    if (!this.head) {
      this.head = newNode; 
    }
  }

  /**
   * Removes and returns the value from the head of the queue.
   * @returns {*} The value of the removed node, or undefined if the queue is empty.
   */
  dequeue() {
    if (!this.head) {
      return undefined; 
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null; 
    }

    return value;
  }
}

module.exports = {
  Queue,
};
