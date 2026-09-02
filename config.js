export const CONFIG = {
  paths: {
    baseIcons: 'public/icons/values',
    progressIcons: 'public/icons/progress',
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
    северный: -45,
    'северо-восточный': 0,
    восточный: 45,
    'юго-восточный': 90,
    южный: 135,
    'юго-западный': 180,
    западный: 225,
    'северо-западный': 270,
  },

  weatherIcons: {
    ясно: '01d',
    солнечно: '01d',
    'облачно с прояснениями': '02d',
    'переменная облачность': '03d',
    облачно: '04d',
    пасмурно: '04d',
    ливень: '09d',
    дождь: '10d',
    гроза: '11d',
    снег: '13d',
    туман: '50d',
  },
};
