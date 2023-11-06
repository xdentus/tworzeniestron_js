let paragraph = document.querySelector("#text")
function addStart() {
    let text = document.querySelector("#text").innerText
    paragraph.innerText = text.padStart(20, "_")
}

function addEnd() {
    text = document.querySelector("#text").innerText
    paragraph.innerText = text.padEnd(30, ".")
}