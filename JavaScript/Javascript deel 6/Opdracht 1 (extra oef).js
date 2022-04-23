const setup = () => {
    const parent = document.querySelector("body")
    const child = document.querySelector("p");
    parent.removeChild(child);

    const newTxt = document.createElement("p");
    const node = document.createTextNode("Good job!")
    newTxt.appendChild(node);

    const element = document.querySelector("body");
    element.appendChild(newTxt)

}
window.addEventListener("load", setup);