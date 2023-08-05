function updateDisplay(value) {
  document.querySelector(".display").value += value;
}

function clearDisplay() {
  document.querySelector(".display").value = "";
}

function calculateResult() {
  const input = document.querySelector(".display").value;
  try {
    const result = eval(input);
    document.querySelector(".display").value = result;
  } catch (error) {
    document.querySelector(".display").value = "Error";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "C") {
        clearDisplay();
      } else if (buttonText === "=") {
        calculateResult();
      } else {
        updateDisplay(buttonText);
      }
    });
  });
});