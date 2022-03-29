const setup = () => {
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel.";
    let output = "";
    for(let i =0; i<text.length; i++){
        if(text.substring(i-1,i+3)===" de "){
            output += "het ";
            i = i+2;
        }
        else{
        output += text.substring(i,i+1);
        }
    }
    console.log(output);
}
window.addEventListener("load", setup);