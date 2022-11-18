
let userName = prompt ("Ciao! Qual'è il tuo nome?")

let userSurname = prompt("Ora dimmi il tuo cognome :)")

let userColor = prompt ("Manca solo il tuo colore preferito!")

console.log (userName, userSurname, userColor)

document.getElementById("output") .innerHTML = "La tua password sarà: " + userName + userSurname + userColor + "22";