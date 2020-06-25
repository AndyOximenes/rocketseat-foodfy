const modalOverlay = document.querySelector(".modal-overlay");
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
