const header = document.querySelector('.row');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');

// create a buttons Array for the 3 button items
const buttons = [blueButton, brownButton, greenButton];

// loop through the buttons Array and set specific header color for each button item click
buttons.forEach((button, index) => {
  const headerColors = ['#892E5C', '#ff2c2c', '#35853e'];

  button.addEventListener('click', () => {
    header.style.backgroundColor = headerColors[index];

    // you can check the console to see what is being outputted on each button click
    console.log(headerColors[index]);
  });
});
