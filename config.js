export const CONFIG = {
  paths: {
    baseIcons: 'public/icons/values',
  },

  selectors: {
    searchInput: '.search__input',
    listContainer: '.weather-details',
    template: '[data-weather-card-template]',
    cardElementPrefix: 'weather-details__',
    logo: '.logo__img',
  },

  cardClasses: {
    icon: 'weather-details__icon',
    text: 'weather-details__text',
    progressBar: 'weather-details__progress-bar',
    progressValues: 'weather-details__progress-values',
  },

  windDirections: {
    north: -45,
    'north-east': 0,
    east: 45,
    'south-east': 90,
    south: 135,
    'south-west': 180,
    west: 225,
    'north-west': 270,
  },

  weatherIcons: {
    clear: '01d',
    sunny: '01d',
    'partly-cloudy': '02d',
    cloudy: '04d',
    overcast: '04d',
    shower: '09d',
    rain: '10d',
    thunderstorm: '11d',
    snow: '13d',
    fog: '50d',
  },
};
