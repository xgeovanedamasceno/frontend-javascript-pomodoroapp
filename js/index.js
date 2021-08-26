import saveSettings from "./modules/save-pomodoro-settings.js";
import checkCycle from "./modules/check-cycle.js";
import startPomodoro from "./modules/start-pomodoro.js";
import pausePomodoro from "./modules/pause-pomodoro.js"
import readInputs from "./modules/readinputs.js";
import saveInputs from "./modules/saveinputs.js";
import createModalInputSettings from "./modules/create-modal-input-settings.js";

const timerForm = document.querySelector('#pomodoro-settings');
const saveButton = document.querySelector('#save-button');

const startButton = document.querySelector('#startTimer');
const pauseButton = document.querySelector('#pauseTimer');


saveSettings();
checkCycle();

createModalInputSettings();

startButton.addEventListener('click', startPomodoro);
pauseButton.addEventListener('click', pausePomodoro);
timerForm.addEventListener('change', readInputs);
saveButton.addEventListener('click', saveInputs);
