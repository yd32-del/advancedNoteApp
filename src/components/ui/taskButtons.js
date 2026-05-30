import createButton from "../utils/createButton.js";
import editTask from "../toDo/editTask.js";
import saveTask from "../toDo/saveTask.js";
import deleteTask from "../toDo/deleteTask.js";

export default function taskButton () {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");
    
    //Loop over to create the task Buttons?
    const temp = ["Edit", "Save", "Delete"]
    const functTemp = [editTask, saveTask, deleteTask];
    for (let i = 0; i < temp.length; i++) {
       
        const button = createButton(temp[i], temp[i].toLowerCase(), `task-${temp[i].toLowerCase()}`);
         if(i === 0){
            button.classList.remove("task-state");
        }
        button.addEventListener("click", functTemp[i]);
        buttonContainer.appendChild(button);
    }
    return buttonContainer;
}
// taskButton();