import { CONFIG } from '../config.js'

export function renderWeatherDetails(weatherDetailsData) {
  const listContainer = document.querySelector(CONFIG.selectors.listContainer)
  const template = document.querySelector(CONFIG.selectors.template)
  
  if (!listContainer || !template) return

  const fragment = document.createDocumentFragment()

  weatherDetailsData.forEach((data) => {
    const cardClone = template.content.cloneNode(true)

    Object.keys(data).forEach((key) => {
      const bemSuffix = key.replace(/_/g, '-')
      const elementSelector = `.${CONFIG.selectors.cardElementPrefix}${bemSuffix}`
      const element = cardClone.querySelector(elementSelector)

      const isServiceKey = ['icon', 'text'].includes(key)

      if (element && data[key] !== undefined && !isServiceKey) {
        if (key === 'value' && (data.icon === 'sunrise' || data.icon === 'sunset')) {
          element.innerHTML = `<time datetime="${data[key]}">${data[key]}</time>`
        } else {
          element.textContent = data[key]
        }
      }
    })

    const iconEl = cardClone.querySelector(`.${CONFIG.cardClasses.icon}`)
    if (iconEl && data.icon) {
      const isWind = data.icon === 'wind'
      let iconName = data.icon
      let pathParts = [CONFIG.paths.baseIcons]
      let extension = '.png'

      if (isWind) {
        const russianText = data.text ? data.text.toLowerCase() : ''
        const angle = CONFIG.windDirections[russianText] || 0
        iconName = 'direction'
        extension = '.svg'
        iconEl.style.transform = `rotate(${angle}deg)`
      }

      pathParts.push(`${iconName}${extension}`)

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
      const hasProgressBar = ['Влажность', 'Давление', 'Видимость'].includes(data.title)

      if (hasProgressBar) {
        let progressValue = 0
        const num = parseFloat(data.value)

        if (data.title === 'Влажность') {
          progressValue = num
        } else if (data.title === 'Давление') {
          progressValue = ((num - 740) / (770 - 740)) * 100
        } else if (data.title === 'Видимость') {
          progressValue = (num / 100) * 100
        }

        const safeValue = Math.max(0, Math.min(100, progressValue))

        progressBarEl.style.setProperty('--progress', `${safeValue}%`)

        if (data.title === 'Давление') {
          progressBarEl.style.setProperty(
            '--progress-bg',
            'radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)',
          )
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
}
