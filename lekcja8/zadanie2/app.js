let text = document.querySelector('#text').innerText

function cutOne() {
  document.querySelector('#result1').innerText = text.substring(26, 36)
  document.querySelector('#result1').style.display = 'block'
}

function cutTwo() {
  document.querySelector('#result2').innerText = text.slice(-12, -5)
  document.querySelector('#result2').style.display = 'block'
}
