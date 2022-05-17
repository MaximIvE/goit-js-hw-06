function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

// console.log(bodyEl);
// console.log(buttonColor);
// bodyEl.style.backgroundColor

function setColor(){
  const color = getRandomHexColor();
  // console.log(color);
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
};

buttonColor.addEventListener("click", setColor);

// console.dir(bodyEl);