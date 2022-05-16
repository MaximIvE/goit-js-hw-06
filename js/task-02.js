const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrEl = ingredients.map((ingridient) =>{
  const listEl = document.createElement("li");
  listEl.textContent = ingridient;
  listEl.classList = "item";
  return listEl;
}
);

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...arrEl);