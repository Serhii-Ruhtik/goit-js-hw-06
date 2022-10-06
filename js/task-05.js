const typing = document.querySelector("#name-input");
const initialValue = document.querySelector("#name-output");

typing.addEventListener('input', onTypingForm)

function onTypingForm(event) {
    // console.log(event.currentTarget);
    if (event.currentTarget.value === "") {
        initialValue.textContent = "Anonymous";
    } else {
        initialValue.textContent = event.currentTarget.value;
    }
}






































