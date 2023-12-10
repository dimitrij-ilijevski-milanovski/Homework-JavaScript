function identifyThing(parameter) {
  console.log(typeof parameter);
}

let numberOne = 500;
identifyThing(numberOne);

let isAvailable = true;
identifyThing(isAvailable);

let className;
identifyThing(className);

let academyName = "SEDC GEN12";
identifyThing(academyName);

const num = new Number(100);
identifyThing(num);
