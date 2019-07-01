function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;  //stops function from running
  audio.currentTime = 0; //move to start with multiple keypress
  audio.play(e);
  key.classList.add('playing');
};
function removeTransition(e) {
  if(e.propertyName !=='transform') return; //skips if not a transform
  this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));

window.addEventListener('keydown', playSound);