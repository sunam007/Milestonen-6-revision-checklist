//1. an arrow function without any parrameter which will return 89
const return89 = () => 89;
// const output = return89();
// console.log(output);

//2. an arrow function that will take one parameter and will devide it by 7 and return the result;
const devideBy7 = (number) => number / 7;
// console.log(devideBy7(49));

//3. take 2 parameter,add them and then devide with 2 and return the result;
const math = (num1, num2) => (num1 + num2) / 2;
// console.log(math(15, 25));

//4. take 2 param , add 7 with each param , then add the both result

const doubleAddition = (num1, num2) => {
  const sum1 = num1 + 7;
  const sum2 = num2 + 7;
  const result = sum1 + sum2;
  return result;
};
console.log(doubleAddition(3, 13));
