const setup = () => {
    let wijzig=document.getElementById("wijzig");
    wijzig.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let txtOutput=document.getElementById("txtOutput");
    let resultaat = "Welkom!";
    txtOutput.innerHTML=resultaat;
}

window.addEventListener("load", setup);



