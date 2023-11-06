let text = document.querySelector("#text").innerText
let paragraph = document.querySelector("#text")
let textUpper = text.toUpperCase()
let textLower = text.toLowerCase()
function toUpper() {
    paragraph.innerText = textUpper
}

function toLower(){
    paragraph.innerText = textLower
}

function toDefault() {
    paragraph.innerText = text
}