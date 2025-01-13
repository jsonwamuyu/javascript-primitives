// Question Three

// Write a function that reverses a string


// Function to reverse a string
function reverseString(str) {
    //trim any white space
    trimStr = str.trim();
    // now split the string into an array
    var splitString = trimStr.split("");
    // reverse the array
    let reversedArray = splitString.revese()
    // join the array back to a string
    let reversedString = reversedArray.join("");

    return reversedString;
}

console.log(reverseString("Hello World!")); // Output: "!dlroW olleH"