let miesiac = Math.floor(Math.random() * (15 - 1) + 1)

document.querySelector("#number").innerText = miesiac
let month = document.querySelector("#month")

switch (miesiac){
    case 1: case 2: case 3:
        month.innerText = "I kwartał"
        break
    case 4: case 5: case 6:
        month.innerText = "II kwartał"
        break
    case 7: case 8: case 9:
        month.innerText = "III kwartał"
        break
    case 10: case 11: case 12:
        month.innerText = "IV kwartał"
        break
    default:
        month.innerText = "Błędny numer miesiąca"
        break
}

