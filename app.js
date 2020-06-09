const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.querySelector(".flex-container");
const renderCards = (cards) => {
  container.innerHTML = "";
  cards.forEach((card) => {
    const div = document.createElement("div");
    div.classList.add(`card-${card}`);
    div.innerText = card;
    container.appendChild(div);
  });
};

const shuffleCards = () => {
  cards.sort(() => Math.random() - 0.5);
  renderCards(cards);
};

const sortCards = () => {
  cards.sort((a, b) => a - b);
  renderCards(cards);
};

renderCards(cards);
