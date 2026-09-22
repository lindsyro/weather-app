import { CONFIG } from '../config.js';

export function initHeader() {
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
