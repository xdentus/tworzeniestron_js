let paragraph = document.querySelector("#text")
let text = document.querySelector("#text").innerText

function add(e) {
    let name = e.getAttribute('data-name')
    console.log(name)
    e.setAttribute("disabled", true)
    paragraph.innerText += " " + name
}