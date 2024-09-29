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

  if (slider) {
    noUiSlider.create(slider, {
      start: [30, 100],
      connect: true,
      behaviour: 'tap',
      range: {
        min: 0,
        // '30%': [30, 100],
        max: 100,
      },
    })
  }

  var nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
  ];

  if (!nodes) {
    console.error('Ошибка: значения не найдены')
    return
  }
  // Display the slider value and how far the handle moved
  // from the left edge of the slider.
  if (slider&&nodes) {
    slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = positions[handle].toFixed(0);
    });
  }
}
