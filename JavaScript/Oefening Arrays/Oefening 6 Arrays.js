const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    let btnVerander = document.getElementById("btnVerander")
    btnKopieer.addEventListener("click", kopieer);

}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
    /*tekst aanpassen*/
        let pElement = document.getElementById("txtOutput");
        let output = tekst;
        pElement.innerHTML = output;
}

window.addEventListener("load", setup);