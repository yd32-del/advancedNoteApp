

export default function updateId () {

    const taskContainer = document.querySelector(".task-container");
    const tasks = taskContainer.children;

    console.log("Where where", tasks.length, tasks)
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i], "is here")
        tasks[i].id = "task" + i;
    }
}