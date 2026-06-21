import { weatherDetailsData } from "./weather-data.js";
import { weatherInfo, renderWeatherInfo } from "./weather-info.js";

renderWeatherInfo(weatherInfo);

const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
});

const listContainer = document.querySelector(".weather-details");
const template = document.querySelector("[data-weather-card-template]");

const fragment = document.createDocumentFragment();

const windDirectionsFiles = {
  "северный": "north",
  "южный": "south",
  "восточный": "east",
  "западный": "west",
  "северо-западный": "north-west",
  "северо-восточный": "north-east",
  "юго-западный": "south-west",
  "юго-восточный": "south-east",
};

weatherDetailsData.forEach((data) => {
  const cardClone = template.content.cloneNode(true);

  Object.keys(data).forEach((key) => {
    const bemSuffix = key.replace(/_/g, "-");
    const element = cardClone.querySelector(`.weather-details__${bemSuffix}`);

    if (element && data[key] !== undefined) {
      if (key !== "icon" && key !== "progress_bar" && key !== "text") {
        element.textContent = data[key];
      }
    }
  });

  const iconEl = cardClone.querySelector(".weather-details__icon");
  if (iconEl && data.icon) {
    const isWind = data.icon === "wind";

    let iconName = data.icon;
    let folder = "";

    if (isWind) {
      folder = "directions";
      const russianText = data.text ? data.text.toLowerCase() : "";
      iconName = windDirectionsFiles[russianText] || data.text;
    }

    iconEl.src = `public/icons/values/${folder}/${iconName}.png`.replace(
      "//",
      "/",
    );
    iconEl.alt = data.title;
  }

  const textEl = cardClone.querySelector(".weather-details__text");
  if (textEl) {
    if (data.hasText && data.text) {
      textEl.textContent = data.text;
    } else {
      textEl.remove();
    }
  }

  const progressBarEl = cardClone.querySelector(
    ".weather-details__progress-bar",
  );
  if (progressBarEl) {
    if (data.hasProgressBar && data.progress_bar) {
      progressBarEl.src = `public/icons/progress/${data.progress_bar}.png`;
    } else {
      progressBarEl.remove();
    }
  }

  const progressValuesEl = cardClone.querySelector(
    ".weather-details__progress-values",
  );
  if (progressValuesEl && !data.hasValues) {
    progressValuesEl.remove();
  }

  fragment.append(cardClone);
});

listContainer.append(fragment);
