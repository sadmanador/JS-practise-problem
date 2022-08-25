// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
let x = 12;
let y = 90;
function sumOFNumber (a , b) {
    return a + b;
}
document.getElementById("sumOfParameter").innerHTML = sumOFNumber(x, y);


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
let polash = 90;
let shobuj = 90;
function sameValueNType (a, b) {
    return a === b;
}
document.getElementById("comparingTypeValue").innerHTML = sameValueNType(polash, shobuj);


// Write a function that takes a value as argument
// Return the type of the value
function checkType (a) {
    return typeof a;
}
document.getElementById("checkType").innerHTML = checkType(shobuj);


// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function getNth (a, n) {
    return a[n -1];
}
document.getElementById("nthValue").innerHTML = getNth("adsfghlk", 2);


// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function remove3Char (a) {
    return a.slice(3);
}
document.getElementById("removeChar").innerHTML = remove3Char("qwertyuip");


// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function extractLastChar (a) {
    return a.slice(-3);
}
document.getElementById("extractLastChar").innerHTML = extractLastChar("qwertyuip");


// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function extractFirstChar (a) {
    return a.slice(0, 3);
}
document.getElementById("extractFirst").innerHTML = extractFirstChar("qwertyuip");


// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function firstHalf (a) {
    return a.slice(0, a.length / 2);
}
document.getElementById("firstHalf").innerHTML = firstHalf("qwertyuip")


// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeLastChar (a) {
    return a.slice(0, -3);
}
document.getElementById("removeLastChar").innerHTML = removeLastChar("qwertyuip");