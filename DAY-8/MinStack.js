class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    push(val) {
        this.stack.push(val);
        
        if(this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }
    pop() {
        let removed = this.stack.pop();
        if(removed === this.getMin()) {
            this.minStack.pop();
        }
        return removed;
    }
    getMin() {
        return this.minStack.length === 0 ? null : this.minStack[this.minStack.length - 1];
    }
    top() {
        return this.isEmpty() ? null : this.stack[this.stack.length-1];
    }
}

// Using functions
function MinStack2() {
    const stack = [];
    const minStack = [];
    return {
      isEmpty: function() {
          return stack.length === 0;
      },
      push: function(val) {
        stack.push(val);
          
          if(minStack.length === 0 || val <= this.getMin()) {
               minStack.push(val);
          }
      },
      pop: function() {
        let removed =  stack.pop();
        if(removed === this.getMin()) {
            minStack.pop();
        }
        return removed;
      },
      getMin: function() {
          return minStack.length === 0 ? null : minStack[minStack.length - 1];
      },
      top: function() {
          return  this.isEmpty() ? null :  stack[stack.length-1];
      }
    }
  }