const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("Your name is Rahul Singh");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is Aditya Singh");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is Swati Singh");
// });

// event.emit(`sayMyName`); // creating an event

event.on("checkPage", (sc, msg, msg1) => {
  console.log(`Status code ${sc} and the page is ${msg} ${msg1}`); //! Functiom define
});

event.emit("checkPage", 200, "shi h tu?", "ok"); //! function call
