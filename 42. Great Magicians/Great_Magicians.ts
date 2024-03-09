// Written by : Hafiz Abdullah.
// Assignment No: 42.

// Array Magicians.
const magicians: string[] = ["Saad", "Michael", "David", "Hassan"];

function make_great(magicians: string[]): void {
   for (let i = 0; i < magicians.length; i++) {
     magicians[i] = "The Great " + magicians[i];
   }
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

make_great(magicians);
show_magicians(magicians);
