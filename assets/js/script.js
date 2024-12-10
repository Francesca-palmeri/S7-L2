let inputElement = document.getElementById("input");
let userName = document.getElementById("inputName");
let btnSaveName = document.getElementById("btnSave");
let btnDeleteName = document.getElementById("btnDelete");

const savedName = localStorage.getItem("nome");
if (savedName) {
  inputElement.textContent = `Ciao, ${savedName}`;
} else {
  inputElement.textContent = "No data";
}

btnSaveName.addEventListener("click", () => {
  let nome = userName.value;
  inputElement.textContent = `Ciao, ${nome}`;
  localStorage.setItem("nome", nome);
});

btnDeleteName.addEventListener("click", () => {
  userName.value = "";
  inputElement.textContent = "No data";
  localStorage.removeItem("nome");
});
