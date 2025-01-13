// Question Two
// Write a function in JavaScript to check if a given password contains repetitive numbers (e.g., 111, 222, 333, etc.).
// The function should return true if repetitive numbers are found and false otherwise.
// For example:
// •	Input: "pass123111word" → Output: true (repetitive numbers: 111)
// •	Input: "secure456password" → Output: false

// Solution:
// The function should take a string as an argument and return a boolean value.
// The function should iterate through the string.
// The function should check if any three consecutive numbers are the same.
// If any three consecutive numbers are the same, the function should return true.
// If no three consecutive numbers are the same, the function should return false.
// The function should return false if the string has less than three characters.
// The function should return false if the string has less than three numbers.
// The function should return false if the string has no numbers.
// The function should return false if the string has no repetitive numbers.

function checkPassword(myString) {
    if (myString.length < 3) {
        return false;
    }
    let numbers = "0123456789";
    let count = 1;
    for (let i = 0; i < myString.length; i++) {
        if (numbers.includes(myString[i])) {
            if (myString[i] === myString[i + 1] && myString[i] === myString[i + 2]) {
                return true;
            }
        }
    }
    return false;
}       

console.log(checkPassword("pass123111word")); // Output: true