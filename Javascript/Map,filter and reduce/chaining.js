let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = number
    .map((val) => val + 10)
    .map((val) => val - 5)
    .filter((val) => val > 10);

console.log(result)