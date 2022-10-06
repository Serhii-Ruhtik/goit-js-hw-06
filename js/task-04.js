let counterValue = 0;

const addListenerButton = document.querySelector('[data-action="increment"]');
const listenerSubtractionButton = document.querySelector
('[data-action="decrement"]');
const valueNamber = document.querySelector('#value');


addListenerButton.addEventListener("click", () => {
    counterValue += 1;
    valueNamber.textContent = counterValue;
});

listenerSubtractionButton.addEventListener("click", () => {
    counterValue -= 1;
    valueNamber.textContent = counterValue;
});