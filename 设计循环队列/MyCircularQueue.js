/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.lst = new Array(k);
    this.start = 0;
    this.count = 0;
};

MyCircularQueue.prototype.endIndex = function () {
    return (this.start + this.count) % this.lst.length;
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
    }
    this.lst[this.endIndex()] = value;
    this.count++;
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if(this.isEmpty()) {
        return false;
    }
    this.start++;
    this.start %= this.lst.length;
    this.count--;
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if(this.isEmpty()) {
        return -1;
    }
    return this.lst[this.start];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if(this.isEmpty()) {
        return -1;
    }
    return this.lst[(this.start + this.count - 1) % this.lst.length];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.lst.length === this.count;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
var obj = new MyCircularQueue(3)
console.log(obj);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.isFull());
console.log(obj.deQueue());
console.log(obj.enQueue(4));
console.log(obj.Rear());