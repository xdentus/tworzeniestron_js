let numbers = document.querySelectorAll('input[type="radio"]')
let title = document.querySelector('legend')
let submit = document.querySelector('#submit')

submit.addEventListener('click', function () {
  if (numbers[0].checked) {
    title.innerText = 'Liczby palindromiczne dwucyfrowe'
  } else if (numbers[1].checked) {
    title.innerText = 'Liczby palindromiczne trzycyfrowe'
  } else if (numbers[2].checked) {
    title.innerText = 'Liczby palindromiczne czterocyfrowe'
  } else if (numbers[3].checked) {
    title.innerText = 'Liczby palindromiczne pięciocyfrowe'
  }
})

function generatePalindromes(start, end) {
  function isPalindrome(num) {
    const str = String(num)
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
  }

  const palindromes = []
  for (let i = start; i <= end; i++) {
    if (isPalindrome(i)) {
      palindromes.push(i)
    }
  }
  return palindromes
}

const startNumber = 10
const endNumber = 100
const result = generatePalindromes(startNumber, endNumber)
console.log(result)
