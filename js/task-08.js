const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // console.log(formRef);

  const formElements = event.currentTarget.elements;

  // console.log(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail === '' || password === '') {
    alert('Fill in all the points!');
  } else{

  const formData = {
    mail,
    password,
  };

  console.log(formData);
  formRef.reset();
};
  console.log('Це сабміт форми');

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //     console.log('value', value);
  //     console.log('name', name);
  // });
}

