import { CONFIG } from "../config.js";

export const weatherInfo = {
  city: "Москва",
  date: "Суббота, 06 января",
  time: "11:29",
  degrees: "-7°",
  weather: "Облачно",
  feel: "Ощущается как -11°",
};

export function renderWeatherInfo(data) {
  const mainIcon = document.querySelector(".weather-info__icon");

  if (mainIcon && data.weather) {
    const weatherText = data.weather.toLowerCase();
    const iconName = CONFIG.weatherIcons[weatherText];

    mainIcon.src = `../public/icons/weather/${iconName}.svg`;
    mainIcon.alt = data.weather;

    Object.entries(data).forEach(([key]) => {
      const element = document.querySelector(`.weather-info__${key}`);
      if (element && data[key] !== undefined) {
        element.textContent = data[key];
      }
    });
  }
}
