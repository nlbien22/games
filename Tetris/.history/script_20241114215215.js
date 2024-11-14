const canvas = document.getElementById('tetris');
const context = canvas.getContext('3d');

const ROW = 55;
const COL = 5;
const SQ = 10;
const COLOR = 'WHITE';
let board = [];

function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * SQ, y * SQ, SQ, SQ);
    context.strokeStyle = 'BLUE';
    context.strokeRect(x * SQ, y * SQ, SQ, SQ);
}


for (let r = 0; r < ROW; r++) {
    board[r] = [];
    for (let c = 0; c < COL; c++) {
        board[r][c] = COLOR;
    }
}

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            drawSquare(c, r, board[r][c]);
            // break;
        }
    }
}

drawBoard();
