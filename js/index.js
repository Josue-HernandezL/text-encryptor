const texto = document.getElementById("textEncripted");
const encriptar = document.getElementById("encriptar");
const decriptar = document.getElementById("desencriptar");
const logo = document.getElementById("logo");
let encriptado = "";

        logo.addEventListener("click", () => {
            window.location.href = "./index.html";
        });
    
        encriptar.addEventListener("click", () => {
            encriptado = (texto.value)
                .replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");
                console.log(encriptado);

        });

        decriptar.addEventListener("click", () => {
            let desencriptado = encriptado
                .replaceAll("ufat", "u")
                .replaceAll("ober", "o")
                .replaceAll("ai", "a")
                .replaceAll("imes", "i")
                .replaceAll("enter", "e");
                console.log(desencriptado)
        })


