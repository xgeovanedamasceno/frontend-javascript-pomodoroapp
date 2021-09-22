import { tasks } from "./objects/tasks.js";

export default function addTask() {
  const input = document.querySelector("#tasks input");
  const list = document.querySelector('#tasks-list');
  const itemList = document.createElement('li');
  const contItem = document.createElement('span');
  const button = document.createElement('button');

 

  button.setAttribute("id", "delete-task");
  button.innerText = "delete";
  console.log(button);
  

  

  tasks.forEach(item => {
    // itemList.innerHTML = `${item} <button id="delete">Delete</button>`;
    contItem.innerText = item;
    itemList.append(contItem);
    itemList.append(button);
    list.appendChild(itemList);
  });


}