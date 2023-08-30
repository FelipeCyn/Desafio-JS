// Menu
const btnGroupVertical = document.querySelector(".btn-group-vertical");
btnGroupVertical.style.cssText = `
    flex-direction: row;
    column-gap: 4px;
`;

btnGroupVertical.querySelectorAll("button").forEach((button) => {
  button.style.cssText = `
    border-radius: 5px;
    text-wrap: nowrap;
  `;
});

// Header
const jumbotron = document.querySelector(".jumbotron");
jumbotron.style = `
    text-align: right;
    background-color: #6b757e;
    color: white;
`;
jumbotron.querySelector("a").style = `
    background-color: #27a745;
    border-color: #27a745;
`;

// Cards
const cards = document.querySelectorAll(".card");
cards[0].querySelector("a").style = `
    background-color: #27a745;
    border-color: #27a745;
`;
const row = document.querySelectorAll(".row")[2];
row.appendChild(row.childNodes[3]);
row.appendChild(row.childNodes[6]);
row.appendChild(row.childNodes[4]);

// Lista
const listGroup = document.querySelector(".list-group");
listGroup.firstElementChild.classList = "list-group-item";
const fourItem = listGroup.lastElementChild.cloneNode(true);
const fifthItem = listGroup.lastElementChild.cloneNode(true);
fourItem.textContent = "Quarto item";
fourItem.classList = "list-group-item active";
fifthItem.textContent = "Quinto item";
listGroup.appendChild(fourItem);
listGroup.appendChild(fifthItem);
