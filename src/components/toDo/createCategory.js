

//On click create the categ90ry --> then update all insatnces of the category
export default function createCategory (categoryName) {

    //Seclect all instances of the dropddown ie for each task. 
    const select = document.querySelectorAll("select");
    for (let i = 0; i < select.length; i++) {
        let option = document.createElement("option");
        option.innerText = categoryName;
        option.value = categoryName.toLowerCase();
        select[i].appendChild(option);
        console.log(select[i]);
    }
    console.log(select);
    
}


// createCategory("H ro");