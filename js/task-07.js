const txtSzInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

// наступні (або) дві строки для того, щоб при першому перечуванні повзунка не було скачка в розмірі шрифта
txtSzInput.value = 16;
// textSpan.style.fontSize = "55px";

function fontSiceSpan(){
    textSpan.style.fontSize = `${txtSzInput.value}px`;
    console.log(textSpan.style.fontSize);
};

txtSzInput.addEventListener('input', fontSiceSpan);
console.log(textSpan.style.fontSize);