let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let initialNumber = 0;

let sumOfInitialNumber = number.reduce((accumalator, currentValue) => accumalator + currentValue, initialNumber)

console.log(sumOfInitialNumber);

//#Next method

let digits = [4, 5, 6, 7, 8, 9];
let manipulatoin = digits.sort((a, b) => a.localeCompare(b));
console.log(manipulatoin)

// let sum = digits.reduce((accumalator, currentValue) => {
//     console.log(`acc: ${accumalator} and currVal: ${currentValue}`);
//     return accumalator + currentValue;
// },0)

// let sum = digits.reduce((acc, curr) => acc + curr , 0);

// let sum = digits.map((val) => {
//     return val * 3;
// })

// let sum = digits
//     .map((val) => val * 10)
//     .filter((val) => val > 55)


// console.log(sum);

// Calculate the total price of products in a shopping cart, including quantity.
const cart = [
    { product: 'Shoes', price: 50, quantity: 2 },
    { product: 'Shirt', price: 20, quantity: 3 }
];

let sum2 = cart.reduce((price, product)  => price + product.price * product.quantity , 0);

console.log(`The sum of total price of the products is: ${sum2}`);


