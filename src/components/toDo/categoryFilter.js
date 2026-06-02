
export default function categoryDropdown() {
    //When the input has been changed
    const taskContainer = document.querySelector(".task-container");
    const task = taskContainer.children;
    
    const mainDropDown = document.getElementById("mainDropDown");

    for(let i = 0; i < task.length; i++){
        const dropDownCont = task[i].querySelector(".task-dropDown");
        const dropDown = dropDownCont.firstChild;
        if(mainDropDown.value == "default"){
            task[i].classList.remove("hide");
        } else if(mainDropDown.value == dropDown.value) {
            console.log("We are the same");
              task[i].classList.remove("hide");

        } else {
            task[i].classList.add("hide");
            console.log("Not the same");
        }
        // if(dropDown.value)
        console.log(dropDown);
    }
}