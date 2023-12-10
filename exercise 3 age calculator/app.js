let currentDate = new Date();
let year = currentDate.getFullYear();

console.log(year);

function calculateAge(birthYear, currentYear) {
  let Age = currentYear - birthYear;
  console.log(`You are ${Age} years old`);
  return Age;
}
calculateAge(2002, 2023);
calculateAge(1993, 2023);
calculateAge(1995, 1997);
calculateAge(1995, year);
