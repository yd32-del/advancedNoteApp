import taskCategory from "../ui/category.js";
import taskButtons from "../ui/taskButtons.js"
import taskHeader from "../ui/taskHeader.js";
import taskTextarea from "../ui/taskTextArea.js";


//This will handle the functionality
// button on click; -> update dom. => append the  task. 


//Call this function when button is clicked. We do not need to inlcude the button click as that is for app state
//Function can be replaced by class
export default function createTaskNode () {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const header = taskHeader();
    const textarea = taskTextarea();
    const buttons = taskButtons();
    const category = taskCategory();
  
    taskContainer.append(header, textarea, buttons, category);

    console.log(taskContainer);
}

createTaskNode();