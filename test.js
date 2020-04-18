const { EventManager } = require("./index");
const Tester = new EventManager();

Tester.on("test", (parameter) => console.log(parameter));

Tester.emit("test", "It works!");