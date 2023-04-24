let counter = 0;

const rootElement = document.querySelector("#root");

//Element creation
const headerElement = document.createElement("header");
const mainElement = document.createElement("main");
const counterElement = document.createElement("div");
counterElement.classList.add("counter-value");
const increaseButton = document.createElement("button");
increaseButton.setAttribute("onclick", "handleCounter('increase')");
const decreaseButton = document.createElement("button");
decreaseButton.setAttribute("onclick", "handleCounter('decrease')");
const resetButton = document.createElement("button");
resetButton.setAttribute("onclick", "handleCounter('reset')");

//DOM creation
rootElement.appendChild(headerElement);
headerElement.appendChild(document.createElement("h1")).innerText = "COUNTER";
rootElement.appendChild(mainElement);
mainElement.appendChild(counterElement).innerText = `${counter}`;
mainElement.appendChild(decreaseButton).innerText = "-";
mainElement.appendChild(increaseButton).innerText = "+";
mainElement.appendChild(document.createElement("br"));
mainElement.appendChild(resetButton).innerText = "RESET";

//counter logic
function handleCounter(operation) {
  switch (operation) {
    case "increase":
      counter += 1;
      break;
    case "decrease":
      if (counter > 0) {
        counter -= 1;
      } else counter;
      break;
    case "reset":
      counter = 0;
      break;
    default:
      return counter;
  }
  counterElement.innerText = `${counter}`;
}
