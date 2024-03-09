"use strict";
// Version-3.
// Using object mapping.
alienColor = "red";
const pointMap = {
    "green": 5,
    "yellow": 10,
    "red": 15
};
const points = pointMap["red"];
if (points !== undefined) {
    console.log(`The player earned ${points} points.`); // if not filled to ye chalega.
}
else {
    console.log("Unknown alien color.");
}
