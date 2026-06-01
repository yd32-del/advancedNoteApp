
export default function saveTask(event) {
    const taskContainer = document.querySelector(".task-container");
    const taskKeys = ["noteTitle", "date", "description"];
    const tasksArr = taskContainer.children;

    //Get the current task events
    const saveBtn = event.target;
    const tasks = saveBtn.parentNode.parentNode;

    //////
    const header = tasks.querySelector(".task-header");
    const title = header.children[0];
    const date = header.children[1];
    const description = tasks.querySelector(".description");
    ///
    const nodeArr = [title, date, description];

    //Will Save data to localstorage
    const length = tasksArr.length - 1;
    for (let j = 0; j < taskKeys.length; j++){
        localStorage.setItem(taskKeys[j]+ length, nodeArr[j].value);
    }
}


//after save task we must load tasks data onload
//Get all taska in a html colllection and each index is the uique identifesr

//keys
// noteTitleNUM = "" 
// dateNUM = ""
// descriptionNUM = """
// 