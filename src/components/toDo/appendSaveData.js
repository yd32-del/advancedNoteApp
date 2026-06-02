//Functio ran on window load;
import createTask from "./createTaskNode.js"
import resetProperties from "./resetProperties.js";

export default function appendSaveData() {
    const taskKeys = ["noteTitle", "date", "description"];
    //Loop through the localstorage untill null is hit; Null means does not exist

    const appendData = true;

    //NUm tasks must take into account empty tasks when refereshed even when save is not pressed
    const numTasks = Object.keys(localStorage).length / 3;
    const lastCharacter = localStorage;
    //number of tasks should be equal to last id number at least once loop
    const numKeys = Object.keys(localStorage);
    console.log(numKeys)
    let largestNum;
    for (let i = 0; i < numKeys.length; i++) {
        const num = numKeys[i].match(/(\d+)/);
        console.log(numKeys[i])
        if (i === 0) {
            largestNum = num[0];
        } else if (num[0] > largestNum){
            largestNum = num[0];
        }
    }
    //Minus one as the id is zero indexed. 
    if(largestNum > numTasks - 1) {
        resetProperties()
        // console.log("Largess, ", largestNum, numTasks);
    } else {
        console.log("Nope");
    }


    const taskContainer = document.querySelector(".task-container");
    for (let i = 0; i < numTasks; i++) {
        const newTask = createTask();
        const title = newTask.querySelector(".task-title");
        const date = newTask.querySelector(".task-date");
        const description = newTask.querySelector(".description");
        if(localStorage.getItem(taskKeys[0] + "task" + i)){
            title.value = localStorage.getItem(taskKeys[0] + "task" + i);
            date.value = localStorage.getItem(taskKeys[1] + "task" + i);
            description.value = localStorage.getItem(taskKeys[2] + "task" + i);
            taskContainer.append(newTask);
        } else {
            title.value = "";
            date.value = ""
            description.value = "";
            taskContainer.append(newTask);
        }
    }
    // console.log(taskContainer);
    // localStorage.clear();
}

