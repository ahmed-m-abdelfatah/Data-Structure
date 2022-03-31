export class stack {
  constructor(size) {
    this.top = -1;
    this.size = size;
    this.arr = new Array(size);
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.arr.length - 1;
  }

  push(element) {
    if (!this.isFull()) {
      this.arr[++this.top] = element;
      return true + ' ' + element;
    } else {
      return 'Stack is full';
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.arr[this.top--];
    }
  }

  peek() {
    return this.arr[this.top];
  }

  display() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    } else {
      let current = this.top;

      while (current >= 0) {
        console.log(this.arr[current--]);
      }

      return 'Stack is displayed';
    }
  }

  stackSize() {
    return this.top + 1;
  }

  clear() {
    this.top = -1;
    this.arr = [];

    return 'Stack is cleared';
  }
}

// let myStack = new stack(5);
// console.log('~ myStack', myStack);
// console.log('#'.repeat(50));

// console.log('~ myStack.push(10)', myStack.push(10));
// console.log('~ myStack.push(20)', myStack.push(20));
// console.log('~ myStack.push(30)', myStack.push(30));
// console.log('~ myStack.push(40)', myStack.push(40));
// console.log('~ myStack.push(50)', myStack.push(50));
// console.log('~ myStack.push(60)', myStack.push(60));
// console.log('~ myStack.push(70)', myStack.push(70));

// console.log('#'.repeat(50));
// console.log('~ myStack.display()', myStack.display());
// console.log('#'.repeat(50));

// console.log('~ myStack.peek()', myStack.peek());
// console.log('~ myStack.isEmpty()', myStack.isEmpty());
// console.log('~ myStack.isFull()', myStack.isFull());

// console.log('#'.repeat(50));
// console.log('~ myStack.pop()', myStack.pop());
// console.log('~ myStack.pop()', myStack.pop());
// console.log('#'.repeat(50));

// console.log('~ myStack.isEmpty()', myStack.isEmpty());
// console.log('~ myStack.isFull()', myStack.isFull());

// console.log('#'.repeat(50));
// console.log('~ myStack.display()', myStack.display());
// console.log('#'.repeat(50));

// console.log('~ myStack.clear()', myStack.clear());

// console.log('#'.repeat(50));
// console.log('~ myStack.display()', myStack.display());
// console.log('#'.repeat(50));
