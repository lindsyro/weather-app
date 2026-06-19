import { weatherDetailsData } from "./weather-data.js";

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

  const title = cardClone.querySelector(".weather-details__title");
  const value = cardClone.querySelector(".weather-details__value");
  const text = cardClone.querySelector(".weather-details__text");
  const icon = cardClone.querySelector(".weather-details__icon");
  const progressBar = cardClone.querySelector(".weather-details__progress-bar");
  const progressValues = cardClone.querySelector(
    ".weather-details__progress-values",
  );
  const initialValue = cardClone.querySelector(
    ".weather-details__initial-value",
  );
  const finalValue = cardClone.querySelector(".weather-details__final-value");

  if (title) title.textContent = data.title;
  if (value) value.textContent = data.value;
  if (initialValue) initialValue.textContent = data.initial_value;
  if (finalValue) finalValue.textContent = data.final_value;

  if (icon) {
    const isWind = data.icon === "wind";

    let iconName = data.icon;
    let folder = "";

    if (isWind) {
      folder = "directions";
      const russianText = data.text ? data.text.toLowerCase() : "";
      iconName = windDirectionsFiles[russianText] || data.text;
    }

    icon.src = `public/icons/${folder}/${iconName}.png`.replace("//", "/");
    icon.alt = data.title;
  }

  if (text) {
    if (data.hasText && data.text) {
      text.textContent = data.text;
    } else {
      text.remove();
    }
  }

  if (progressBar) {
    if (data.hasProgressBar) {
      progressBar.src = `public/icons/progress/${data.progressBar}.png`;
    } else {
      progressBar.remove();
    }
  }

  if (!data.hasValues) progressValues.remove();

  fragment.append(cardClone);
});

listContainer.append(fragment);
