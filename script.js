const Gameboard = (() => { // module pattern for the single game board
    let board = [[0,0,0],[0,0,0],[0,0,0]];
})();

const Player = (marker) => { // player factory
    return {marker};
}

// DOM manipulation

let boardContainer = document.querySelector('.board');
for (let i = 0; i < 3; i++) {
    // let rowContainer = document.createElement('div');
    // rowContainer.classList.add('row');
    for (let j = 0; j < 3; j++) {
        let btn = document.createElement('button');
        btn.classList.add('cell');
        btn.id = `cell-${i}-${j}`;
        // rowContainer.appendChild(btn);
        boardContainer.appendChild(btn);
    }
    // boardContainer.appendChild(rowContainer);
}