const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map(function (element) {
  const elements = document.createElement("li");
  elements.textContent = element;
  elements.classList.add("item");
  console.log(elements);

  const ulIngredientsRef = document.querySelector('#ingredients');
ulIngredientsRef.append(elements);
})






// const ingredientsRef = document.createElement('li');
// ingredientsRef.classList.add('item');
// ingredientsRef.textContent = 'pfujkjdjr'

// console.log(ingredientsRef);

// const ingredientsLinkRef = document.createElement('a');
// ingredientsLinkRef.classList.add('list__ingredients');
// ingredientsLinkRef.textContent = 'my room';
// ingredientsLinkRef.href = '/profile';

// console.log(ingredientsLinkRef);

// ingredientsRef.appendChild(ingredientsLinkRef);
// console.log(ingredientsRef)


// const ulIngredientsRef = document.querySelector('#ingredients');
// ulIngredientsRef.appendChild(ingredientsRef)