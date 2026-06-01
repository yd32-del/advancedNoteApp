import dropDownMenu from "../utils/createDropDown.js"

//Task category requires:
//renders all the dropdown options


export default function category () {
    const taskCategory = document.createElement("div");
    const p = document.createElement("p");
    const dropDown = new dropDownMenu;

    p.innerText = "Category";
    taskCategory.append(p);
    //make it aoppemd all curremt dropdown option
    const mainSelect = document.getElementById("mainDropDown");
    const options = mainSelect.children;

   
    const newSelect = dropDown.children;
    for(let i = 0; i < options.length; i++){
        const addOption = options[i].cloneNode(true);
        newSelect[0].append(addOption);
    }
    ///////
    
    taskCategory.classList.add("category");
    taskCategory.append( dropDown);
    return taskCategory;
}
// taskCategory();