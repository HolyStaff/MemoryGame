let boardSize = 4;

function flipTile(cell) {
    if (cell.style.backgroundColor === "green") {
        return;
    }
    cell.style.backgroundColor = "red";
    checkForMatch(cell);
}

let tiles = [];

function checkForMatch(cell) {
    if (tiles.length < 2) {
        tiles.push(cell);
        if (tiles.length === 2) {
            if (tiles[0].textContent === tiles[1].textContent) {
                tiles[0].style.backgroundColor = "green";
                tiles[1].style.backgroundColor = "green";
                tiles = [];
                return;
            }
            setTimeout(() => {
                tiles[0].style.backgroundColor = "white";
                tiles[1].style.backgroundColor = "white";
                tiles = [];
            }, 1000);
        }
    }
}

function resetGame() {
    document.querySelectorAll(".tile").forEach((tile) => tile.remove());
    tiles = [];

    generateRandomBoard();
}

function generateRandomBoard() {
    let fruits = randomFruits();

    for (let i = 0; i < boardSize * boardSize; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = fruits[fruits.length - 1];
        fruits.pop();
        tile.addEventListener("click", flipTile);
        document.querySelector(".grid-container").appendChild(tile);
    }
}

function randomFruits() {
    let fruits = ["🍌", "🍎", "🍒", "🍓", "🍉", "🍊", "🍋", "🍇"];
    fruits = fruits.slice(0, boardSize * 2);
    let doubleFruits = fruits.concat(fruits);
    return doubleFruits.sort(() => Math.random() - 0.5);
}