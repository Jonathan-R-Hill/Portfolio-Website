const counterLocation = "./Counter/counter.html"
const profileLocation = "./Profile/profile.html"
const ranNumLocation = "./Random Num Gen/ran.html"
const bmiLocation = "./Bmi Calc/bmi.html"
const ceaserCipherLocation = "./Ceasers Cipher/cipher.html"
const blackJackLocation = "./Blackjack/bj.html"

document.addEventListener('DOMContentLoaded', () => {
  const counterButton = document.getElementById('counter');
  const profileButton = document.getElementById('profile');
  const ranNumButton = document.getElementById('ranNum');
  const bmiCalcButton = document.getElementById('bmiCalc');
  const ceaserCipherButton = document.getElementById('ceaserCipher');
  const blackJackButton = document.getElementById('BlackJack');

  counterButton.addEventListener('click', () => {
    window.location.href = counterLocation;
  });

  profileButton.addEventListener('click', () => {
    window.location.href = profileLocation;
  });

  ranNumButton.addEventListener('click', () => {
    window.location.href = ranNumLocation;
  });

  bmiCalcButton.addEventListener('click', () => {
    window.location.href = bmiLocation;
  });


  ceaserCipherButton.addEventListener('click', () => {
    window.location.href = ceaserCipherLocation;
  });

  blackJackButton.addEventListener('click', () => {
    window.location.href = blackJackLocation;
  });

});


