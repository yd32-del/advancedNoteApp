import createTask from "./components/toDo/createTaskNode.js";
import createCategory from "./components/toDo/createCategory.js";
import appendSaveData from "./components/toDo/appendSaveData.js";
import updateId from "./components/toDo/updateId.js";
import categoryFilter from "./components/toDo/categoryFilter.js"


const createTaskbtn = document.getElementById("createTaskBtn");
const taskContainer = document.querySelector(".task-container");


createTaskbtn.addEventListener("click", (e)=> {
    const newTask = createTask();
    taskContainer.append(newTask);
    updateId();
})

const createCategoryBtn = document.getElementById("createCategoryBtn");
const categoryInput = document.getElementById("categoryInput");

createCategoryBtn.addEventListener("click", (e) => {
    const input = categoryInput.value;
    createCategory(input);
    console.log(input);
})

window.onload = () => {
    appendSaveData();
    // localStorage.clear()
}

const categoryDropdown = document.getElementById("mainDropDown");
categoryDropdown.addEventListener("input", () => {
    console.log("Yess");
    categoryFilter();
})