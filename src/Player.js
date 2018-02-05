const sounds = [
    'http://127.0.0.1:9000/public/op43.mp3',
];

class Player {
    constructor() {
    }

    init() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        console.log(this.context);
    }
}

export default Player;
