export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = this.gameWidth;
        this.gameHeight = this.gameHeight;
        this.states = [],
        this.currentState = this.states[0];
        this.image = document.getElementById('image');
        this.width = 200;
        this.height = 181.83;
        this.x = -1020;
        this.y = 5;
    }

    draw(ctx) {
        ctx.drawImage(this.image,0, 0, this.width, this.height, this.x, this.y);
    }
}