document.addEventListener("DOMContentLoaded", () => {

  function displayProfile(userData) {
    document.getElementById("name").textContent = `Name: ${userData.name}`;
    document.getElementById("age").textContent = `Age: ${userData.age}`;
    document.getElementById("email").textContent = `Email: ${userData.email}`;
  }


  async function fetchData() {
    const userData = {
      "name": localStorage.getItem("userName"),
      "age": localStorage.getItem("age"),
      "email": localStorage.getItem("email"),
    }

    displayProfile(userData);
  }


  async function updateData() {
    const userName = document.getElementById("userName").value;
    const userAge = document.getElementById("userAge").value;
    const userEmail = document.getElementById("userEmail").value;
    const newData = { name: userName, age: userAge, email: userEmail };

    localStorage.setItem("userName", userName);
    localStorage.setItem("age", userAge);
    localStorage.setItem("email", userEmail);

    fetchData();
  }

  document.getElementById("submit").onclick = updateData;

  document.getElementById("home").onclick = () => {
    window.location.href = "../main.html";
  }
  fetchData();
});
