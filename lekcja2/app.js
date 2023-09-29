// zadanie 1
document.querySelector("header").style.backgroundColor = "yellow"

//zadanie 2
var text = document.querySelector("header h1")
text.innerHTML = "tekst"
text.style.fontFamily = "Arial Black"

var sections = document.querySelectorAll("section")
for (const el in sections) {
    el.style.border = "2px solid brown"
}