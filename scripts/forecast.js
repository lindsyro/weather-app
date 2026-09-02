export function initForecast(forecast24h, forecast5d) {
  const forecastList = document.querySelector('.forecast__list');
  const forecastTemplate = document.querySelector('[data-forecast-card-template]');
  const forecastTabs = document.querySelectorAll('.forecast__tab');

  if (!forecastList || !forecastTemplate) return;

  function renderForecast(data) {
    forecastList.innerHTML = '';
    const forecastFragment = document.createDocumentFragment();

    data.forEach((item) => {
      const cardClone = forecastTemplate.content.cloneNode(true);

      const timeEl = cardClone.querySelector('.forecast__time');
      const iconEl = cardClone.querySelector('.forecast__icon');
      const tempEl = cardClone.querySelector('.forecast__temp');

      if (timeEl) timeEl.textContent = item.time;
      if (iconEl && item.icon) {
        iconEl.src = `public/icons/weather/${item.icon}.svg`;
        iconEl.alt = 'Погода';
      }
      if (tempEl) tempEl.textContent = item.temp;

      forecastFragment.append(cardClone);
    });

    forecastList.append(forecastFragment);
  }

  forecastTabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      forecastTabs.forEach((t) => t.classList.remove('forecast__tab_active'));
      tab.classList.add('forecast__tab_active');

      if (index === 0) {
        renderForecast(forecast24h);
      } else {
        renderForecast(forecast5d);
      }
    });
  });

  // Initialize with 24 hours
  renderForecast(forecast24h);
}
