export const CONFIG = {
  paths: {
    baseIcons: "public/icons/values",
    progressIcons: "public/icons/progress",
  },

  selectors: {
    searchInput: ".search__input",
    listContainer: ".weather-details",
    template: "[data-weather-card-template]",
    cardElementPrefix: "weather-details__",
    logo: ".logo__img",
  },

  cardClasses: {
    icon: "weather-details__icon",
    text: "weather-details__text",
    progressBar: "weather-details__progress-bar",
    progressValues: "weather-details__progress-values",
  },

  windDirections: {
    северный: "north",
    южный: "south",
    восточный: "east",
    западный: "west",
    "северо-западный": "north-west",
    "северо-восточный": "north-east",
    "юго-западный": "south-west",
    "юго-восточный": "south-east",
  },

  weatherIcons: {
    'ясно': '01d',
    'солнечно': '01d',
    'облачно с прояснениями': '02d',
    'переменная облачность': '03d',
    'облачно': '04d',
    'пасмурно': '04d',
    'ливень': '09d',
    'дождь': '10d',
    'гроза': '11d',
    'снег': '13d',
    'туман': '50d',
  }
};
