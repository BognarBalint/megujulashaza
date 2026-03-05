const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar2');
const navMenu2 = document.querySelector('.navbar_kicsi');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (navMenu) {
      navMenu.classList.toggle('active');
    }

    if (navMenu2) {
      navMenu2.classList.toggle('active');
    }
  });
}
