// Written by: Hafiz Abdullah.
//  Roll No: 00224647

// Array for Usernames.
const Usernames: string[] = ['admin', 'Ali', 'Ahmed', 'Saad', 'Saif'];

// Using foreach method
Usernames.forEach (username => {
    // Step 3: Inside the loop, special greeting for 'admin' , For Others printing a simple greeting.
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?') ;
    } else {
      console.log(`Hello  {usernames}, thank you for logging in again.`);  
    }
});