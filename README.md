# Features
**NodeJS**
- Unlimited event listeners on any specific event.
- Upon emit, it returns an array of promises with the listener call, resolving with the response or rejected with error.
- Unlimited parameters to any event listener.

**Browser**
- Unlimited event listeners on any specific event.
- Unlimited parameters to any event listener.
- Emit returns an array of return statements from every event listener.
# Usage
**NodeJS:**
```js
const { EventManager } = require("event-manager");
const Target = new EventManager();

Target.on("hit", (message, points) => {
  console.log(message + points + ".");
});

Target.emit("hit", "Dude got ", 34);
```
** Browser:**
```html
<script src="../node_modules/event-manager/webpack.js">
<script>
  const Target = new EventManager();

  Target.on("hit", (message, points) => {
    console.log(message + points + ".");
  });
</script>
```
