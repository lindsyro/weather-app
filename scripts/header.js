import { CONFIG } from '../config.js';

export function initHeader() {
  const searchInput = document.querySelector(CONFIG.selectors.searchInput);
  const searchForm = searchInput?.closest('form');

  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const value = searchInput.value.trim();
      if (value !== '') {
        console.log(value);
      }
    });
  }
}
