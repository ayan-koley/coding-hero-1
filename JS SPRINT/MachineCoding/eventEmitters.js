class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    // if this name event is doesn't exist so return
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    for (let cb of this.events[eventName]) {
      cb(...args);
    }
  }
}

const events = new EventEmitter();
const cb = () => {console.log("Hellow world")}
events.on("update", cb);
events.emit("update", "name");
events.off("update", cb);
events.emit("update", "name");