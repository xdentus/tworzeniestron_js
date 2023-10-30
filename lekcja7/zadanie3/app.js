function draw() {
    let width = document.querySelector("#width").value
    let height = document.querySelector("#height").value
    let color = document.querySelector("#color").value
    let rectangle = document.querySelector("#rectangle")
    let perimeter = document.querySelector("#perimeter")
    let field = document.querySelector("#field")

    console.log(width, height, color)
    rectangle.style.height = height + "cm"
    rectangle.style.width = width + "cm"
    rectangle.style.backgroundColor = color

    perimeter.innerText = height*2 + width*2
    field.innerText = height * width
}