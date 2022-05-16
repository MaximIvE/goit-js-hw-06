// ------------ №1 ------------
//--- Спосіб 1

// const titleEl = document.querySelector('#categories');
// const listEl = titleEl.children;
// const number = listEl.length;
// console.log(`Number of categories: ${number}`);

//--- Спосіб 2

const titleEl = document.querySelectorAll('li.item');
console.log(titleEl.length);
console.log("");

// ------------ №2 ------------

for (const element of titleEl) {
    const categoryEl = element.firstElementChild.textContent;
    const elementsEl = element.lastElementChild.children.length;
    console.log(`Category: ${categoryEl}`);
    console.log(`Elements: ${elementsEl}`);
    console.log("");
}
