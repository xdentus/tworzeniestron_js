let form = document.querySelector('#formularz1')

for (let i = 1; i <= 100; i++) {
  form.innerHTML +=
    '<input id="el_' +
    i +
    '" name="element" placeholder="Element numer ' +
    i +
    '">'
}

let form2 = document.querySelector('#formularz2')
let table = document.querySelector('#tabela')

for (let i = 1; i <= 20; i++) {
  var row = table.insertRow(0)
  for (let j = 1; j <= 5; j++) {
    row.insertCell(0)
  }
}

let cells = document.querySelectorAll('td')

for (let i = 0; i <= 100; i++) {
  cells[i].innerHTML = 'Element numer ' + (i + 1)
  cells[i].setAttribute('id', 'cell_' + (i + 1))
  cells[i].style.padding = '10px'
  cells[i].style.boxShadow = '5px 5px lightblue'
}

console.log(cells)
