// Question Three

// Write a function that reverses a string

function reverseString(myString) {
    return myString.split("").reverse().join("");
}

console.log(reverseString("Mike"));