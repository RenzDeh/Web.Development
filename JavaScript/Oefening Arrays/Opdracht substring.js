const setup = () => {
    let btnSubstring = document.getElementById("knop");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let woord = document.getElementById("woord");
    let get1 = document.getElementById("get1").value;
    let get2 = document.getElementById("get2").value;
    let tekst = woord.value;

    document.getElementById("txtOutput").innerHTML = tekst.substring(get1,get2);
}

window.addEventListener('load',setup);