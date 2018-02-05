import Buffer from './Buffer';

const sounds = [
    'http://127.0.0.1:9000/public/op43.mp3',
];

class Player {
    constructor() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.buffer = new Buffer(this.context, sounds);
        this.buffer.loadAll();
    }

    init() {
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer.getSoundByIndex(0);
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play() {
        setTimeout(() => {
            this.init();
            console.log('start', this.source);
            this.source.start(this.context.currentTime);
        }, 2000);
    }

    stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        this.source.stop(this.context.currentTime + 0.5);
    }
}

export default Player;



