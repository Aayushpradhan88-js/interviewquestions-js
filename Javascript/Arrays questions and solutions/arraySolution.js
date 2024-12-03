// // #1
// let array = function (input) {
//   if(toString.call(input) === '[object Array]'){
//     return true;
//   }
//   return false;
// }
// console.log(array('w3resource'));
// console.log(array([ 1, 2, 4, 0]));

// // #2
// var array_Clone = arra1 => arra1.slice(0);
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Question :- return the sum of two Numbers
function addtition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Add the two numbers";
  }
  return a + b;
}

console.log(addtition(2, 3));

// Convert Minutes into second
// Function to convert minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}

// Prompting user to enter minutes
// const minutes = prompt("Enter the number of minutes:");

// Converting minutes to seconds
// const seconds = minutesToSeconds(parseInt(minutes));

// Displaying the result
// console.log(`${minutes} minutes is equal to ${seconds} seconds.`);

//#7

const likes = [101, 102, 103, 101, 104, 102];
function getUniqueValue(likes) {
  return [...new Set(likes)] // Set removes the dublicate values and return original value
}

const uniqueUsers = getUniqueValue(likes);
// console.log(`The unique values are: ${uniqueUsers}`); //output: The unique values are: 101,102,103,104
console.log(uniqueUsers) //output: [101, 102, 103, 104]

//#8
const comments = [
  { postId: 1, comment: 'Great post!' },
  { postId: 2, comment: 'Nice!' },
  { postId: 1, comment: 'Loved it!' }
];

let arrComment = comments.reduce((acc, curr) => {
  const { postId, comment } = curr;

  if (!acc[postId]) {
    acc[postId] = [];
  }

  acc[postId].push(comment);

  return acc;
}, {})

console.log(arrComment);

// 9. 
const posts = [
  { id: 1, content: '#fun #travel #adventure' },
  { id: 2, content: '#fun #coding #javascript' },
  { id: 3, content: '#adventure #travel #coding' }
];

const frequentlyUsedHash = posts.