let a = 13.123456789
let b = 2.123
let n = 5

let aNormalized = Math.floor(
    (a % 1) * Math.pow(10, n)
);

let bNormalized = Math.floor(
    (b % 1) * Math.pow(10, n)
);

console.log('Первое число больше', a > b);
console.log('Первое число меньше', a < b);
console.log('Первое число больше или равно', a >= b);
console.log('Первое число меньше или равно', a <= b);
console.log('Числа равны', a == b);
console.log('Числа не равны', a != b)
