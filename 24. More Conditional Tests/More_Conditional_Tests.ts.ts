// Written by: Hafiz Abdullah
// Date: 21-2-2024

// Equality Inequality Test.
console.log("Equality test with strings:", ("apple" as string) === "apple");
console.log("Inequality test with strings:", ("apple" as string) !== "orange")

// Testing lowercase function.
console.log("Lowercase function test:", "Hello".toLowerCase() === "hello");

// All are Tests.
console.log("Equality test with numbers:", 5 === 5); //equality
console.log("Inequality test with numbers:", (10 as number) !== 5); //inequality
console.log("Greater than test:", 10 > 5); //greater than
console.log("Less than test:", 5 < 10);//less than
console.log("Greater than or equal to test:", 10 >= 10);//greater than or equal to
console.log("Less than or equal to test:", 5 <= 10);//less than or equal to

// Tests of "and" and "or"
console.log("And operator test:", true && true); 
console.log("Or operator test:", true || false);

// Test whether an item is in an array
const fruits :string[] = ["mango", "watermelon", "strawberry"];
console.log("Test 'mango' in the array:", fruits.includes("mango"));

// Test whether an item is not in an array
console.log("Testing 'strawberry' is not in array:", !fruits.includes("strawberry"));