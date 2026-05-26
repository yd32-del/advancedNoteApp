import createInput from "../utils/createInput.js";
//Creates title and date input
export default function taskHeader (name) {
    const title = document.createElement("h2");
    const input = createInput("date", null);
    const taskHeader = document.createElement("div");

    title.innerText = name;

    taskHeader.classList.add("task-header");
    taskHeader.append(title, input);

    return taskHeader;
}
// taskHeader("My task 1");