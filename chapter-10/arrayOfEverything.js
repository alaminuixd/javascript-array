// we can input all types of data in an array but this is not recommended.
const arr = [10, "ten", true, getTen, { ten: 10 }, [10, 20]];
console.log(arr);
function getTen() {
  return "I am ten";
}

// Array of Objects
const fevChannels = [
  { name: "Khan Academy", url: "https://khanacademy.com" },
  { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
  { name: "CodeWithHarry", url: "https://www.codewithharry.com/" },
];

// Array of functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divi = (a, b) => a / b;
const modu = (a, b) => a % b;

const calcArray = [add, sub, mult, divi, modu];
const calcObj = {};
calcArray.forEach((func, i) => {
  //In JavaScript, the .name property of a function returns the name of the function as a string.
  calcObj[func.name] = func;
});
console.log(calcObj.add(10, 20)); // 30
console.log(calcObj.sub(30, 10)); // 20
console.log(calcObj.mult(3, 2)); // 6
console.log(calcObj.divi(30, 15)); // 2
console.log(calcObj.modu(13, 2)); // 1
// we can also iterate the functoin in a loop and return result performing math on a bunch of numbers.
const numA = 20;
const numB = 10;
for (let i = 0; i < calcArray.length; i++) {
  console.log(`${calcArray[i].name}: ${calcArray[i](numA, numB)}`);
}
// advanced:
for (let i = 0; i < calcArray.length; i++) {
  const result =
    calcArray[i].name === "add"
      ? `Addition: ${calcArray[i](numA, numB)}`
      : calcArray[i].name === "sub"
      ? `Subtraction: ${calcArray[i](numA, numB)}`
      : calcArray[i].name === "mult"
      ? `Multiplication: ${calcArray[i](numA, numB)}`
      : calcArray[i].name === "divi"
      ? `Divition: ${calcArray[i](numA, numB)}`
      : calcArray[i].name === "modu"
      ? `Modular: ${calcArray[i](numA, numB)}`
      : "Did not match any function";
}

// above code is varbos as it usedes multiple ternary operator. We can simplify it like so
// "operation" object properties must be matched with calcArray items
//* Note: we created this object to change the functon lebel only:
const operation = {
  add: "Addition",
  sub: "Subtraction",
  mult: "Multiplication",
  divi: "Divition",
  modu: "Modular",
};

for (let i = 0; i < calcArray.length; i++) {
  const func = calcArray[i].name;
  const result = `${operation[func]} : ${calcArray[i](numA, numB)}`;
  console.log(result);
}

//* We could've done this taking "function.name" like so.
for (let i = 0; i < calcArray.length; i++) {
  // the ".name is the function name it self"
  const result = `${calcArray[i].name}: ${calcArray[i](numA, numB)}`;
  console.log(result);
}
