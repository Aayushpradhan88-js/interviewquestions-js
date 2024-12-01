let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let initialNumber = 0;

let sumWithInitial = number.reduce((acc, currentVal) => acc + currentVal, initialNumber);

console.log(sumWithInitial);