const styleInput = document.querySelector('#validation-input');

styleInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  styleInput.classList.add('invalid');
  styleInput.classList.remove('valid');
  if (
    Number(event.currentTarget.value.length) ===
    Number(styleInput.dataset.length)
  ) {
    styleInput.classList.remove('invalid');
    styleInput.classList.add('valid');
  }

  console.log(event.currentTarget);
}
