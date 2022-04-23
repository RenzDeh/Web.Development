const setup = () => {

    const newIMG = document.createElement("img");
    newIMG.src = 'https://i.pinimg.com/originals/d0/29/6b/d0296b976b1a4255e2e4ca9d54de705b.jpg'
    const body = document.querySelector("body")
    body.appendChild(newIMG);

}
window.addEventListener("load", setup);