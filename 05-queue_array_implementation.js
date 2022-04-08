export class queue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.arr = new Array(this.size);
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  isFull() {
    return this.rear === this.size - 1;
  }

  enqueue(val) {
    if (this.isFull()) {
      return 'Queue is full';
    } else if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear++;
    }

    this.arr[this.rear] = val;
    return val + ' Inserted successfully';
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front++;
    }

    return 'dequeue';
  }

  frontEl() {
    if (this.isEmpty()) return 'Queue is empty';
    else return this.arr[this.front];
  }

  rearEl() {
    if (this.isEmpty()) return 'Queue is empty';
    else return this.arr[this.rear];
  }

  print() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      let str = '';
      for (let i = this.front; i <= this.rear; i++) {
        str += this.arr[i] + ' ';
      }
      return str;
    }
  }

  queueSize() {
    if (this.isEmpty()) return 'Queue is empty';
    if (this.rear === this.front) return 1;

    return this.rear - this.front + 1;
  }
}

// const q = new queue(5);

// console.log('~ q.isFull()', q.isFull());
// console.log('~ q.isEmpty()', q.isEmpty());

// console.log('#'.repeat(50));
// console.log('~ q.enqueue(10)', q.enqueue(10));
// console.log('~ q.enqueue(20)', q.enqueue(20));
// console.log('~ q.enqueue(30)', q.enqueue(30));
// console.log('~ q.enqueue(40)', q.enqueue(40));
// console.log('~ q.enqueue(50)', q.enqueue(50));
// console.log('~ q.enqueue(60)', q.enqueue(60));
// console.log('~ q.enqueue(70)', q.enqueue(70));
// console.log('#'.repeat(50));

// console.log('~ q.print()', q.print());
// console.log('~ q.dequeue()', q.dequeue());
// console.log('~ q.queueSize()', q.queueSize());
// console.log('~ q.print()', q.print());
// console.log('#'.repeat(50));

// console.log('~ q.frontEl()', q.frontEl());
// console.log('~ q.rearEl()', q.rearEl());

// console.log('#'.repeat(50));
// console.log('~ q.dequeue()', q.dequeue());
// console.log('~ q.dequeue()', q.dequeue());
// console.log('~ q.dequeue()', q.dequeue());

// console.log('~ q.print()', q.print());
// console.log('~ q.frontEl()', q.frontEl());
// console.log('~ q.rearEl()', q.rearEl());

// console.log('~ q.dequeue()', q.dequeue());
// console.log('~ q.dequeue()', q.dequeue());
