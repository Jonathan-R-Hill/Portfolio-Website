const highInput = document.getElementById("low");
const lowInput = document.getElementById("high");
const submitButton = document.getElementById('submit');
const numberText = document.getElementById('number');

submitButton.addEventListener('click', () => {
  const min = Math.ceil(parseInt(lowInput.value, 10));
  const max = Math.floor(parseInt(highInput.value, 10));
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  numberText.textContent = result;
});


document.getElementById("home").onclick = () => {
  window.location.href = "../main.html";
}