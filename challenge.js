 function sum(number) {
let sumOfTheNumber = 0;
if (number > 0) {
  sumOfTheNumber = number + sum(number - 1);
}
return sumOfTheNumber;

};

console.log(sum(4));
console.log(sum(10));
module.exports = sum;