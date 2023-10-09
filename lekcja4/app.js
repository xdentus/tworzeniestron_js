let textArea = document.querySelector('#textAr')
let textInput = document.querySelector('#textIn')
let selectColor = document.querySelector('#selectColors')
let textToChange = document.querySelector('#textToChange')
let image = document.querySelector("#image")
let copyFrom = document.querySelector("#copyFrom")
let copyInto = document.querySelector("#copyInto")
let textShadow = document.querySelector("#shadowText")

function changeBg() {
  textArea.style.background = 'yellow'
}

function upperCase() {
  textInput.value = textInput.value.toUpperCase()
}

function changeColor() {
  selectColor.style.color = selectColor.value
}

function largeText() {
  textToChange.style.fontSize = 'xx-large'
}

function mediumText() {
  textToChange.style.fontSize = 'medium'
}

function showSrc() {
  alert(image.src)
}

function copyText() {
  copyInto.innerText = copyFrom.value
}

function addShadow() {
  textShadow.style.textShadow = "2px 2px 5px green"
}

function removeShadow() {
  textShadow.style.textShadow = null
}