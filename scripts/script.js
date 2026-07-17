import { CONFIG } from "../config.js";
import { weatherDetailsData } from "./weather-data.js";
import { weatherInfo, renderWeatherInfo } from "./weather-info.js";

document.addEventListener("click", (event) => {
  const logoLink = event.target.closest(CONFIG.selectors.logo);

  if (logoLink) {
    if (window.location.pathname === "/") {
      event.preventDefault();
    }
  }
});

renderWeatherInfo(weatherInfo);

const searchInput = document.querySelector(CONFIG.selectors.searchInput);
searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
});

const listContainer = document.querySelector(CONFIG.selectors.listContainer);
const template = document.querySelector(CONFIG.selectors.template);
const fragment = document.createDocumentFragment();

weatherDetailsData.forEach((data) => {
  const cardClone = template.content.cloneNode(true);

  // Заполнение базовых текстовых данных
  Object.keys(data).forEach((key) => {
    const bemSuffix = key.replace(/_/g, "-");
    const elementSelector = `.${CONFIG.selectors.cardElementPrefix}${bemSuffix}`;
    const element = cardClone.querySelector(elementSelector);

    const isServiceKey = ["icon", "progress_bar", "text"].includes(key);

    if (element && data[key] !== undefined && !isServiceKey) {
      element.textContent = data[key];
    }
  });

  // Логика иконок (ветер и т.д.)
  const iconEl = cardClone.querySelector(`.${CONFIG.cardClasses.icon}`);
  if (iconEl && data.icon) {
    const isWind = data.icon === "wind";
    let iconName = data.icon;
    let pathParts = [CONFIG.paths.baseIcons];

    if (isWind) {
      pathParts.push("directions");
      const russianText = data.text ? data.text.toLowerCase() : "";
      iconName = CONFIG.windDirections[russianText] || data.text;
    }

    pathParts.push(`${iconName}.png`);

    iconEl.src = pathParts.join("/").replace(/\/+/g, "/");
    iconEl.alt = data.title;
  }

  // Логика текста
  const textEl = cardClone.querySelector(`.${CONFIG.cardClasses.text}`);
  if (textEl) {
    if (data.hasText && data.text) {
      textEl.textContent = data.text;
    } else {
      textEl.remove();
    }
  }

  // === НОВАЯ ЛОГИКА ПРОГРЕСС-БАРА ===
  const progressBarEl = cardClone.querySelector(
    `.${CONFIG.cardClasses.progressBar}`
  );
  
  if (progressBarEl) {
    if (data.hasProgressBar && data.progress_bar !== undefined && data.progress_bar !== null) {
      
      // Ищем кругляшок ИМЕННО В ЭТОЙ карточке
      const thumbEl = progressBarEl.querySelector('.progress-thumb');
      
      if (thumbEl) {
        // Приводим значение к числу (раньше тут было имя картинки, теперь ожидаем число, например 75)
        const progressValue = Number(data.progress_bar) || 0;
        
        // Ограничиваем от 0 до 100, чтобы не улетело за края
        const safeValue = Math.max(0, Math.min(100, progressValue));
        
        // Устанавливаем позицию кругляшка
        thumbEl.style.left = `${safeValue}%`;
      }
    } else {
      // Если бар не нужен (hasProgressBar = false), удаляем его из карточки
      progressBarEl.remove();
    }
  }
  // ===================================

  // Логика текстовых значений под баром
  const progressValuesEl = cardClone.querySelector(
    `.${CONFIG.cardClasses.progressValues}`
  );

  if (progressValuesEl && !data.hasValues) {
    progressValuesEl.remove();
  }

  fragment.append(cardClone);
});

// Добавляем все собранные карточки в DOM за один раз
listContainer.append(fragment);