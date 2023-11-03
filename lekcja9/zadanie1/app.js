function generate() {
  let randomNumber = document.querySelector('#randomNumber')
  let losowa = Math.floor(Math.random() * (30 - 1) + 1)

  randomNumber.innerText = losowa

  let isBiggerThan20 = document.querySelector('#isBiggerThan20')
  let isEven = document.querySelector('#isEven')
  let whichTen = document.querySelector('#whichTen')

  if (losowa >= 20) {
    isBiggerThan20.innerText = 'Wylosowana liczba jest większa lub równa 20.'
  } else if (losowa % 2 == 0) {
    isEven.innerText = 'Liczba jest parzysta'
  } else if (losowa % 2 != 0) {
    isEven.innerText = 'Liczba nie jest parzysta'
  } else if (losowa <= 10 || losowa > 0) {
    whichTen.innerText = 'Pierwsza dziesiątka'
  } else if (losowa <= 20 || losowa > 10) {
    whichTen.innerText = 'Druga dziesiątka'
  } else if (losowa <= 30 || losowa > 20) {
    whichTen.innerText = 'Trzecia dziesiątka'
  }
}
