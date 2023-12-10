let dog;
let human;

function convertAge(age, species) {
  if (species === dog) {
    console.log((humanToDog = age * 7));
  } else if (species === human) {
    console.log((dogToHuman = age / 7));
  } else if ((species !== human, dog)) {
    //ova ne raboti ne znam kako treba da se naprai :/
    return "Invalid species. Please specify `dog` or `human` !!!";
  }
}

convertAge(10, human);
convertAge(15, dog);
convertAge(10, cat);
