const Gameboard = (() => { // module pattern for the single game board
    let board = [[0,0,0],[0,0,0],[0,0,0]];

    const clearBoard = () => {
        Gameboard.board = [[0,0,0],[0,0,0],[0,0,0]];
        let cells = document.querySelectorAll('.cell');
        cells.forEach(button => {
            button.textContent = '';
        });
    };

    const isValidMove = (i, j) => {
        return Gameboard.board[i][j] === 0;
    };

    const turn = (i, j, marker) => {
        if (isValidMove(i, j)) {
            Gameboard.board[i][j] = marker;
            let cell = document.querySelector(`#cell-${i}-${j}`);
            cell.textContent = marker;
        }
        else {
            return 'INVALID MOVE';
        }
    };

    return {board, clearBoard, isValidMove, turn};
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