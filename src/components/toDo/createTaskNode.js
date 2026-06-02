import taskCategory from "../ui/category.js";
import taskButtons from "../ui/taskButtons.js"
import taskHeader from "../ui/taskHeader.js";
import taskTextarea from "../ui/taskTextArea.js";


//Call this function when button is clicked. We do not need to inlcude the button click as that is for app state
//Function can be replaced by class

export var taskCount = 0;

export default function createTaskNode () {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    taskContainer.classList.add("task-state");
    //Add and id for the task

    taskContainer.id = "task" + taskCount;
    taskCount++;
   
    ///
    const header = taskHeader();
    const textarea = taskTextarea();
    const buttons = taskButtons();
    const category = taskCategory();
    
    taskContainer.append(header, textarea, buttons, category);

    // console.log(localStorage.getItem("noteTitletask0"))
    return taskContainer;
}



