let text = document.querySelector('#text')
let changeBtn = document.querySelector('#change-btn')
text.innerText =
  'Za pomocą metody innerText, zmień zawartość tego elementu <div> na: <i>Świetnie!</i> '

changeBtn.addEventListener('click', function () {
  text.innerText = '<i>Świetnie!</i>'
})
