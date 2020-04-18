class Event {
  constructor (name, callback) {
    this.name = name;
    this.callback = callback;
  }

  run (...args) {
    return new Promise ((resolve, reject) => {
      try {
        resolve(this.callback(...args));
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = Event;