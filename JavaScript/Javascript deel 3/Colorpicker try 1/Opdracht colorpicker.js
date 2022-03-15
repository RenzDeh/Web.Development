const setup = () => {
    let sliders = document.getElementsByClassName("slider")
    sliders[0].addEventListener("input", colorChange)
    sliders[1].addEventListener("input", colorChange)
    sliders[2].addEventListener("input", colorChange)
}
const colorChange = () => {
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    let valuered = document.getElementById("valuered");
    let valuegreen = document.getElementById("valuegreen");
    let valueblue = document.getElementById("valueblue");
    let vierkant = document.getElementsByClassName("vierkant");

    let valueR= red.value;
    let valueG= green.value;
    let valueB = blue.value;

    valuered.innerHTML = valueR;
    valuegreen.innerHTML = valueG;
    valueblue.innerHTML = valueB;

    let color = 'rgb('+valueR+', ' + valueG + ', '+valueB+')';
    console.log(color);
    vierkant[0].style.background = color;
}

window.addEventListener("load", setup);
window.addEventListener("load", colorChange);