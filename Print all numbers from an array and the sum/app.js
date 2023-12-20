const arr = [2, 7, 5, 6];
let sum = 0;
let mathEq = "(";
let index = 0;
const getElement = document.getElementById("main-list");

for (i of arr) {
  sum += i;
  console.log(i);

  const newElement = document.createElement("li");
  newElement.innerHTML = i;
  getElement.appendChild(newElement);

  if (index === arr.length - 1) {
    mathEq += `${i} = ${sum})`;
  } else {
    mathEq += `${i} +`;
  }
  index++;
}
console.log(sum);

const sumResult = document.querySelector("p");
sumResult.innerHTML = `the sum of the numbers is ${sum} </br> ${mathEq} `;
