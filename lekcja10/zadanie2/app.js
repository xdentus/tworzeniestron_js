let hoursHand = document.querySelector('#clock_hours')
let minutesHand = document.querySelector('#clock_minutes')
let hoursInput = document.querySelector('#hours_range')
let minutesInput = document.querySelector('#minutes_range')
let hoursOutput = document.querySelector('#hours_output')
let minutesOutput = document.querySelector('#minutes_output')
let angle = document.querySelector('#angle')

function updateClock() {
  let hoursValue = document.querySelector('#hours_range').value
  //   hoursHand.style.transform = 'rotate(' + hoursValue * 30 + 'deg)'
  hoursOutput.innerText = hoursValue
  let minutesValue = document.querySelector('#minutes_range').value
  minutesHand.style.transform = 'rotate(' + minutesValue * 6 + 'deg)'
  minutesOutput.innerText = minutesValue
  hoursHand.style.transform =
    'rotate(' + (hoursValue * 30 + minutesValue / 2) + 'deg'
  angle.innerText = Math.abs(30 * hoursValue - (11 / 2) * minutesValue) + '°'
}

hoursInput.addEventListener('input', updateClock)
minutesInput.addEventListener('input', updateClock)
