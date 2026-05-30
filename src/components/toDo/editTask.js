export default function editTask(event){
    //event is the parenrt elemnt that was clicked on (event.currentTarget)
    const targetBtn = event.target;
    const allBtns = targetBtn.parentNode;
    const task = allBtns.parentNode;

    // console.log(task);

    if(task.classList.contains("task-state")){
        task.classList.remove("task-state");
        targetBtn.innerText = "editing";
    } else {
        task.classList.add("task-state");
        targetBtn.innerText = "Edit";
    }
    
}

