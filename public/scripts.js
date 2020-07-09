// === MENU ACTIVE ===

const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

// === OPEN RECIPE ===

// const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const recipeId = card.getAttribute("id");
  const cardImg = card.querySelector("img");
  card.addEventListener("click", () => {
    window.location = `/recipes/${recipeId}`;
  });

  // const imgId = card.getAttribute("id");
  // const title = card.querySelector("h3").textContent;
  // const author = card.querySelector("p").textContent;

  // modalOverlay.classList.add("active");
  // modalOverlay.querySelector("img").src = `assets/${imgId}.png`;
  // modalOverlay.querySelector("h3").innerHTML = title;
  // modalOverlay.querySelector("p").innerHTML = author;
  // });
}

// document.querySelector(".close-modal").addEventListener("click", () => {
//   modalOverlay.classList.remove("active");
//   modalOverlay.querySelector("iframe").src = "";
// });

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
