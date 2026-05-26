export default function taskTextArea () {
    const textArea = document.createElement("textarea");
    textArea.classList.add("description");
    textArea.placeholder = "Type your notes"
    // console.log(textArea);
    return textArea;
}
// taskTextArea();