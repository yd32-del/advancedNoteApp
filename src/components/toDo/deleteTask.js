
import editTask from "../toDo/editTask.js";
import saveTask from "../toDo/saveTask.js";
import resetProperties from "../toDo/resetProperties.js";
import updateId from "./updateId.js";

export default function deleteTask(event){
    const targetBtn = event.target;
    const allBtns = targetBtn.parentNode;
    //New to update all id's
    const task = allBtns.parentNode;

    const btnArr = allBtns.children;
    const functTemp = [editTask, saveTask, deleteTask];
    for (let i = 0; i < btnArr.length; i++) {
        // console.log(btnArr[i]);
        btnArr[i].removeEventListener("click", functTemp[i]);
    }


    const taskKeys = Object.keys(localStorage);
    const tasks = ["noteTitle", "date", "description"];
    console.log(task.id);
    const currId = task.id
    const currentTaskId = currId.match(/(\d+)/);
    // updateId();
    for (let i = 0; i < taskKeys.length; i++) {
        const numId = taskKeys[i].match(/(\d+)/);
        // console.log(numId);
        if(currentTaskId[0] == numId[0]){
            console.log("We are equal", numId);
            localStorage.removeItem(tasks[0] + "task" + numId[0]);
            localStorage.removeItem(tasks[1] + "task" + numId[0]);
            localStorage.removeItem(tasks[2] + "task" + numId[0]);
        }
    }
    
    resetProperties();


    task.remove();
    updateId()

}

