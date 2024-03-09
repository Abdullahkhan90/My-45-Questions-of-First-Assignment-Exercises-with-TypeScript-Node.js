//  Written by: Hafiz Abdullah.

// Roll No: 00224647.

// Array for usernames.
let usernames: string[] = ['admin', 'Ali', 'Ahmed', 'Saad', 'Saif'];

// Checking user Availibility
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {

    // Removing all usernames from the array.
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}