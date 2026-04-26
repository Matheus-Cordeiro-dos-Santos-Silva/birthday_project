const audio = document.querySelector('audio');
const body = document.body;

if (audio) {
  audio.addEventListener('play', () => {
    body.classList.add('play-music');
  });

  audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
  });
}