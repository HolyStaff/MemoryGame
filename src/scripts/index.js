import * as tile from "./tile_functionality";

let boardSize = 4;



document.addEventListener("DOMContentLoaded", generateBoard); // Generate a board when the page is loaded

function generateBoard(){
    for(let i = 0; i < boardSize**2; i++){
        tile.create();
    }
}



