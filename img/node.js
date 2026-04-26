const audio = document.querySelector('audio');
const body = document.body;

if (audio) {
  audio.addEventListener('play', () => {
    body.classList.add('play-music');
  });

  audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
  });
  
  document.addEventListener('click', function initAudio() {
    audio.play().catch(e => console.log('Autoplay bloqueado'));
    document.removeEventListener('click', initAudio);
  }, { once: true });
}