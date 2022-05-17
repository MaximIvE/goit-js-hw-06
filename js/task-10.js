function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const numbersInput = document.querySelector("#controls").firstElementChild;
const createButton = document.querySelectorAll("button")[0];
const destroyButton = document.querySelectorAll("button")[1];
const boxEl = document.querySelector("#boxes");

function createBoxes(amount){
  let size = 30;
  let elements =[];
  for (let i = 0; i<amount; i += 1 ){
    const element = document.createElement("div");
    element.style.height = `${size}px`;
    element.style.width = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
    size += 10;
  };
  boxEl.append(...elements);
};

function destroyBoxes(){
  boxEl.innerHTML = "";
};

createButton.addEventListener("click", ()=>{
  createBoxes(numbersInput.value);
});

destroyButton.addEventListener("click", destroyBoxes);
