
const userName = prompt("Ciao! Qual'è il tuo nome?");

const userSurname = prompt("Ora dimmi il tuo cognome:)");

const userColor = prompt("E il colore preferito?");

console.log(userName, userSurname, userColor);

const userAge = parseInt(prompt("Mi manca solo la tua età (sii sincero, tanto lo scopro se menti)"));

const addYears = 10;
let fakeAge = userAge + addYears;

console.log(userAge)

document.getElementById("output").innerHTML = "La tua password sarà:" + userName + userSurname + userColor + fakeAge;