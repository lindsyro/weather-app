const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
});

const weatherData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
];

const listContainer = document.querySelector('.weather-details');
const template = document.querySelector('[data-weather-card-template]');

weatherData.forEach(data => {
  const cardClone = template.content.cloneNode(true);
  listContainer.append(cardClone);
});
