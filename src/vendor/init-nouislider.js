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
        max: 100,
      },
    })
  }

  var lowerNumber = document.getElementById('lower-value');
  var upperNumber = document.getElementById('upper-value');

  if (!lowerNumber || !upperNumber) {
    console.error('Ошибка: значения не найдены')
    return
  }

  if (slider && lowerNumber && upperNumber) {
    slider.noUiSlider.on('update', function (values, handle) {
        var value = values[handle];

        if (handle) {
            upperNumber.value = Math.round(value);
        } else {
            lowerNumber.value = Math.round(value);
        }
    });

    lowerNumber.addEventListener('change', function () {    
      slider.noUiSlider.set([this.value, null]);
    });

    upperNumber.addEventListener('change', function () {
      slider.noUiSlider.set([null, this.value]);
    });
  }
}
