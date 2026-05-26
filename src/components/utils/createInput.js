export default function createInput (type, className) {
    const input = document.createElement("input");
    input.type = type;
    input.classList.add(className);
    return input;
}