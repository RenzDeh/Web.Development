const setup = () => {
    let button = document.getElementById("button");

    button.addEventListener("click", update);

    }

    let update = () => {
        let input = document.getElementById("input")
        let text = input.value
        let tekstNaarSpatie = naarSpatie(text)
        console.log(tekstNaarSpatie);
    }


    const naarSpatie = (txtInput) => {
        let metSpatie = "";
        for (i = 0; i < txtInput.length; i++) {
            metSpatie += txtInput.charAt(i)
            metSpatie+= " ";
        }
        return metSpatie;
    }
window.addEventListener("load", setup);