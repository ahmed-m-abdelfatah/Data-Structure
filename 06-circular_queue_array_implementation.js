export class CircularQueue {
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
    // https://www.mathwarehouse.com/solved-problems/remainder-calculator/what-is-remainder-when-0-is-divided-by-5
    // 0/5 = 0 reminder(0)
    // 1/5 = 0 reminder(1)
    // 2/5 = 0 reminder(2)
    // 3/5 = 0 reminder(3)
    // 4/5 = 0 reminder(4)
    // 5/5 = 1 reminder(0)
    // 6/5 = 0 reminder(1)
    // 7/5 = 0 reminder(2)
    // 8/5 = 0 reminder(3)
    // 9/5 = 0 reminder(4)
    // 10/5 = 0 reminder(0)

    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(val) {
    if (this.isFull()) {
      return 'Queue is full';
    } else if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
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
      this.front = (this.front + 1) % this.size;
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

    return Math.abs(this.rear - this.front + 1);
  }
}

// const q = new CircularQueue(5);

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
