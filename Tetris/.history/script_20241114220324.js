const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const ROW = 60;
const COL = 10;
const SQ = 30;
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

class Piece {
    constructor(tetri, color) {
        this.tetri = tetri;
        this.color = color;
        this.tetriN = 0;
        this.activeTetri = this.tetri[this.tetriN];
        this.x = 3;
        this.y = -2;
    }
}

Piece.prototype.fill = function (color) {
    for (let r = 0; r < this.activeTetri.length; r++) {
        for (let c = 0; c < this.activeTetri.length; c++) {
            if (this.activeTetri[r][c]) {
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    }
}

Piece.prototype.draw = function () {
    this.fill(this.color);
}

Piece.prototype.unDraw = function () {
    this.fill(COLOR);
}

Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.activeTetri)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        this.lock();
        p = randomPiece();
    }
}

Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.activeTetri)) {
        this.unDraw();
        this.x++;
        this.draw();
    }
}

Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.activeTetri)) {
        this.unDraw();
        this.x--;
        this.draw();
    }
}

Piece.prototype.rotate = function () {
    let nextPattern = this.tetri[(this.tetriN + 1) % this.tetri.length];
    let kick = 0;

    if (this.collision(0, 0, nextPattern)) {
        if (this.x > COL / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }

    if (!this.collision(kick, 0, nextPattern)) {
        this.unDraw();
        this.x += kick;
        this.tetriN = (this.tetriN + 1) % this.tetri.length;
        this.activeTetri = this.tetri[this.tetriN];
        this.draw();
    }
}

Piece.prototype.collision = function (x, y, piece) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece.length; c++) {
            if (!piece[r][c]) {
                continue;
            }

            let newX = this.x + c + x;
            let newY = this.y + r + y;

            if (newX < 0 || newX >= COL || newY >= ROW) {
                return true;
            }

            if (newY < 0) {
                continue;
            }

            if (board[newY][newX] !== COLOR) {
                return true;
            }
        }
    }
    return false;
}

Piece.prototype.lock = function () {
    for (let r = 0; r < this.activeTetri.length; r++) {
        for (let c = 0; c < this.activeTetri.length; c++) {
            if (!this.activeTetri[r][c]) {
                continue;
            }

            if (this.y + r < 0) {
                alert('Game Over');
                gameOver = true;
                break;
            }

            board[this.y + r][this.x + c] = this.color;
        }
    }
}

let p = randomPiece();

function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length);
    return new Piece(PIECES[r][0], PIECES[r][1]);
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) {
        p.moveLeft();
        dropStart = Date.now();
    } else if (e.keyCode === 38) {
        p.rotate();
        dropStart = Date.now();
    } else if (e.keyCode === 39) {
        p.moveRight();
        dropStart = Date.now();
    } else if (e.keyCode === 40) {
        p.moveDown();
    }
});

let dropStart = Date.now();

let gameOver = false;

function drop() {

    let now = Date.now();
    let delta = now - dropStart;

    if (delta > 1000) {
        p.moveDown();
        dropStart = Date.now();
    }

    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}

drop();
