
import editTask from "../toDo/editTask.js";
import saveTask from "../toDo/saveTask.js";

export default function deleteTask(event){
    const targetBtn = event.target;
    const allBtns = targetBtn.parentNode;

    const task = allBtns.parentNode;

    const btnArr = allBtns.children;
    const functTemp = [editTask, saveTask, deleteTask];
    for (let i = 0; i < btnArr.length; i++) {
        console.log(btnArr[i]);
        btnArr[i].removeEventListener("click", functTemp[i]);
    }
    task.remove();

}