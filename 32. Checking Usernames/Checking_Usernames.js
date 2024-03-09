"use strict";
// Written by: Hafiz Abdullah.
// Roll No: 00224647
// Current Users Array.
const current_users = ['Faizan', 'Nofil', 'Ebaad', 'Basit', 'Ayaan'];
// New_Users Array.
const new_users = ['Nofil', 'Basit', 'Shaheer', 'Yasir', 'Zaid'];
// Loop through new_users List.
for (let new_user of new_users) {
    // Convert new_user to lowercase for case intensitivity.
    const lowercase_new_user = new_user.toLowerCase();
    // Checking Username already exists in current_users or not.
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        // Username already exists.
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        // Username is available.
        console.log(`The username '${new_user}' is available.`);
    }
}
