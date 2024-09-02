const display = document.getElementById("display");
const historyElement = document.getElementById("history");
const historyList = document.createElement("ul");
historyElement.appendChild(historyList);

let history = [];

function addelementtodisplay(input) {
  if (display.value !== "Error") {
    display.value += input;
  } else {
    display.value = input;
  }
}

function Calculate1() {
  try {
    const result = eval(display.value);
    if (result === Infinity) {
      throw new Error("Infinity");
    }
    addToHistory(display.value, result);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteprevelement() {
  if (display.value !== "Error") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "";
  }
}

function addToHistory(expression, result) {
  const historyItem = `${expression} = ${result}`;
  history.push(historyItem);

  const li = document.createElement("li");
  li.textContent = historyItem;
  historyList.appendChild(li);
}

function clearHistory() {
  history = [];
  historyList.innerHTML = "";
}

document.querySelector(".history").addEventListener("click", () => {
  if (
    historyElement.style.display === "none" ||
    historyElement.style.display === ""
  ) {
    historyElement.style.display = "block";
  } else {
    historyElement.style.display = "none";
  }
});
