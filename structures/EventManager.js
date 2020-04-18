const Event = require("./Event");

class EventManager {
  constructor () {
    this.events = {};
  }

  on(event, callback) {
    if (this.events[event]) {
      this.events[event].push(new Event(event, callback));
    } else {
      this.events[event] = [new Event(event, callback)];
    }
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return null;
    const promises = [];
    
    for (const event of this.events[eventName]) {
      promises.push(event.run(...args));
    }

    return promises;
  }
}

module.exports = EventManager;