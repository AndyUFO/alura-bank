import esUnCuil from "./validar-cuil.js";

const campoDeFormulario = document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  if (campo.name == "cuil" && campo.value.length >= 11) {
    console.log("es un cuil");
    esUnCuil(campo);
  }else{
    console.log("no es cuil "+campo.name +" len "+campo.value.length);
  }
}



