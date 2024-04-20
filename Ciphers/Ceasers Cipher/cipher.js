const outputText = document.getElementById('outputMessage');
const decryptButton = document.getElementById('decrypt');
const encryptButton = document.getElementById('encrypt');
const clearAllButton = document.getElementById('clearLast');

const userInput = document.getElementById('userInput');
const shift = document.getElementById('shift');

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];



decryptButton.onclick = () => {
  const userMessage = userInput.value.toLowerCase().trim();
  const shiftAmount = parseInt(shift.value);
  let decryptedMessage = '';

  // Check if shiftAmount is a valid number
  if (isNaN(shiftAmount)) {
    outputText.textContent = 'Please ensure your shift amount is a valid number!';
  } else {
    for (let i = 0; i < userMessage.length; i++) {
      if (/^[a-z]+$/.test(userMessage.charAt(i))) {
        const currentPosition = alphabet.indexOf(userMessage.charAt(i));
        let shiftedPosition = (currentPosition - shiftAmount + 26) % 26;
        decryptedMessage += alphabet[shiftedPosition];
      } else {
        decryptedMessage += userMessage.charAt(i);
      }
    }

    outputText.textContent = decryptedMessage;
  }
};

encryptButton.onclick = () => {
  const userMessage = userInput.value.toLowerCase().trim();
  const shiftAmount = parseInt(shift.value);
  let decryptedMessage = '';

  // Check if shiftAmount is a valid number
  if (isNaN(shiftAmount)) {
    outputText.textContent = 'Please ensure your shift amount is a valid number!';
  } else {
    for (let i = 0; i < userMessage.length; i++) {
      if (/^[a-z]+$/.test(userMessage.charAt(i))) {
        const currentPosition = alphabet.indexOf(userMessage.charAt(i));
        let shiftedPosition = (currentPosition + shiftAmount + 26) % 26;
        decryptedMessage += alphabet[shiftedPosition];
      } else {
        decryptedMessage += userMessage.charAt(i);
      }
    }

    outputText.textContent = decryptedMessage;
  }
}

clearAllButton.onclick = () => {
  outputText.textContent = "";
  userInput.value = "";
}



document.getElementById("home").onclick = () => {
  window.location.href = "../main.html";
}