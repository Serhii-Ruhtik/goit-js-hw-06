const categoriesRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log('Number of categories:', itemRef.length);

itemRef.forEach(function (element) {
  const titleItemRef = element.querySelector('h2');
  const listItemRef = element.querySelector('ul');
  console.log(' ');
  console.log(`Category: ${titleItemRef.textContent}`);
  console.log(`Category: ${listItemRef.children.length}`);
});


// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const counter = parent => { return parent.childElementCount };
// const message = elements => {
//     elements.forEach(element => {
//         const firstElem = element.firstElementChild;
//         const secondElem = firstElem.nextElementSibling
//         console.log(' ');
//         console.log(`Category: ${firstElem.textContent}`);
//         console.log(`Elements: ${counter(secondElem)}`);
//     });
// };
// const categories = document.querySelector('#categories');
// const subCategories = categories.querySelectorAll('.item');
// console.log(`Number of categories: ${counter(categories)}`);
// message(subCategories);
