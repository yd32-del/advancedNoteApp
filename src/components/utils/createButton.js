export default function createButton (name, id, className) {
    const button = document.createElement("button");
    button.innerText = name;
    button.classList.add(className);
    button.id = id;
    return button;
}  

//We can use this for edit/save button and create new task