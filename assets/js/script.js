//Esercizio 1


let inputElement = document.getElementById("input");
let userName = document.getElementById("inputName");
let btnSaveName = document.getElementById("btnSave");
let btnDeleteName = document.getElementById("btnDelete");

//verifico se ci sono nomi già presenti
const savedName = localStorage.getItem("nome");//qui creo la variabile per recuperare i valori dal local storage(getItem)
if (savedName) {
  inputElement.innerText = `Ciao, ${savedName}`;
} else {
  inputElement.innerText = "No data";
}

//Al click del bottone add mi scrivo l'input html ma anche i valori nel local storage(setItem)
btnSaveName.addEventListener("click", () => {
  inputElement.innerText = `Ciao, ${userName.value}`;
  localStorage.setItem("nome", userName.value);
});

//al click del bottone delete  svuoto e poi scrivo no data, rimuovendo dal local storage il valore
btnDeleteName.addEventListener("click", () => {
  userName.value = "";
  inputElement.innerText = "No data";
  localStorage.removeItem("nome");
});


//Esercizio 2

let counter = document.getElementById("timer");
let count = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0; 
//operatore ternario per verificare se count ha valore da session storage e quindi da stringa trasformarlo in valore numerico intero

setInterval(()=> {
    count++,
    counter.innerText =`${count} Secondi di visualizzazione`;
    sessionStorage.setItem("count", count);

}, 1000);

