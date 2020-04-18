class Event {
  constructor (name, callback) {
    this.name = name;
    this.callback = callback;
  }

  run (...args) {
    this.callback(...args);
  }
}

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
    const results = [];
    
    for (const event of this.events[eventName]) {
      results.push(event.run(...args));
    }

    return results;
  }
}