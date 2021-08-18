export default function setView(phase) {

  const timeSeconds = document.querySelector('#timeSeconds');
  const timeMinutes = document.querySelector('#timeMinutes');

  if(phase === undefined) {
    timeMinutes.innerHTML = localStorage.getItem('pomodoro');
    timeSeconds.innerHTML = 0;
  } else {
    timeMinutes.innerHTML = localStorage.getItem(phase);
    timeSeconds.innerHTML = 0;
  }
}
