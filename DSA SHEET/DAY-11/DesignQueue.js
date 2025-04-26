class MinQueue {
    constructor() {
        this.queue = [];
        this.min_queue = [];
    }
    enqueue(val) {
        this.queue.push(val)
        if(this.min_queue.length == 0 || val <= this.getMin()) {
            this.min_queue.push(val);
        }
    }
    dequeue() {
        return this.isEmpty() ? -1 : this.queue.shift();
    }
    peek() {
        return this.isEmpty() ? -1 : this.queue[0];
    }
    getMin() {
        return this.isEmpty() ? -1 : this.min_queue[this.min_queue.length-1];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}