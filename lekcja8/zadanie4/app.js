let text = document.querySelector("#text").innerText
let paragraph = document.querySelector("#text")
let parts = [text]

function add() {
    // parts.push("!")
    // let combined = parts.join("")
    // paragraph.innerText = combined

    // paragraph.innerText = text.concat("!")
    // let placeholder = paragraph.innerText
    // paragraph.innerText = placeholder.concat("!")

    paragraph.innerText += text.concat("!").substring(6)
}