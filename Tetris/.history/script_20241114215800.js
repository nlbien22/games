const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const ROW = 60;
const COL = 10;
const SQ = 25;
const COLOR = 'WHITE';
let board = [];

function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * SQ, y * SQ, SQ, SQ);
    context.strokeStyle = 'BLACK';
    context.lineWidth = 1;
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
