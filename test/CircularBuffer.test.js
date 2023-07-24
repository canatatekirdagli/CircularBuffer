const CircularBuffer = require("../src/CircularBuffer");

describe("CircularBuffer", () => {
  test("can not popping from empty buffer", () => {
    const buffer = new CircularBuffer(5);
    const item = buffer.pop();
    expect(item).toBeUndefined();
  });

  test("push elements correctly", () => {
    const buffer = new CircularBuffer(3);
    buffer.push(1);
    expect(buffer.length).toBe(1);
    expect(buffer.buffer[0]).toBe(1);
  });

  test("pop elements correctly", () => {
    const buffer = new CircularBuffer(3);
    buffer.push(1);
    expect(buffer.pop()).toBe(1);
    expect(buffer.isEmpty()).toBe(true);
    expect(buffer.length).toBe(0);
  });

  test("should handle circular behavior correctly", () => {
    const buffer = new CircularBuffer(3);
    buffer.push(1);
    buffer.push(2);
    buffer.push(3);
    expect(buffer.length).toBe(3);

    buffer.pop();
    buffer.push(4);
    expect(buffer.length).toBe(3);

    buffer.push(5); // Overwrite
    expect(buffer.pop()).toBe(3);
    expect(buffer.pop()).toBe(4);
    expect(buffer.pop()).toBe(5);
    expect(buffer.isEmpty()).toBe(true);
    expect(buffer.length).toBe(0);
  });
});
