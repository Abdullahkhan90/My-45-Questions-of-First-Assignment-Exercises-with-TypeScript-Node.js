"use strict";
// Written by: Hafiz Abdullah.
// Date: 21-2-2024.
Object.defineProperty(exports, "__esModule", { value: true });
class Shirt {
    constructor(size = "large", message = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }
}
function make_shirt(size = "medium", message = "I love TypeScript") {
    return new Shirt(size, message);
}
// Creating a large shirt with the default message.
const largeShirt = make_shirt("large");
console.log("large Shirt:", largeShirt);
// Creating a medium shirt with the default message.
const mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);
// Creating a custom shirt with a different message and size.
const customShirt = make_shirt("small", "Typescript is awesome!");
console.log("Custom Shirt:", customShirt);
