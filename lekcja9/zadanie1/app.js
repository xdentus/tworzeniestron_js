function generate() {
  let randomNumber = document.querySelector('#randomNumber')
  let random = Math.floor(Math.random() * (30 - 1) + 1)

  randomNumber.innerText = random

  let isBiggerThan20 = document.querySelector('#isBiggerThan20')
  let isEven = document.querySelector('#isEven')
  let whichTen = document.querySelector('#whichTen')

  if (random >= 20) {
    isBiggerThan20.style.display = "block"
    isBiggerThan20.innerText = 'Wylosowana liczba jest większa lub równa 20.'
  } else {
    isBiggerThan20.style.display = "none"
  }
  if (random % 2 === 0) {
    isEven.innerText = 'Liczba jest parzysta'
  } else {
    isEven.innerText = 'Liczba nie jest parzysta'
  }
  if (random >= 0 && random <= 10) {
    whichTen.innerText = 'Pierwsza dziesiątka'
  } else if (random >= 10 && random <= 20) {
    whichTen.innerText = 'Druga dziesiątka'
  } else if (random >= 20 && random <= 30) {
    whichTen.innerText = 'Trzecia dziesiątka'
  } else if (random > 30) {
    whichTen.innerText = 'nie'
  }
}
