// Question Four
// Write a function in JavaScript to check if a given string is a pangram.
// A string is considered a pangram if it contains every letter of the English alphabet at least once, 
// regardless of case.
// Example:
// •	Input: "The quick brown fox jumps over the lazy dog" → Output: true
// •	Input: "Hello, world!" → Output: false


// Solution:
// The function should take a string as an argument and return a boolean value.
// The function should convert the string to lowercase.
// The function should iterate through all the letters of the alphabet.
// The function should check if each letter is present in the string.
// If all the letters are present in the string, the function should return true.
// If any letter is missing, the function should return false.



function pangram(myString) {
    let allLetters = "abcdefghijklmnopqrstuvwxyz";
    myString = myString.toLowerCase();
    //loop thro the alphabets and check if each leter is in the provided string
    // if any letter is not in the string, return false
    //
    for (let i = 0; i < allLetters.length; i++) {
        if (myString.indexOf(allLetters[i]) === -1) {
            return false;
        }
    }
    return true;
}
