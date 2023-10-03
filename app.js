const display = document.querySelector(".display");

window.addEventListener("keydown", function (e) {
  const key = parseInt(e.key);
  if (Number.isInteger(key)) {
    display.value += e.key;
  }

  if (e.key == "*") {
    display.value += " * ";
  } else if (e.key == "/") {
    display.value += " / ";
  } else if (e.key == "+") {
    display.value += " + ";
  } else if (e.key == "-") {
    display.value += " - ";
  }

  if (e.key == "Enter") {
    display.value = eval(display.value);
  }
  if (e.key == "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  console.log(e.key);
});
