

export default function resetProperties () {
    const taskKeys = Object.keys(localStorage)
    const array = [];
    const tasks = ["noteTitle", "date", "description"];
    //Check for those values in the keys and change it to the corresponsing index of the array
    for (let i = 0; i < taskKeys.length; i++){
        const num = taskKeys[i].match(/(\d+)/);
        if(!array.includes(num[0])) {
            array.push(num[0]);
        }

       
    }
    array.sort();
    //After array is sorted match the found id and turn into order

    for (let i = 0; i < (taskKeys.length); i++){
        //Loop then check what the number is
        const num = taskKeys[i].match(/(\d+)/);
        for(let j = 0; j < tasks.length; j++){
            if(taskKeys[i] === tasks[j] + "task" + num[0]){
                let temp = localStorage.getItem(tasks[j] + "task" + num[0]);
                localStorage.removeItem(tasks[j] + "task" + num[0]);
                console.log(tasks[j] + "task" + num[0], "and", tasks[j] + "task" + array.indexOf(num[0]));
                localStorage.setItem(tasks[j] + "task" + array.indexOf(num[0]), temp);
                
            }
        }
    }

    
}