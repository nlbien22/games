export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = this.gameWidth;
        this.gameHeight = this.gameHeight;
        this.states = [],
        this.currentState = this.states[0];
        this.image = document.getElementById('onepiece');
        this.width = 200;
        this.height = 181.83;
        this.x = 0;
        this.y = 200;
    }
}