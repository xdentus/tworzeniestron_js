function count() {
  let result = document.querySelector('#result')
  let text = document.querySelector('#text').innerText

  result.innerText = 'Tekst powyżej ma długość ' + text.length + ' znaków.'
  result.style.display = 'block'
}
