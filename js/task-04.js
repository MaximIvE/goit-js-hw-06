let counterValue = 0;
const buttonDecr = document.querySelector("#counter").firstElementChild;
const buttonIncr = document.querySelector("#counter").lastElementChild;
const label = document.querySelector("#value");

buttonDecr.addEventListener("click", () => {
    counterValue = counterValue - 1;
    label.textContent = counterValue;
});

buttonIncr.addEventListener("click", () => {
    counterValue = counterValue + 1;
    label.textContent = counterValue;
});



