import { tasks } from "./objects/tasks.js";
export default function readTask(event) {
  const task = event.target.value;
  
  tasks.push(task);
  

  
}