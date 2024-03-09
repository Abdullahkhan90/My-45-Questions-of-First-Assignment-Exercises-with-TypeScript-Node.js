"use strict";
// Written by: Hafiz Abdullah
// Date: 21-2-2024
// Mobile ke liye object banaya hai.
class Mobile {
    constructor(Model, Colour, Performance) {
        this.Model = 'Model';
        this.Colour = 'Colour';
        this.Condition = 'Condition';
    }
}
// Mobile ke liyay instances banaay hain.
const Iphone = new Mobile("Iphone 15 Pro", "White", "Good");
const Oppo = new Mobile("Oppo A37", "Golden", "Good");
const Samsung = new Mobile("Samsung Note 10", "Black", "Good");
// Print information about the Mobiles.
console.log(Iphone);
console.log(Oppo);
console.log(Samsung);
