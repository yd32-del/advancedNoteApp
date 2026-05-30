import createTask from "./components/toDo/createTaskNode.js"
import createCategory from "./components/toDo/createCategory.js";

const createTaskbtn = document.getElementById("createTaskBtn");
const taskContainer = document.querySelector(".task-container");

createTaskbtn.addEventListener("click", (e)=> {
    const newTask = createTask();
    console.log(newTask);
    console.log(taskContainer)
    taskContainer.append(newTask);
})

const createCategoryBtn = document.getElementById("createCategoryBtn");
const categoryInput = document.getElementById("categoryInput");

createCategoryBtn.addEventListener("click", (e) => {
    const input = categoryInput.value;
    createCategory(input);
    console.log(input);
})


//Checks if a certain option has been selected in the dropdown
// category.addEventListener("input", (e) => {
//     console.log("My form has been changed", e)
// })