let x = prompt("Podaj dowolną liczbę rzeczywistą")
document.querySelector("#liczba").innerHTML = x

document.querySelector("#abs").innerHTML = "abs(" + x +") = " + Math.abs(x)
document.querySelector("#ceil").innerHTML = "ceil(" + x +") = " + Math.ceil(x)
document.querySelector("#floor").innerHTML = "floor(" + x +") = " + Math.floor(x)
document.querySelector("#max").innerHTML = "max(" + x +") = " + Math.max(x)
document.querySelector("#min").innerHTML = "min(" + x +") = " + Math.min(x)
document.querySelector("#pow").innerHTML = "pow(" + x +", 2) = " + Math.pow(x, 2)
document.querySelector("#round").innerHTML = "round(" + x +") = " + Math.round(x)
document.querySelector("#sqrt").innerHTML = "sqrt(" + x +") = " + Math.sqrt(x)