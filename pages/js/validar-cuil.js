export default function esUnCuil(campo) {
  const cuil = campo.value.replace(/[-\/]/g, "");

  if (tieneNumerosRepetidos(cuil)) {
    console.log("El CUIL no puede tener todos los números iguales");
    campo.setCustomValidity("El CUIL no puede tener todos los números iguales");
  }else{
    if(validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)){
      console.log("El CUIL es válido");
    }else{
      console.log("El CUIL no es válido");
      campo.setCustomValidity("El CUIL no es válido");
    }
  }
  //    
}

function tieneNumerosRepetidos(cuil) {
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numerosRepetidos.includes(cuil);
}

function validarPrimerosDigitos(cuil) {
  let primerosDigitos = cuil.substr(0, 2);
  let digitosValidos = ["20", "23", "24", "27", "30", "33", "34"];
  return digitosValidos.includes(primerosDigitos);
}

function validarDigitoVerificador(cuil) {
  let acumulado = 0;
  let factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 10; i++) {
    acumulado += parseInt(cuil.charAt(i), 10) * factores[i];
  }

  let validadorTeorico = 11 - (acumulado % 11);

  if (validadorTeorico === 11) {
    validadorTeorico = 0;
  } else if (validadorTeorico === 10) {
    validadorTeorico = 9;
  }

  const digitoVerificador = parseInt(cuil.charAt(10), 10);

  return digitoVerificador === validadorTeorico;
}
