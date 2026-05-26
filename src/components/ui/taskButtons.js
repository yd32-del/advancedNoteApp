import createButton from "../utils/createButton.js";

export default function taskButton () {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");
    
    //Loop over to create the task Buttons?
    const temp = ["Edit", "Save", "Delete"]
    for (let i = 0; i < temp.length; i++) {
        const button = createButton(temp[i], temp[i].toLowerCase(), null);
        buttonContainer.appendChild(button);
    }
    return buttonContainer;
}
// taskButton();