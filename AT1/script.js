document.addEventListener("DOMContentLoaded", function() {

    const paragrafoMensagem = document.getElementById("mensagem");
    const inputComida = document.getElementById("comidaInput");

    inputComida.addEventListener("change", function() {
        
        const comidaDigitada = inputComida.value.toLowerCase();

        if (comidaDigitada === "pão com ovo") {
            paragrafoMensagem.textContent = "café da manhã";
        } else if (comidaDigitada === "feijao com arroz") {
            paragrafoMensagem.textContent = "almoço";
        } else {
            paragrafoMensagem.textContent = "jantar";
        }
    });

});