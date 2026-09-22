export function initForecast(forecast24h, forecast5d) {
  const forecastList = document.querySelector('.forecast__list');
  const forecastTemplate = document.querySelector('[data-forecast-card-template]');
  const forecastTabs = document.querySelectorAll('.forecast__tab');

  if (!forecastList || !forecastTemplate) return;

  const prevArrow = document.querySelector('.forecast__arrow_type_prev');
  const nextArrow = document.querySelector('.forecast__arrow_type_next');

  function updateArrowsState() {
    if (!prevArrow || !nextArrow) return;

    const wrapper = forecastList.parentElement;

    if (forecastList.scrollLeft <= 0) {
      prevArrow.disabled = true;
      if (wrapper) wrapper.classList.remove('forecast__list-wrapper_mask_left');
    } else {
      prevArrow.disabled = false;
      if (wrapper) wrapper.classList.add('forecast__list-wrapper_mask_left');
    }

    if (Math.ceil(forecastList.scrollLeft + forecastList.clientWidth) >= forecastList.scrollWidth) {
      nextArrow.disabled = true;
      if (wrapper) wrapper.classList.remove('forecast__list-wrapper_mask_right');
    } else {
      nextArrow.disabled = false;
      if (wrapper) wrapper.classList.add('forecast__list-wrapper_mask_right');
    }
  }

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
    forecastList.scrollLeft = 0;

    setTimeout(updateArrowsState, 0);
  }

  forecastTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      forecastTabs.forEach((t) => t.classList.remove('forecast__tab_active'));
      tab.classList.add('forecast__tab_active');

      if (tab.dataset.forecast === '24h') {
        renderForecast(forecast24h);
      } else if (tab.dataset.forecast === '5d') {
        renderForecast(forecast5d);
      }
    });
  });

  forecastList.addEventListener('scroll', updateArrowsState);
  window.addEventListener('resize', updateArrowsState);

  renderForecast(forecast24h);
}
