let numbers = document.querySelectorAll('input[type="radio"]')
let title = document.querySelector('legend')
let submit = document.querySelector('#submit')
let results = document.querySelector('#result')
let countDiv = document.querySelector('#numbersCount')

submit.addEventListener('click', function () {
  if (numbers[0].checked) {
    title.innerText = 'Liczby palindromiczne dwucyfrowe'
    let a = 10
    let b = 99
    let result = generate(a, b)
    results.innerText = result[0]
    countDiv.innerHTML =
      'Liczb palindromicznych dwucyfrowych jest ' + '<b>' + result[1] + '</b>'
  } else if (numbers[1].checked) {
    title.innerText = 'Liczby palindromiczne trzycyfrowe'
    let a = 100
    let b = 999
    let result = generate(a, b)
    results.innerText = result[0]
    countDiv.innerHTML =
      'Liczb palindromicznych trzycyfrowych jest ' + '<b>' + result[1] + '</b>'
  } else if (numbers[2].checked) {
    title.innerText = 'Liczby palindromiczne czterocyfrowe'
    let a = 1000
    let b = 9999
    let result = generate(a, b)
    results.innerText = result[0]
    countDiv.innerHTML =
      'Liczb palindromicznych czterocyfrowych jest ' +
      '<b>' +
      result[1] +
      '</b>'
  } else if (numbers[3].checked) {
    title.innerText = 'Liczby palindromiczne pięciocyfrowe'
    let a = 10000
    let b = 99999
    let result = generate(a, b)
    results.innerText = result[0]
    countDiv.innerHTML =
      'Liczb palindromicznych pięciocyfrowych jest ' +
      '<b>' +
      result[1] +
      '</b>'
  }
})

function generate(start, end) {
  function isPalindrome(number) {
    let num = number.toString()
    let revNum = num.split('').reverse().join('')
    return num === revNum
  }

  let count = 0
  let numbers = []
  for (let i = start; i <= end; i++) {
    if (isPalindrome(i)) {
      numbers.push(' ' + i)
      count++
    }
  }
  return [numbers, count]
}
