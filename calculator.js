const display = document.getElementById("display");
let historyArray = [];

function addelementtodisplay(input) {
  display.value += input;
}

function Calculate(input) {
  display.value += input;
}

function Calculate1() {
  try {
    const result = eval(display.value);
    display.value = result;
    historyArray.push(result);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteprevelement() {
  display.value = display.value.slice(0, -1);
}

function history() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = ""; // Clear previous history display

  historyArray.forEach((item, index) => {
    const historyItem = document.createElement("div");
    historyItem.textContent = `History ${index + 1}: ${item}`;
    historyDiv.appendChild(historyItem);
  });
}

/* 
const display = document.getElementById("display");
let historyArray = [];

function addelementtodisplay(input) {
  display.value += input;
}

function Calculate(input) {
  display.value += input;
}

function Calculate1() {
  try {
    const result = eval(display.value);
    display.value = result;
    historyArray.push(display.value); // Store the complete expression and result in history
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteprevelement() {
  display.value = display.value.slice(0, -1);
}

// Function to display the calculation history
function showHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = ""; // Clear previous history display

  historyArray.forEach((item, index) => {
    const historyItem = document.createElement("div");
    historyItem.textContent = `History ${index + 1}: ${item}`;
    historyDiv.appendChild(historyItem);
  });
}


*/
