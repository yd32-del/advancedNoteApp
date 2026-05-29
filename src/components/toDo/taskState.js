export default function editTask(targetTask){
    //targettask is the parenrt elemnt that was clicked on (event.currentTarget)
    if(targetTask.classList.contains("task-state")){
        targetTask.classList.remove("task-state");
    } else {
        targetTask.classList.add("task-state");
    }
    
}

