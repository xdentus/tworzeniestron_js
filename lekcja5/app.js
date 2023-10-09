function showText(e) {
    let textToShow = document.querySelector("#paragraph" + e)
    let arrow = document.querySelector("#strzalka" + e)
    if (textToShow.style.display === "none") {
        textToShow.style.display = "block"
        arrow.innerHTML = "&#8613"
    } else {
        textToShow.style.display = "none"
        arrow.innerHTML = "&#8615"
    }
}