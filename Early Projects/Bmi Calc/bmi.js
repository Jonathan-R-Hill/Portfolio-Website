const heightFeet = document.getElementById("userFeet");
const heightInches = document.getElementById("userInches");
const weightStones = document.getElementById("userStones");
const weightPounds = document.getElementById("userPounds");
const submitButton = document.getElementById("submit");

const resultPercent = document.getElementById('percentage');
const catagory = document.getElementById('catagory');

function convertHeight() {
  const feetInches = parseInt(heightFeet.value) * 12;
  const totalInches = parseInt(heightInches.value) + feetInches;
  return totalInches / 39.37;
}

function convertWeight() {
  const stonesPounds = parseInt(weightStones.value * 14);
  const totalPounds = stonesPounds + parseInt(weightPounds.value);

  return totalPounds / 2.205;
}

function calcBmi() {
  // kg / M**2
  const heightM = convertHeight();
  const weightKg = convertWeight();

  const result = weightKg / heightM ** 2;
  resultPercent.textContent = result;

  if (result < 17.5) {
    catagory.textContent = 'Underweight';
  } else if (result < 25) {
    catagory.textContent = 'Healthy Weight';
  } else if (result < 30) {
    catagory.textContent = 'Overweight';
  } else {
    catagory.textContent = 'Obease'
  }

}

submitButton.addEventListener('click', () => {
  calcBmi()
});



document.getElementById("home").onclick = () => {
  window.location.href = "../main.html";
}