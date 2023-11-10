let number = document.querySelector('#number')
let divider = document.querySelector('#divider')
let result = document.querySelector('#result')
let residue = document.querySelector('#residue')

number.addEventListener('change', function () {
  if (divider.value == 0) {
    result.value = 'nie mozna dzielic przez 0'
  } else {
    result.value = Math.floor(number.value / divider.value)
    residue.value = number.value % divider.value
  }
})

divider.addEventListener('change', function () {
  if (divider.value == 0) {
    result.value = 'nie mozna dzielic przez 0'
  } else {
    result.value = Math.floor(number.value / divider.value)
    residue.value = number.value % divider.value
  }
})
