let button = document.querySelector('#generate')
let songStorage = document.querySelector('#songStorage')

function generateFields() {
  songStorage.innerHTML = ' '
  let data = document.querySelector("input[type = 'hidden']").dataset
  let newInput1 = document.createElement('input')
  newInput1.setAttribute('type', 'text')
  newInput1.setAttribute('value', data.song1)
  let newInput2 = document.createElement('input')
  newInput2.setAttribute('type', 'text')
  newInput2.setAttribute('value', data.song2)
  let newInput3 = document.createElement('input')
  newInput3.setAttribute('type', 'text')
  newInput3.setAttribute('value', data.song3)

  console.log(data)

  songStorage.appendChild(newInput1)
  songStorage.appendChild(newInput2)
  songStorage.appendChild(newInput3)

  //   console.log(document.querySelector("input[type = 'hidden']").dataset)
  console.log(songStorage.tagName)
}
