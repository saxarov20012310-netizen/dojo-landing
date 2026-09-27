const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#mobile-menu');
const desktopQuery = window.matchMedia('(min-width: 768px)');

function setMenuOpen(isOpen) {
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  menu.hidden = !isOpen;
}

burger.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

// После перехода по ссылке меню больше не нужно
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu.hidden) {
    setMenuOpen(false);
    burger.focus();
  }
});

desktopQuery.addEventListener('change', (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});
