//  1. Write a JS code to print numbers from 1 to 10
function printNumbers() {
    for (var i=1; i<=10; i++){
        console.log (i);
    }
}
printNumbers();

// #2
//Solution:-
function printArray(arr) {
    for (var i=0; i<arr.length; i++) {
        for(var j=0; j<arr[0].length; j++) {
            console.log (arr [i][j]);
        }
    }
}
var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
printArray(arr);

// #3
// Solution:-
function printEven(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%2 == 0) {
            console.log(arr[i]);
        }
    }
}
var arr = [12, 34, 34, 56, 67, 67, 78];
printEven(arr);

// #4
// Solution:-

function deleteElement(arr, ele) {
    for ( let i= 0; i<arr.length; i++) {
        if (arr[i] == ele) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

var arr = [1, 2, 3, 4, 5];
arr = deleteElement(arr, 1);
console.log(arr);

//#5
// Solution:-
for(var i=0; i<5; i++) {
    setTimeout (() => console.log(i), 5000);
}

// #6
// Solution:-
function numPower(num, pow) {
    var res = 1;
    for(var i=0; i<pow; i++) {
        res *= num;
    }
    return res;
}
console.log(numPower(4, 3));    //OUTPUT:- 64 ( 4+3=8 AND 8^2=64 )

// #7
// Solution:-
function printPattern(range) {
    for (var i=1; i<=range; i++) {
        var str = " ";
        for(var j=1; j<=i; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}
printPattern(8);