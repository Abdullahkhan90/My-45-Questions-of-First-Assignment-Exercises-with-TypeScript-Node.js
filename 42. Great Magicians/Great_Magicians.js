"use strict";
// Written by : Hafiz Abdullah.
// Assignment No: 42.
// Array Magicians.
const magicians = ["Saad", "Michael", "David", "Hassan"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
