export default class Task {
    constructor(name, dueDate, category, description){
        this.name = name; 
        this.dueDate = dueDate;
        this.category = category;
        this.description = description;
    }
}

// let task = new Task("Hello", "26", "Maths", "SOMEThing")

// console.log(task.name);