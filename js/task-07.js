const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input',handleChaingTexstSize);

function handleChaingTexstSize(event) {
    // console.log(event.currentTarget.value);
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}



