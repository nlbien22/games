export default class Player {
    constructor(gameWidth, gameHeight, width, height) {
        this.gameWidth = this.gameWidth;
        this.gameHeight = this.gameHeight;
        this.states = [],
        this.currentState = this.states[0];
        this.image = document.getElementById('image');
        this.width = 200;
        this.height = 151.83;
        this.x = 0;
        this.y = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, 1000, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}