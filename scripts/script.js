import { initHeader } from './header.js'
import { renderWeatherDetails } from './weather-details.js'
import { initForecast } from './forecast.js'
import { weatherInfo, renderWeatherInfo } from './weather-info.js'
import { weatherDetailsData, forecast24h, forecast5d } from './weather-data.js'

document.addEventListener('DOMContentLoaded', () => {
  renderWeatherInfo(weatherInfo)
  initHeader()
  renderWeatherDetails(weatherDetailsData)
  initForecast(forecast24h, forecast5d)
})
