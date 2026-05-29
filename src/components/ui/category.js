import dropDownMenu from "../utils/createDropDown.js"

//Task category requires:
//renders all the dropdown options


export default function category () {
    const taskCategory = document.createElement("div");
    const p = document.createElement("p");
    const dropDown = new dropDownMenu;

    p.innerText = "Category";

    taskCategory.classList.add("category");
    taskCategory.append(p, dropDown);
    return taskCategory;
}
// taskCategory();