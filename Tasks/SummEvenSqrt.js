/**Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. */
let arr = [1, 15, 16, 25, 4];

let summ = arr
  .filter((elem) => !(elem % 2))
  .reduce((acc, amount) => acc + Math.sqrt(amount), 0);
console.log(summ);
