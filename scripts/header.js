import { CONFIG } from '../config.js';

export function initHeader() {
  document.addEventListener('click', (event) => {
    const logoLink = event.target.closest(CONFIG.selectors.logo);

    if (logoLink) {
      if (window.location.pathname === '/') {
        event.preventDefault();
      }
    }
  });

  const searchInput = document.querySelector(CONFIG.selectors.searchInput);
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const value = searchInput.value.trim();
      if (value !== '') {
        console.log(value);
      }
    });
  }
}
