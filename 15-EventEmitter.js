const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response", () => {
  console.log("data received")
})

customEmitter.on("response", (name, id) => {
  console.log("some other logic", name, id)
})

customEmitter.emit("response", "Michail", 12)
