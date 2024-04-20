// Name of app
document.getElementById("myHeader").textContent = "Counter";

const counterNum = document.getElementById("number");
let count = 0;

document.getElementById("increase").onclick = () => {
  count++;
  counterNum.textContent = count;
}

document.getElementById("decrease").onclick = () => {
  count--;
  counterNum.textContent = count;
}

document.getElementById("reset").onclick = () => {
  count = 0;
  counterNum.textContent = 0;
}

document.getElementById("home").onclick = () => {
  window.location.href = "../main.html";
}