const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createElementLi(ingredients) {
  const arrLi = [];

  ingredients.forEach((ingredient) => {
    const element = document.createElement('li');
    element.textContent = ingredient;
    element.classList.add('item');
    arrLi.push(element);
  });
  return arrLi;
};
const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...createElementLi(ingredients));

