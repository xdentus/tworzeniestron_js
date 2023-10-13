let button = document.querySelector('#generate')
let songStorage = document.querySelector('div')
let newInput = document.createElement("input[type = 'text']")

function generateFields() {
  //   console.log('dziala')
  // input[type="hidden"]
  let data = document.querySelector("input[type = 'hidden']").dataset
  console.log(data)
  console.log(songStorage)

  songStorage.appendChild(newInput)

  //   console.log(document.querySelector("input[type = 'hidden']").dataset)
}
