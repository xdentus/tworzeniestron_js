function allowDrop(ev) {
  ev.preventDefault()
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev) {
  ev.preventDefault()
  var data = ev.dataTransfer.getData('text')
  if (ev.target.tagName === 'TD' && ev.target.childElementCount === 0) {
    ev.target.appendChild(document.getElementById(data))
    console.log('id elementu: ' + data)
    console.log('co przenoszę: ')
    console.log('gdzie przenoszę: ' + ev.target.tagName)
  } else console.log('tak sie nie da')
}
