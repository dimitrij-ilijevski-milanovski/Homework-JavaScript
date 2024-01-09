//                   %%% 1 %%%

/*
function getDifferenceOrDouble(number) {
  const difference = number - 13;

  if (number > 13) {
    return difference * 2;
  } else {
    return -difference;
  }
}

const inputNumber = 20;
const result = getDifferenceOrDouble(inputNumber);
console.log(result); */

//           %%%%% 2 %%%%%%%%

/* function findCloserTo100(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    alert("Please enter non-negative numbers!");
    return;
  }

  let distance1 = num1 - 100;
  let distance2 = num2 - 100;

  if (distance1 < 0) {
    distance1 = -distance1;
  }

  if (distance2 < 0) {
    distance2 = -distance2;
  }

  if (distance1 < distance2) {
    alert(`${num1} is closer to 100.`);
  } else if (distance2 < distance1) {
    alert(`${num2} is closer to 100.`);
  } else {
    alert(`Both numbers are equally close to 100.`);
  }
}

// Example usage:
const input1 = 20;
const input2 = 80;
findCloserTo100(input1, input2); */

//              ### 3 ###

/* const salary = 1000;
const rent = 375;
const bills = 250;
const amountLeft = salary - (rent + bills);

const totalExpenses = rent + bills;

console.log(`Bob has ${amountLeft} eur left for the rest of the month.`);
console.log(`Bob's total expenses for the month are ${totalExpenses} eur.`); */

//                    ### 4 ###

/* const examGrades = [10, 6, 8, 9, 6];

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

const averageGrade = calculateAverage(examGrades);

if (averageGrade >= 8) {
  console.log("Congratulations! You have passed the semester.");
} else {
  console.log("Sorry, you have not passed the semester.");
}

console.log(`Average grade: ${averageGrade}`); */

//                    &&& 5 &&&

/* function removeFalsyValues(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

const arrayWithFalsyValues = [
  null,
  undefined,
  NaN,
  "",
  false,
  55,
  "hi",
  true,
  0,
  "dimi",
];

const arrayWithoutFalsyValues = removeFalsyValues(arrayWithFalsyValues);

console.log("Array with falsy values:", arrayWithFalsyValues);
console.log("Array without falsy values:", arrayWithoutFalsyValues); */

//               ^^^ 6 ^^^

// *const numbersArray = [3, 5, 2, 10, 4, 3, 10, 1, 19, 23, 3];

/* function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return "You have entered 0 numbers ";
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const smallestNumber = findSmallestNumber(numbersArray);

console.log(`The smallest number is: ${smallestNumber}`);  */

// %%%%%% 7 %%%%%%%%%%% Ne znam dali tocno ova se bara

/* function generateArray() {
  const resultArray = [];
  for (let i = 1; i <= 500; i++) {
    resultArray.push(i);
  }
  return resultArray;
}

function multiplyBy10(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      resultArray.push(arr[i] * 10);
    } else {
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}

const generatedArray = generateArray();

const modifiedArray = multiplyBy10(generatedArray);

console.log(modifiedArray);  */

// %%%%%%%%%%%%%%%%%%%%%% 8 %%%%%%%%%%%%%%%%%%%
function storyTeller() {
  // Retrieve input values
  const who = document.getElementById("who").value;
  const what = document.getElementById("what").value;
  const when = document.getElementById("when").value;

  // Create a story
  const story = `${who} ${what} ${when}!`;

  // Output the story in the story div
  document.getElementById("story").innerText = `Example: ${story}`;
}
