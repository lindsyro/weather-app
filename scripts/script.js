import { CONFIG } from '../config.js'
import { weatherDetailsData } from './weather-data.js'
import { weatherInfo, renderWeatherInfo } from './weather-info.js'

document.addEventListener('click', (event) => {
  const logoLink = event.target.closest(CONFIG.selectors.logo)

  if (logoLink) {
    if (window.location.pathname === '/') {
      event.preventDefault()
    }
  }
})

renderWeatherInfo(weatherInfo)

const searchInput = document.querySelector(CONFIG.selectors.searchInput)
searchInput.addEventListener('input', () => {
  console.log(searchInput.value)
})

const listContainer = document.querySelector(CONFIG.selectors.listContainer)
const template = document.querySelector(CONFIG.selectors.template)
const fragment = document.createDocumentFragment()

weatherDetailsData.forEach((data) => {
  const cardClone = template.content.cloneNode(true)

  Object.keys(data).forEach((key) => {
    const bemSuffix = key.replace(/_/g, '-')
    const elementSelector = `.${CONFIG.selectors.cardElementPrefix}${bemSuffix}`
    const element = cardClone.querySelector(elementSelector)

    const isServiceKey = ['icon', 'progress_bar', 'text'].includes(key)

    if (element && data[key] !== undefined && !isServiceKey) {
      element.textContent = data[key]
    }
  })

  const iconEl = cardClone.querySelector(`.${CONFIG.cardClasses.icon}`)
  if (iconEl && data.icon) {
    const isWind = data.icon === 'wind'
    let iconName = data.icon
    let pathParts = [CONFIG.paths.baseIcons]

    if (isWind) {
      pathParts.push('directions')
      const russianText = data.text ? data.text.toLowerCase() : ''
      iconName = CONFIG.windDirections[russianText] || data.text
    }

    pathParts.push(`${iconName}.png`)

    iconEl.src = pathParts.join('/').replace(/\/+/g, '/')
    iconEl.alt = data.title
  }

  const textEl = cardClone.querySelector(`.${CONFIG.cardClasses.text}`)
  if (textEl) {
    if (data.text) {
      textEl.textContent = data.text
    } else {
      textEl.remove()
    }
  }

  const progressBarEl = cardClone.querySelector(`.${CONFIG.cardClasses.progressBar}`)

  if (progressBarEl) {
    if (data.progress_bar !== null && data.progress_bar !== undefined) {
      const thumbEl = progressBarEl.querySelector('.progress-thumb')

      if (thumbEl) {
        let progressValue = 0
        if (data.progress_bar === 'high') progressValue = 75
        else if (data.progress_bar === 'normal') progressValue = 50
        else if (data.progress_bar === 'low') progressValue = 25
        else progressValue = Number(data.progress_bar) || 0

        const safeValue = Math.max(0, Math.min(100, progressValue))

        thumbEl.style.left = `${safeValue}%`

        progressBarEl.style.setProperty('--progress', `${safeValue}%`)

        if (data.title === 'Давление') {
          progressBarEl.style.setProperty(
            '--progress-bg',
            'radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)',
          )
        }
      }
    } else {
      progressBarEl.remove()
    }
  }

  const progressValuesEl = cardClone.querySelector(`.${CONFIG.cardClasses.progressValues}`)

  if (progressValuesEl && data.initial_value === null && data.final_value === null) {
    progressValuesEl.remove()
  }

  fragment.append(cardClone)
})

listContainer.append(fragment)
