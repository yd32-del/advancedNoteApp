import taskCategory from "../ui/category.js";
import taskButtons from "../ui/taskButtons.js"
import taskHeader from "../ui/taskHeader.js";
import taskTextarea from "../ui/taskTextArea.js";


export default class Task {
    constructor(name, dueDate, category, description){
        this.name = name; 
        this.dueDate = dueDate;
        this.category = category;
        this.description = description;
       
        // this.returnContainer(taskContainer);
    }
    returnTask(container){
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");
        const header = taskHeader();
        const textarea = taskTextarea();
        const buttons = taskButtons();
        const taskCategorys = taskCategory();
          
        taskContainer.append(header, textarea, buttons, taskCategorys);
        return taskContainer;
    }
}

const task = new Task();
console.log(task.returnTask());


// let task = new Task("Hello", "26", "Maths", "SOMEThing")

// console.log(task.name);