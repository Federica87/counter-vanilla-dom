const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");

//Element creation
const divElement = document.createElement("div");
divElement.classList.add("counter-value");
const increaseButton = document.createElement("button");
increaseButton.setAttribute("onclick", "handleCounter('increase')");
const decreaseButton = document.createElement("button");
decreaseButton.setAttribute("onclick", "handleCounter('decrease')");
const resetButton = document.createElement("button");
resetButton.setAttribute("onclick", "handleCounter('reset')");

//DOM creation
headerElement.appendChild(document.createElement("h1")).innerText = "COUNTER";
mainElement.appendChild(divElement).innerText = "0";
mainElement.appendChild(increaseButton).innerText = "+";
mainElement.appendChild(decreaseButton).innerText = "-";
mainElement.appendChild(document.createElement("br"));
mainElement.appendChild(resetButton).innerText = "RESET";

//counter logic
let counter = 0;

function handleCounter(operation) {
  switch (operation) {
    case "increase":
      counter += 1;
      break;
    case "decrease":
      counter -= 1;
      break;
    case "reset":
      counter = 0;
      break;
    default:
      return counter;
  }
  divElement.innerText = `${counter}`;
}
