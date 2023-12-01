let lista = document.querySelector('#lista')
let animals = ['niedźwiedź', 'nietoperz', 'łasica', 'żubr', 'dzięcioł', 'łoś']

document.querySelector('#btnOne').addEventListener('click', function () {
  lista.innerHTML = ''
  lista.appendChild(document.createElement('ol'))
  for (let i = 0; i < animals.length; i++) {
    document.querySelector('ol').appendChild(document.createElement('li'))
    document.querySelectorAll('li')[i].innerText = animals[i]
  }
})
document.querySelector('#btnTwo').addEventListener('click', function () {
  lista.innerHTML = ''
  lista.appendChild(document.createElement('ol'))
  document.querySelector('ol').style.listStyleType = 'lower-alpha'
  let i = 0
  for (let animal of animals) {
    document.querySelector('ol').appendChild(document.createElement('li'))
    document.querySelectorAll('li')[i].innerText = animal
    i++
  }
})
document.querySelector('#btnThree').addEventListener('click', function () {
  lista.innerHTML = ''
  lista.appendChild(document.createElement('ol'))
  document.querySelector('ol').style.listStyleType = 'upper-roman'
  animals.forEach((animal, i) => {
    document.querySelector('ol').appendChild(document.createElement('li'))
    document.querySelectorAll('li')[i].innerText = animal
  })
})
