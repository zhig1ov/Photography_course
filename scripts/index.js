const signUpForm = document.querySelector('.sign-up__form');
const signUpEmail = signUpForm.querySelector('.sign-up__form-input');
const signUpButton = signUpForm.querySelector('.sign-up__form-button');

const changeValue = (evt) => {
  signUpButton.value = 'Спасибо';
  evt.preventDefault();
  signUpForm.reset();
}

signUpForm.addEventListener('submit', changeValue)