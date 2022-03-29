const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", trigram);
}

const trigram = () => {
    let input = document.getElementById("txt")
    let text = input.value;

    for (let i=0;i<text.length;i++)
        if(i + 3 <=text.length) { //i+3 -> dat hij niet minder dan 3 letters weergeeft
            console.log(text.substring(i, i+3))
        }
}


window.addEventListener("load", setup);