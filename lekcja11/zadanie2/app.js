const names = [
  'Marcin',
  'Ania',
  'Monika',
  'Piotr',
  'Beata',
  'ania',
  'marcin',
  'piotr',
  'PIOTR',
  'ANIA',
  'MONIKA',
]
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let lista1 = document.querySelector('#list1')
let lista2 = document.querySelector('#list2')
let lista3 = document.querySelector('#list3')
let lista4 = document.querySelector('#list4')
let bottomSection = document.querySelector('.bottom-section')

btn1.addEventListener('click', function () {
  lista1.innerHTML = ''
  lista1.style.visibility = 'visible'
  bottomSection.style.display = 'flex'
  for (let i = 0; i < names.length; i++) {
    lista1.appendChild(document.createElement('li'))
    document.querySelectorAll('#list1 li')[i].innerText = names[i]
  }
})

btn2.addEventListener('click', function () {
  lista2.innerHTML = ''
  lista2.style.visibility = 'visible'
  bottomSection.style.display = 'flex'
  for (let i = 0; i < names.length; i++) {
    lista2.appendChild(document.createElement('li'))
    document.querySelectorAll('#list2 li')[i].innerText = names[i].toLowerCase()
  }
})

btn3.addEventListener('click', function () {
  lista3.innerHTML = ''
  lista3.style.visibility = 'visible'
  bottomSection.style.display = 'flex'
  for (let i = 0; i < names.length; i++) {
    lista3.appendChild(document.createElement('li'))
    document.querySelectorAll('#list3 li')[i].innerText =
      names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()
  }
})

btn4.addEventListener('click', function () {
  lista4.innerHTML = ''
  lista4.style.visibility = 'visible'
  bottomSection.style.display = 'flex'
  for (let i = 0; i < names.length; i++) {
    lista4.appendChild(document.createElement('li'))
    document.querySelectorAll('#list4 li')[i].innerText = names[i].replace(
      /./g,
      '*'
    )
  }
})
