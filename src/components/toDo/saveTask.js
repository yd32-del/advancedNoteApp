


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
    //Alternative get the order of the atsks as the uniqu identifier;.  
    //We can use this to update id's when everything is reappended
    let index;
    for (let i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].contains(saveBtn)) {
            index = i;
            break;
        }
    }
    for (let j = 0; j < taskKeys.length; j++){
        localStorage.setItem(taskKeys[j]+ "task" + index, nodeArr[j].value);
    }

    // localStorage.clear();
}
