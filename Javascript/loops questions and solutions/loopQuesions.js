// 17 JavaScript for/while loop exercises with solutions

// 1. Write a JS code to print numbers from 0 to 10;
for(let i=0;i<=10;i++) {
    console.log(i);
}

// 2. Write a JS code to print a 2D array.
// => Function `printArray()` prints all the elements of a 2D array using nested for loops.
function printArray(arr) {
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[0].length;j++) {
            console.log(arr[i][j]);
        }
    }
}

var arr=[
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

printArray(arr);

// 3. Write a JS code to print Even numbers in given array
// => Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.
function printEven(arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2 == 0) {
            console.log(arr[i]);
        }
    }
}
var arr=[12,34,56,67,78];
printEven(arr);

// 4. Write a JS code to delete all occurrence of element in given array
// => Function `deleteElement()` deletes all the occurrence of.
function deleteElement(arr,ele) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] == ele) {
            arr.splice(i,1);
        }
    }
    return arr;
}

var arr=[1,2,3,4,5,6,7,8,9,10];
arr=deleteElement(arr,1);
console.log(arr);

// 5. Write a JS code to demonstrate Async loop
// => For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.
for(let i=0;i<5;i++) {
    setTimeout(() => console.log(i),5000);
}

// 6. Write a JS code to find the power of a number using for loop
// => Function numPower() to returns power of number for provided exponential value using for loop.

// 7. Write a JS code to print a pattern using for loop
// => Function printPattern() is used to print a pattern for a given range using nested for loop.