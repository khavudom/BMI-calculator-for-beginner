const inputBoxes = document.querySelectorAll("input");
const heightBox = inputBoxes[0];
const weightBox = inputBoxes[1];
const result = inputBoxes[2];
const button = document.querySelector("button");
let situaltion = "";
let BMI = 0;

function calculate() {
  BMI = (
    weightBox.valueAsNumber /
    (heightBox.valueAsNumber * heightBox.valueAsNumber)
  ).toFixed(2);

  if (BMI <= 18.5) situaltion = "Underweight";
  else if (BMI >= 18.5 && BMI <= 24.9) situaltion = "Normal weight";
  else if (BMI >= 25 && BMI <= 29.9) situaltion = "Overweight";
  else situaltion = "Obesity";
  //
  if (!isNaN(BMI)) result.value = `BMI : ${BMI} ${situaltion}`;
  else return;
}
button.addEventListener("click", calculate);
// check negative value
inputBoxes.forEach((box) => {
  box.addEventListener("input", () => {
    if (box.value < 0) {
      alert(`${box.placeholder} not allow nagetive value`);
      box.value = "";
    }
  });
});
// check maximum value
heightBox.addEventListener("input", () => {
  if (heightBox.valueAsNumber > 3) {
    alert("Maximum of height less than 3m");
    heightBox.value = "";
  }
});
weightBox.addEventListener("input", () => {
  if (weightBox.valueAsNumber >= 400) {
    alert(`Not allow weight ${weightBox.valueAsNumber}Kg`);
    weightBox.value = "";
  }
});

// you learned in this project
// DOM
// addEventListener
// call back function
// arrow function
// template String
// condition

// code for intermediate level

// const [heightBox, weightBox, result] = document.querySelectorAll("input");
// const button = document.querySelector("button");

// const calculate = () => {
//   const height = heightBox.valueAsNumber;
//   const weight = weightBox.valueAsNumber;
//   const BMI = (weight / height ** 2).toFixed(2);
//   const situation =
//     BMI <= 18.5
//       ? "Underweight"
//       : BMI <= 24.9
//       ? "Normal weight"
//       : BMI <= 29.9
//       ? "Overweight"
//       : "Obesity";
//   result.value = isNaN(BMI) ? "" : `BMI: ${BMI} ${situation}`;
// };

// button.addEventListener("click", calculate);

// const validateInput = (box, max, errorMessage) => {
//   box.addEventListener("input", () => {
//     const value = box.valueAsNumber;
//     if (value < 0 || value > max) {
//       alert(errorMessage);
//       box.value = "";
//     }
//   });
// };

// validateInput(heightBox, 3, "Maximum height is 3m");
// validateInput(weightBox, 400, "Weight cannot exceed 400Kg");

// you learned in this project

// Destructuring assignment to extract elements from NodeList
// you learned in this project
// DOM
// addEventListener
// call back function
// arrow function
// template String
// condition
// conditional (ternary) operator
