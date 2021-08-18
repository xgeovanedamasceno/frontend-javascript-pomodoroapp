import { seconds } from "./objects/seconds.js";
import { idInterval } from "./objects/id-interval.js";
import stopTimer from './stoptimer.js'

export default function startTimer(timeMin) {

  const timeMinutes = document.querySelector("#timeMinutes");
  const timeSeconds = document.querySelector("#timeSeconds");

  if(seconds.time == 3) { 
    timeMin--;
    seconds.time--;
  }

  idInterval.id = setInterval(() => {
    timeMinutes.innerHTML = timeMin;
    timeSeconds.innerHTML = seconds.time--; 
    if(seconds.time < 0) {
      seconds.time = 2; 
      timeMinutes.innerHTML = timeMin--;
      if(timeMin < 0)
        stopTimer();
    }
  }, 1000);
}