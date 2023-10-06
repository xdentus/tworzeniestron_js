let textArea = document.querySelector('#textAr')
let textInput = document.querySelector('#textIn')
let selectColor = document.querySelector('#selectColors')
let textToChange = document.querySelector('#textToChange')

function changeBg() {
  textArea.style.background = 'yellow'
}

function upperCase() {
  let textHolder = textInput.value.toUpperCase()
  textInput.value = textHolder
}

function changeColor() {
  let color = selectColor.value
  selectColor.style.color = color
}

function largeText() {
  textToChange.style.fontSize = 'xx-large'
}

function mediumText() {
  textToChange.style.fontSize = 'medium'
}
