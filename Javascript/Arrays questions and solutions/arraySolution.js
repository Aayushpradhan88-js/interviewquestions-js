// // #1
// let array = function(input) {
//   if(toString.call(input) === '[Object Array]')
//    return true;
//    return false;
// }
// console.log(array('w3resource'));
// console.log(array([ 1, 2, 4, 0]));

// // #2
// var array_Clone = arra1 => arra1.slice(0);
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Question :- return the sum of two Numbers
function addtition(a,b) {
  if(typeof a !== "number" || typeof b !== "number") {
    return "Add the two numbers";
  }
  return a+b
}

console.log(addtition(2,3));

// Convert Minutes into second
// Function to convert minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}

// Prompting user to enter minutes
const minutes = prompt("Enter the number of minutes:");

// Converting minutes to seconds
const seconds = minutesToSeconds(parseInt(minutes));

// Displaying the result
console.log(`${minutes} minutes is equal to ${seconds} seconds.`);
