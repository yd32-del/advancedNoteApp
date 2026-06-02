import createInput from "../utils/createInput.js";
//Creates title and date input
export default function taskHeader () {
    const title = createInput("text", "task-title", "Task Name")
    const input = createInput("date", "task-date");
    const taskHeader = document.createElement("div");



    taskHeader.classList.add("task-header");
    taskHeader.append(title, input);

    return taskHeader;
}
