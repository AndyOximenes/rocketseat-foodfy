// === MENU ACTIVE ===

const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

// === OPEN RECIPE ===

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const id = card.getAttribute("id");
  card.addEventListener("click", () => {
    window.location = `/recipes/${id}`;
  });
}

var buttons = document.querySelectorAll(".button-hide");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hide");
    if (e.target.innerHTML == "ESCONDER") {
      e.target.innerHTML = "MOSTRAR";
    } else {
      e.target.innerHTML = "ESCONDER";
    }
  });
});

// === ADD INGREDIENTS/PREPARATION RECIPE - POST/PUT ===

const addIngredient = document.querySelector(".add-ingredient");
const addPreparation = document.querySelector(".add-preparation");

function addField(ID, CLASS) {
  const id = document.querySelector(ID);
  const fieldContainer = document.querySelectorAll(CLASS);
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";

  id.appendChild(newField);
}

addIngredient.addEventListener("click", function () {
  addField("#ingredients", ".ingredients");
});

addPreparation.addEventListener("click", function () {
  addField("#preparation", ".preparations");
});

// === REALLY DELETE RECIPE? ===

const formDelete = document.querySelector("#form-delete");
formDelete.addEventListener("submit", (e) => {
  const confirmation = confirm("Deseja apagar a receita?");
  if (!confirmation) {
    e.preventDefault();
  }
});
