const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientConteinerEl = document.getElementById(`ingredients`);
console.log(ingredientConteinerEl);
const ingredientEl = ingredients.map(element => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = element;
  itemEl.classList.add(`item`);

  return itemEl;
});
console.log(ingredientEl);

ingredientConteinerEl.append(...ingredientEl);
console.log(ingredientConteinerEl);

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


