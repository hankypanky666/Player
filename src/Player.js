class Player {
    constructor({context, buffer, sounds}) {
        this.context = context;
        this.buffer = buffer;
        this.sounds = sounds;
    }

    init() {
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play() {
        console.log(this.source);
        if (!this.source) {
            this.buffer.loadSound(this.sounds[0])
                .then(buffer => {
                    this.init();
                    this.source.buffer = buffer;
                    this.source.start(this.context.currentTime);
                    this.source.onended = () => {
                        this.source = null;
                    }
                },
                    error => console.log(error)
                );
        } else {
            this.pauseOrResume();
        }
    }

    pauseOrResume() {
        console.log(this.context.state);
        if (this.context.state === 'running') {
            this.context.suspend();
        } else if (this.context.state === 'suspended') {
            this.context.resume();
        }
    }

}

export default Player;



