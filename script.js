const Gameboard = (() => { // module pattern for the single game board
    let board = [[0,0,0],[0,0,0],[0,0,0]];
    let markers = ['X', 'O'];
    let turnCounter = 0;

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

    const turn = (i, j) => {
        if (isValidMove(i, j)) {
            let marker = Gameboard.markers[Gameboard.turnCounter%2];
            Gameboard.board[i][j] = marker;
            let cell = document.querySelector(`#cell-${i}-${j}`);
            cell.textContent = marker;
            Gameboard.turnCounter++;

            if(isGameOver()) {
                alert(`${isGameOver()} wins!`);
                Gameboard.clearBoard();
                Gameboard.turnCounter = 0;
            }
        }
        else {
            return 'INVALID MOVE';
        }
    };

    const isGameOver = () => { // checks if game is over
        // first check each row
        for (let i = 0; i < 3; i++) { // check rows
            let row = Gameboard.board[i];
            if (row[0] === row[1] && row[1] == row[2]) {
                if(row[0]) {
                    return row[0];
                }
            }
        }
        for (let j = 0; j < 3; j++) { // check columns
            if (Gameboard.board[0][j] == Gameboard.board[1][j] && Gameboard.board[1][j] == Gameboard.board[2][j]) {
                if(Gameboard.board[0][j]) {
                    return Gameboard.board[0][j];
                }
            }
        }
        // check diagonals
        if (Gameboard.board[0][0] == Gameboard.board[1][1] && Gameboard.board[1][1] == Gameboard.board[2][2]) {
            if(Gameboard.board[1][1]) {
                return Gameboard.board[1][1];
            }
        }
        if (Gameboard.board[0][2] == Gameboard.board[1][1] && Gameboard.board[1][1] == Gameboard.board[2][0]) {
            if(Gameboard.board[1][1]) {
                return Gameboard.board[1][1];
            }
        }

        // checking for tie!
        if (Gameboard.turnCounter == 9) {
            return 'Tie! Nobody';
        }

        return false;
    };

    return {board, markers, turnCounter, clearBoard, isValidMove, turn};
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

        btn.addEventListener('click', () => {
            Gameboard.turn(i, j);
        });

        boardContainer.appendChild(btn);
    }
    // boardContainer.appendChild(rowContainer);
}

Gameboard.clearBoard();