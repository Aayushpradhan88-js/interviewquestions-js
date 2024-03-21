// #1
// Solution:-

let str = ' Hello World!';
console.log(typeof str);   //String

let num = 78;
console.log(typeof num) ;  //number

let bol = true;
console.log(typeof bol);   // Boolean

let dec = 78.9;
console.log(typeof dec);   //decimal

let obj = {h:'Aayush', i:78}
console.log(typeof obj);   //object

let und = undefined;
console.log(typeof und);   //Undefined

// #2
// Solution:-

// -> The equality (==) operator checks whether its two operands are equal. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

let str2 = 'Javascript';
let i    = 'script';
console.log( str2 == i ); //true
console.log( str2 === i ); //false

// #3
// Solution:-

var num2 = {
  name      : ' React ',
  experience: 1  ,
  framework : ' javascript'
}
console.log(num2);

// [ARROW FUNCTIONS QUESITONS]
// #1
// Solution:-

const greet = (name) => {
  return `Hey ${name}!`;
};

console.log(greet("Aayush")); 

// #2
//Solution:-

// Method-1
let array = [1,2,3,4,5,6];
let sum2 = array.reduce((a,b) => a+b, 0);
let average1 = sum2 / array.length;
console.log("The average of those numbers are =", average1);

// Method-2
const arrayAverage = (arr) => {
  let total = 0;
  for(let number of arr) {
    total += number;
  }
  return total / arr.length;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log( "The average of those numbers are =", arrayAverage(arr));

// #3
//Solution:-

function counterfun(counter) {
 if(counter > 100) {
  counter = 0;
 } else {
  counter ++;
 } 
 return counter;
}
console.log(counterfun);
//Converting the given function into arrow function.
const counterFun = (counter) => {
 if(counter > 100) {
  counter = 0;
 } else {
  counter ++;
 }
return counter;
}

// #4
//Solution:-

function nameAge(name,age) {
console.log("Hello " + name);
console.log("You are " + age + " years old");
}
//Converting the given function into arrow funtion.
const nameAge2 = (name2, age2) => {
  console.log("Hello " + name2);
  console.log("You are " + age2 + " years old");
}

// #6
// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
}

// Convert the reversed string back to a number and log it to the console
console.log(Number(reverse_a_number(32243)));

// #7
 // Write a JavaScript function that checks whether a passed string is palindrome or not? 
 function check_Palindrome(str_entry){
  // Change the string into lower case and remove  all non-alphanumeric characters
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
  // Check whether the string is empty or not
    if(cstr==="") {
      console.log("Nothing found!");
      return false;
    }
  // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
      ccount = (cstr.length) / 2;
    } else {
  // If the length of the string is 1 then it becomes a palindrome
      if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
      } else {
  // If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
      }
    }
  // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
  // Compare characters and drop them if they do not match 
      if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("Entry is not a palindrome.");
        return false;
      }
    }
    console.log("The entry is a palindrome.");
    return true;
  }
  check_Palindrome('madam');
  check_Palindrome('nursesrun');
  check_Palindrome('fox');
  

// [JAVASCRIPT VARIABLES QUESITIONS ANSWERS].
// #1
//Solution:-

var carName = 'Volvo' ;
console.log( carName );

// #2
//Solution:-

var num1 = 5;
var num2 = 10;
console.log(num1 + num2);

// #3
//Solution:-

let str3 = 'java';
let str4 = 'Script';
let res  = str3 + str4;
console.log(res)

// #4
//Solution:-

var firstName = "John", lastName = "Doe", age = 35;
console.log(firstName+lastName+age);

// [JAVACRIPT ARRAYS ANSWERS]
// #1.
// Solution:-

function arrayMerge (arr1, arr2, n1, n2, arr3) {
  var i=0; j=0; k=0;

  while(i<n1 && j<n2) {
    if(arr1[i] < arr2[j])
     arr3[k++] = arr1[i++];
    else
     arr3[k++] = arr2[j++];
  }

  while(i<n1)
   arr3[k++] = arr1[i++];
  while(j<n2)
   arr3[k++] = arr2[j++];
}

var arr1 = [1,3,5,7,9];
var n1   = arr1.length;
var arr2 = [2,4,6,8,10];
var n2   = arr2.length;
var arr3 = Array(n1 + n2).fill(0);

arrayMerge(arr1, arr2, n1, n2, arr3);
for(i=0; i<n1 + n2; i++)
 console.log(arr3[i] + " ");

// #2
// Solution:- 

let avgMarksStudent = [85,97,44,37,76,60];
let sum = avgMarksStudent.reduce((a,b) => a + b, 0);
let avg = sum / avgMarksStudent.length;
console.log("The Average marks of student is =", avg); //Return:- 66.5

// #3
// Solution:-

let items = [250,645,300,900,50];

for(i=0; i<items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

console.log(items);

// #4
// Solution:-

let arr_fn = function(input){
  if(toString.call(input) === "[object Array]")
   return true;
   return false;
}
console.log(arr_fn([1,2,3,4,5,6,7,8,9]));
console.log(arr_fn('Javscript Logic'));

// #5
// Solution:-

let first_ele_arr = function(arr, n) {
  if(arr == null)
   return void 0;
  if(n == null)
   return arr[0];
  if(n<0)
   return [];

  return arr.slice(0);
}

console.log(first_ele_arr([1,2,3],2));

// #6
// Solution:- 

let arr_item = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr_item.sort();
console.log(arr_item);

// #7
// Solution:-

// Declare and initialize the original array
let arr10 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Initialize variables to track the most frequent item, its frequency, and the current item's frequency
let mf = 1;
let m = 0;
let item;

// Iterate through the array to find the most frequent item
for (let i = 0; i < arr10.length; i++) {
    // Nested loop to compare the current item with others in the array
    for (let j = i; j < arr10.length; j++) {
        // Check if the current item matches with another item in the array
        if (arr10[i] == arr10[j])
            m++;
        // Update the most frequent item and its frequency if the current item's frequency is higher
        if (mf < m) {
            mf = m;
            item = arr10[i];
        }
    }
    // Reset the current item's frequency for the next iteration
    m = 0;
}

// Output the most frequent item and its frequency
console.log(item + " ( " + mf + " times ) ");

//#1
// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 

//Mindblowing solutions
// #1
// Solution:-
var str5 = "Javascript is the most popular and love by programmers and developers";

var savedStr =  str5.split(" ")
 .map(function(word) {
    return word.split("").reverse().join("")
 })

console.log(savedStr.join(" "));

// #2
// Solution:-
function check_Array(ele) {
  return Array.isArray(ele);
}
console.log(check_Array([]));
console.log(check_Array({}));

// #3
var emp_arr = [1,2,3,4];
emp_arr = 0;
console.log(emp_arr);

// #4
// Solution:-
var a = 12;
if(a%2 === 0) {
  console.log("is Integer");
} else {
  console.log("!NOT AN INTEGER");
}

// #5
// Solution:-
function duplicate(arr) {
  return arr.concat(arr) 
}
console.log(duplicate([1,2,3]));

// [ JS Function Questions ]
// #1
// Solution:-

function reverse(num) {
  return Number(num.toString().split("").reverse().join());
}
console.log(reverse(21));

// #2
// Solution:-
function reverse2(num) {
  var rev = 0;
  while(num > 0) {
      var rem = num%10;
      rev = rev*10+rem;
      num = Math.floor(num/10);
  }
  return rev;
}
console.log(reverse2(1234));

// #3
// Solution:-
function stringAlphabetical(str) {
  return str.split("").sort().join();
}
console.log(stringAlphabetical('Aayush Pradhan'));

//[JS Loop Quesitions Solutions]
// #1
// Solution:-
let arr6 = [1,2,3,4,5,6,7];
var sum3 = 0;
arr6.forEach(function(elem) {
  sum = sum + elem;
})
console.log(sum);

// #2
// Solution:-
var arr9 = ["JS", "python", "Java","Language"];
var sum9 = 0;
arr9.forEach(function(elem) {
  if(typeof elem === 'number'){
    sum = sum + elem;
  }
})
console.log(sum);

// #3
// Solution:-
var arr7 = [
  {name:"Aayush", gender: "Male"},
  {name:"kiyan", gender: "Male"},
  {name:"Pabitra", gender: "Female"},
  {name:"Sharmila", gender: "Female"},
]
var count = 0;
arr.forEach(function (elem) {
  if(elem.gender !== "male") count++;
})

for(let i=1; i<=count; i++) {
  for(var j=0; j<arr.length; j++) {
    if(arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

// console.log(arr);

//+++++++++++ Mind blowing Interview Questions ++++++++++++++
//Qno.1 
let string = "Hello World";
let split = string.split(" ").map(function rev(word){
  return word.split("").reverse().join("");
})
console.log(split.join(" "));

//Qno.2
function checkElement(arr) {
  return Array.isArray(arr)

}
console.log(checkElement([]));
console.log(checkElement({}));

//Qno.3
let emp = [1,2,3,4,5,6,7,8,9,10];
emp = 0;
console.log(emp);

//Qno.4
var a = 12;
if(a % 1 === 0) {
  console.log("it is array");
}
else {
  console.log("!Not");
}

//Qno.5
function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5,6]));

//++++ Mind blowing Interview Questions Function Part ++++
//Qno.1
function reverse(num) {
  return Number(num.toString().split("").reverse ().join(""));

}
console.log(reverse([235]));

// Next Method to solve the question
function reverse(num){
  var rev = 0;
  while(num > 0) {
    var rem = num%10;
    rev = rev*10+rem;
    num = Math.floor(num/10);
  }
  return rev;
}
console.log(reverse([1234]));

//Qno.2 
function check_Palindrome(str){
  var palindrome = str.split("").reverse().join("");
  return palindrome === str;
}
console.log(check_Palindrome("lool"));
console.log(check_Palindrome("loop"));

// Another way to use logice
function check_Palindrome2(string){
  let len = string.length
  for(let i=0; i<len/2; i++){
    if(string[i] === string[len-1-i]){
      return 'It is not a palindrome'
    }
  }
  return "It is a palindrome";
}
const inputPrompt = prompt("Enter the Prompt")
const outputAnswer = check_Palindrome2(inputPrompt)
console.log("The output of the given prompt is ", outputAnswer);

// Qno.3
function alphaLet(word){
  return word.split("").sort().join("");
}
console.log(alphaLet("Aayush pradhan"));

// Qno.4
function parameter(string){
  let str = string.split(" ").map(function (e){
    return e.charAt(0).toUppperCase() + e.subset(1);
  })
  return str.allWords(" ");
}
console.log(parameter("hello javascript"));

// Qno.5 
