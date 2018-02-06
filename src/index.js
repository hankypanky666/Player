import Player from './Player';
import Buffer from './Buffer';

const sounds = [
    'http://127.0.0.1:9000/public/op43.mp3',
];

const context = new (window.AudioContext || window.webkitAudioContext)();
const buffer = new Buffer(context);
const options = {
    buffer: buffer,
    context: context,
    sounds: sounds,
};

const player = new Player(options);
const play = document.getElementById('play');
let pause = document.getElementById('pause');
play.addEventListener('click', ( ) => {
   player.play();
});
pause.addEventListener('click', ( ) => {
    player.pauseOrResume();
});
