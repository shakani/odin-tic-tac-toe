const Gameboard = (() => { // module pattern for the single game board
    let board = [[0,0,0],[0,0,0],[0,0,0]];
})();

const Player = (marker) => { // player factory
    return {marker};
}