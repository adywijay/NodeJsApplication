//'use strict';
let user1 = {
  name: "John"
};

Object.defineProperty(user1, "name", {
  writable: false
});

console.info(user1.name = "Pete");
