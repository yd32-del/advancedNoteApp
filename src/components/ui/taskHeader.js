import createInput from "../utils/createInput.js";
//Creates title and date input
export default function taskHeader (name) {
    const title = createInput("text", null, "Task Name")
    const input = createInput("date", null);
    const taskHeader = document.createElement("div");

    title.innerText = name;

    taskHeader.classList.add("task-header");
    taskHeader.append(title, input);

    return taskHeader;
}
