"use strict";
// Written by : Hafiz Abdullah.
// Assignment No: 44.
function makeSandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("-" + item));
    console.log("Enjoy your Sandwich!\n");
    console.log("let's eat your Sandwich!\n");
    console.log("finish your Sandwich!\n");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Meat", "Chicken"]);
makeSandwich(["Peanut Butter", "Jelly"]);
