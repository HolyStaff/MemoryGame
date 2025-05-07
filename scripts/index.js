let tiles = [];

function flipTile(cell) {
    if (cell.style.backgroundColor === "green") {
        return;
    }
    cell.style.backgroundColor = "red";
    checkForMatch(cell);
}

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
    for (let i = 0; i < document.getElementsByClassName("tile").length; i++) {
        document.getElementsByClassName("tile")[i].style.backgroundColor = "white";
    }
    tiles = [];
}