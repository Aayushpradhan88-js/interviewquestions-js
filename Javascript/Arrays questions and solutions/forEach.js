//Given the list of numbers, calculate the sum using a foreach loop:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

numbers.forEach(function (n) {
    sum += n;
    return sum
});

console.log("The total sum of the product is:", sum);

// Write a forEach loop to count the number of times a specific letter appears in an array of strings:

const words = ['apple', 'banana', 'cherry', 'pineapple'];
const letter = 'a';
let specificStr = ''

words.forEach((str) => {
    for (let val = 0; val < str.length; val++) {
        if (str[val] === letter) {
            specificStr++;
        }
    }
    return
})

console.log(`The letter ${letter} in the array appears ${specificStr} times`);

// Use forEach to find and print all odd numbers from the array:

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNum = [];

nums.forEach((num) => {
    if (num % 2 !== 0) {
        oddNum.push(num);
    }
    return
})

console.log(`The odd numbers in an array are: ${oddNum}`);

// Write a forEach loop to group numbers into even and odd categories:

const numberss = [10, 21, 32, 43, 54, 65];
let grouped = {
    even: [],
    odd: []
};


numberss.forEach((nums) => {
    if (nums % 2 === 0) {
        console.log(grouped.even.push(nums));
    }

    if(nums%2 !==0){
        console.log(grouped.odd.push(nums));
    }
})

console.log(`Grouped Numbers are: ${grouped}`)