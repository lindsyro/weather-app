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
    облачно: "cloudy",
    ясно: "clear",
    пасмурно: "cloudy",
    дождь: "rainy",
    снег: "snowy",
    гроза: "stormy",
  }
};
