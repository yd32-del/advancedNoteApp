import createButton from "../utils/createButton.js"
import createInput from "../utils/createInput.js";

export default function header () {
    const header = document.createElement("div");
    const taskButton = createButton(" New Task", "createTask", "null");
    const categoryCont = document.createElement("div");
    const categoryButton = createButton("Create New Category", "createCategory", "null");
    const input = createInput("text", null);
    header.classList.add("create")
    categoryCont.classList.add("create-category");
    
    categoryCont.append(input, categoryButton);
    header.append(taskButton, categoryCont);
    // console.log(header);
}

