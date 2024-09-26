import noUiSlider from './nouislider.js'

export default function createUiSlider(slider) {
  if (!noUiSlider) {
    console.error('Ошибка: noUiSlider не найден. ')
    return
  } else if (typeof noUiSlider.create != 'function') {
    console.error('Ошибка: noUislider не содержит метода create. ')
    return
  }
  if (!slider) {
    console.error('Ошибка: переданный слайдер не найден')
    return
  }

  function mergeTooltips(slider, threshold, separator) {
    // let textIsRtl = getComputedStyle(slider).direction === 'rtl'
    // let isRtl = slider.noUiSlider.options.direction === 'rtl'
    // let isVertical = slider.noUiSlider.options.orientation === 'vertical'
    let tooltips = slider.noUiSlider.getTooltips()
    let origins = slider.noUiSlider.getOrigins()

    // Move tooltips into the origin element. The default stylesheet handles this.
    tooltips.forEach(function (tooltip, index) {
      if (tooltip) {
        origins[index].appendChild(tooltip)
      }
    })

    slider.noUiSlider.on('update', function (values, handle, unencoded, tap) {
      let pools = [[]]
      // let poolPositions = [[]]
      let poolValues = [[]]
      // let atPool = 0

      // Assign the first tooltip to the first pool, if the tooltip is configured
      if (tooltips[0]) {
        pools[0][0] = 0
        // poolPositions[0][0] = positions[0]
        poolValues[0][0] = parseFloat(values[0])
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }

      // for (let i = 1; i < positions.length; i++) {
      //   if (!tooltips[i] || positions[i] - positions[i - 1] > threshold) {
      //     atPool++
      //     pools[atPool] = []
      //     poolValues[atPool] = []
      //     poolPositions[atPool] = []
      //   }

      //   if (tooltips[i]) {
      //     pools[atPool].push(i)
      //     poolValues[atPool].push(
      //       parseFloat(values[i])
      //         .toFixed(0)
      //         .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      //     )
      //     poolPositions[atPool].push(positions[i])
      //   }
      // }

      pools.forEach(function (pool, poolIndex) {
        let handlesInPool = pool.length

        for (let j = 0; j < handlesInPool; j++) {
          let handleNumber = pool[j]

          if (j === handlesInPool - 1) {
            // let offset = 0

            // poolPositions[poolIndex].forEach(function (value) {
            //   offset += 1000 - value
            // })

            // let direction = isVertical ? 'bottom' : 'right'
            // let last = isRtl ? 0 : handlesInPool - 1
            // let lastOffset = 1000 - poolPositions[poolIndex][last]
            // offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset

            // Center this tooltip over the affected handles
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator)
            tooltips[handleNumber].style.display = 'block'
            // tooltips[handleNumber].style[direction] = offset + '%'
          } else {
            // Hide this tooltip
            tooltips[handleNumber].style.display = 'none'
          }
        }
      })
    })
  }

  if (slider) {
    noUiSlider.create(slider, {
      start: [30, 100],
      connect: true,
      step: 1,
      tooltips: [true, true],
      range: {
        min: 1,
        // '30%': [30, 100],
        max: 100,
      },
    })

    mergeTooltips(slider, 10, ' - ')
  }
}
