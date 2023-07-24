class CircularBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.length = 0;
  }

  isEmpty() {
    if (this.front === -1 && this.rear === -1) {
      return true;
    } else {
      return false;
    }
  }

  push(data) {
    this.buffer[this.rear] = data;
    this.rear = (this.rear + 1) % this.capacity;
    if (this.length === this.capacity) {
      this.front = this.rear;
    } else {
      this.length++;
    }
    return data;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const data = this.buffer[this.front];
      this.buffer[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.length--;
      if (this.length === 0) {
        this.front = -1;
        this.rear = -1;
      }
      return data;
    }
  }

  size() {
    return this.length;
  }
}

module.exports = CircularBuffer;
