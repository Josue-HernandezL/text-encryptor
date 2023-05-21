const texto = document.getElementById("textEncripted");
const encriptar = document.getElementById("encriptar");
const decriptar = document.getElementById("desencriptar");
const logo = document.getElementById("logo");
const elementos = document.querySelectorAll(".img_muñeco, .remover");
const alerta = document.getElementById("alerta");
var encriptado = "";

        logo.addEventListener("click", () => {
            window.location.href = "./index.html";
        }); 
    
        encriptar.addEventListener("click", () => {

            if (texto.value != "") {
                encriptado = (texto.value)
                .replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");
                const elementos = document.querySelectorAll(".img_muñeco, .remover");
                elementos.forEach((elemento) => {
                    elemento.style.display = "none";
                    
                });

                const textAdd = document.getElementById("text_add");
                textAdd.innerHTML = encriptado;
                textAdd.classList.add("textAdd");
                const text = document.getElementById("text");
                text.innerHTML = `<input type="button" id = "copiar" value="Copiar" class = "button_add">`;
                const copiar = document.getElementById("copiar");
                copiar.addEventListener("click", () => {
                    textAdd.textContent;
                    navigator.clipboard.writeText(textAdd.textContent);

                });

            } else {
                alerta.innerHTML = "Ingrese un texto en el campo";
                alerta.classList.add("alerta");
                setTimeout(function() {
                    alerta.style.display = "none";
                  }, 2000);
            }

            

        });

        decriptar.addEventListener("click", () => {
            if (texto.value != "") {
            let desencriptado = encriptado
                .replaceAll("ufat", "u")
                .replaceAll("ober", "o")
                .replaceAll("ai", "a")
                .replaceAll("imes", "i")
                .replaceAll("enter", "e");

                const textAdd = document.getElementById("text_add");
                textAdd.innerHTML = desencriptado;
                textAdd.classList.add("textAdd");
                const text = document.getElementById("text");
                text.innerHTML = `<input type="button" id = "copiar" value="Copiar" class = "button_add">`;
                const copiar = document.getElementById("copiar");
                copiar.addEventListener("click", () => {
                    textAdd.textContent;
                    navigator.clipboard.writeText(textAdd.textContent);
                });

            }

            else {
                alerta.innerHTML = "Ingrese un texto en el campo";
                alerta.classList.add("alerta");
                setTimeout(function() {
                    alerta.style.display = "none";
                  }, 2000);
            }

                
        });


