import VideoGame from './VideoGame.js';

const game: VideoGame = new VideoGame(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  game.start();
});
