let x = prompt("Podaj początek przedziału")
let y = prompt("Podaj koniec przedziału")

document.querySelector("#header").innerHTML = "Dziesięć losowych liczb z przedziału od " + x + " do " + y

const array = []
for(let i=0; i < 10; i++) {
    let min = Math.ceil(x)
    let max = Math.floor(y)
    array.push(Math.floor((Math.random() * (max - min) + min)))
}
console.log(array)

let results = document.querySelector("#results")
for (let i = 0; i < 10; i ++){
    results.children[i].innerHTML = array[i]
}

let lowest = document.querySelector("#lowest")
let highest = document.querySelector("#highest")

lowest.innerHTML = "Najmniejsza z tych liczb to " + Math.min(...array)
highest.innerHTML = "Największa z tych liczb to " + Math.max(...array)