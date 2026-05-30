//class to see and cobtrol what events have been triggered??

//Push tasks into an array within the class
//then detect clicks and stuff to maniplate

///Put all event listener functions in here

let editBtn;
let saveBtn;
let deleteBtn;


export default function btnContainer(container) {
    editBtn = container[0];
    saveBtn = container[1];
    deleteBtn = container[2];
    return;
}

