const Gameboard = (() => { // module pattern for the single game board
    let board = [[0,0,0],[0,0,0],[0,0,0]];

    const clearBoard = () => {
        Gameboard.board = [[0,0,0],[0,0,0],[0,0,0]];
        cells = document.querySelectorAll('.cell');
        cells.forEach(button => {
            button.textContent = '';
        });
    };

    const turn = (i, j, marker) => {
        board[i][j] = marker;
    };

    return {board, clearBoard, turn};
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

Gameboard.clearBoard();