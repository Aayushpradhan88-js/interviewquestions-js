let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = number.map((num) => {
//     return num + 10;
// })

// console.log(res)/

// Given an array of likes with user IDs, return a unique list of users who liked a post.
const  liked= [101, 102, 103, 101, 104, 102];

function getUniqueVal(liked){
    return [...new Set(liked)] //Set automatically delete dublicate values
}

console.log(getUniqueVal(liked));