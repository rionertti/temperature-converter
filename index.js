const fahrenheit = document.querySelector("#convertToF");
const celsius = document.querySelector("#convertToC");
const myText = document.querySelector("#celsius");
const myTextField = document.querySelector("#fahrenheit");
const results = document.querySelector(".result");

const myFunction = function () {
  if (myText.value === "") {
    results.innerText = "";
    return;
  } 
    let celsius = parseFloat(myText.value);
    let fahrenheit = (celsius * 9) / 5 + 32;
    results.innerText = `${celsius.toFixed(1)}°C is ${fahrenheit.toFixed(1)}°F`;
    myText.value = "";
};
fahrenheit.addEventListener("click", myFunction);

const ourFunction = function () {
    if (myTextField.value === "") {
        results.innerText = " ";
        return;
      } 
  let fahrenheit = parseFloat(myTextField.value);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  results.innerText = `${fahrenheit.toFixed(1)}°F is ${celsius.toFixed(1)}°C`;
  myTextField.value = "";
};
celsius.addEventListener("click", ourFunction);

const buttons = document.querySelectorAll(".converter");
for (let button of buttons) {
  button.style.fontFamily = "Georgia";
}

const tag = document.getElementsByTagName("input");
for (tags of tag) {
  tags.style.border = "1px solid dodgerblue";
}
