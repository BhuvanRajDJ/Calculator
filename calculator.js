const display = document.getElementById("display");

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
