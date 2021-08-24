const signUpForm = document.querySelector('.sign-up__form');
const signUpEmail = signUpForm.querySelector('.sign-up__form-input');
const signUpButton = signUpForm.querySelector('.sign-up__form-button');

const changeValue = (evt) => {
  signUpButton.value = 'Спасибо';
  evt.preventDefault();
  signUpForm.reset();
}

signUpForm.addEventListener('submit', changeValue)

// Функциональность для открытия меню-бургера
const buttonBurgerMenu = document.querySelector('.header__button-burger');
const burgerMenu = document.querySelector('.header__navigation-bar');
const logoArrowHeader = document.querySelector('.header__logo');

function openBurgerMenu(burgerMenu) {
  burgerMenu.classList.add('header__navigation-bar_active');
  buttonBurgerMenu.classList.add('header__button-burger_active');
  logoArrowHeader.classList.add('header__logo_active');
}

buttonBurgerMenu.addEventListener('click', () => {
  openBurgerMenu(burgerMenu)
});

// Функциональность для закрытия меню-бургера
const buttonCloseBar = document.querySelector('.header__button-close');

function closeMenu(burgerMenu) {
  burgerMenu.classList.remove('header__navigation-bar_active');
  buttonBurgerMenu.classList.remove('header__button-burger_active');
  logoArrowHeader.classList.remove('header__logo_active');
}

buttonCloseBar.addEventListener('click', () => {
  closeMenu(burgerMenu)
})

  
  // /*Закрытие навигационного меню */ 
  // const navBarMobileClose = document.querySelector('.header__button-close');
  
  // function closeMenu(burgerMenu) {
  //     burgerMenu.classList.remove("header__nav-bar_active");
  //     burgerMenuButton.classList.remove('header__button-burger_active');
  //     logoHeader.classList.remove('header__logo_active')
  //   }
  
  //    navBarMobileClose.addEventListener('click', () => {
  //     closeMenu(burgerMenu)
  //   });