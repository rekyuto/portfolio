const video = document.querySelector('#karameru video');
const loopCounterElement = document.getElementById('loop-counter');

let loopCount = 0;

video.addEventListener('ended', () => {
  loopCount++;
  loopCounterElement.textContent = loopCount;
  video.play();
});