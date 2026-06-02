export default function createDropDown () {
    const dropDown = document.createElement("div");
    const select = document.createElement("select");
    dropDown.classList.add("task-dropDown");
    dropDown.classList.add("task-edit");
    dropDown.appendChild(select);
    return dropDown;
    
}