let boardSize = 4;

let cooldown = false;

let timer = 0;

document.addEventListener("DOMContentLoaded", generateRandomBoard);

function flipTile(tile) {
    if (tiles.length < 2 && tile.classList.contains("hidden")){
        tile.classList.remove("hidden");
        tile.classList.add("shown");
    }
    console.log("Mr. White yo!")
    console.log(tile);
    if (tile.style.backgroundColor === "green" || cooldown || tile.style.backgroundColor === "red") {
        return;
    }
    tile.style.backgroundColor = "red";
    checkForMatch(tile);
}

let tiles = [];

let counter = 0;
let scoreCounter = document.getElementById("counter").textContent;

function checkForMatch(cell) {
    if (tiles.length < 2) {
        tiles.push(cell);
        if (tiles.length === 2) {
            if (tiles[0].textContent === tiles[1].textContent && tiles[0] !== tiles[1]) {
                tiles[0].style.backgroundColor = "green";
                tiles[1].style.backgroundColor = "green";
                tiles = [];
                counter++;
                document.getElementById("counter").textContent = String(counter);
                return;
            }
            cooldown = true;
            setTimeout(() => {
                tiles[0].style.backgroundColor = "white";
                tiles[1].style.backgroundColor = "white";
                tiles = [];
                cooldown = false;
            }, 1000);
        }
    }
}

function resetGame() {
    document.querySelectorAll(".tile").forEach((tile) => tile.remove());
    tiles = [];
    counter = 0;
    document.getElementById("counter").textContent = String(counter);
    generateRandomBoard();
}

function generateRandomBoard() {

    let fruits = randomFruits();
    timer = 60;

    for (let i = 0; i < boardSize * boardSize; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.classList.add("hidden")
        tile.textContent = fruits[fruits.length - 1];
        fruits.pop();
        tile.addEventListener("click", () => flipTile(tile));
        document.querySelector(".grid-container").appendChild(tile);
    }
}

function randomFruits() {
    let fruits = ["1", "2", "3", "4", "5", "6", "7", "8"];
    fruits = fruits.slice(0, boardSize * 2);
    let doubleFruits = fruits.concat(fruits);
    return doubleFruits.sort(() => Math.random() - 0.5);
}