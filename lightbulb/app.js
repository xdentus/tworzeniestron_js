let lightbulb = document.querySelector("#bulb")

if (document.querySelector("#on").checked === true || document.querySelector("#isOn").checked === true ||  document.querySelector("#isOn").checked === true) {
    lightbulb.src = "./imgs/lit_bulb.png"
} else {
    lightbulb.src = "./imgs/unlit_bulb.png"
}

document.querySelector("#turnOn").addEventListener('click', function (){
    lightbulb.src = "./imgs/lit_bulb.png"
    document.querySelector("#on").checked = true
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#turnOff").addEventListener('click', function (){
    lightbulb.src = "./imgs/unlit_bulb.png"
    document.querySelector("#off").checked = true
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#on").addEventListener('click', function(){
    lightbulb.src = "./imgs/lit_bulb.png"
    document.querySelector("#off").checked = false
    document.querySelector("#isOn").checked = true
})

document.querySelector("#off").addEventListener('click', function(){
    lightbulb.src = "./imgs/unlit_bulb.png"
    document.querySelector("#on").checked = false
    document.querySelector("#isOn").checked = false
})

document.querySelector("#isOn").addEventListener('click', function(){
    if(document.querySelector("#isOn").checked === true) {
        lightbulb.src = "./imgs/lit_bulb.png"
        document.querySelector("#on").checked = true
        document.querySelector("#off").checked = false
    } else {
        lightbulb.src = "./imgs/unlit_bulb.png"
        document.querySelector("#on").checked = false
        document.querySelector("#off").checked = true
    }
})