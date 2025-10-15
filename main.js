//Calculadora mejorada if-else o switch-case
//Recibir operacion, a, b con un prompt
//Mostrar el resultado en consola
//Crear funciones para cada operación   
//Calculadora mejorada

// Calculadora básica con elección de operación

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Por favor, ingresa un número entero: ", (num1) => {
  readline.question("Por favor, ingresa otro número entero: ", (num2) => {
    readline.question("Elige una operación: suma, resta, multiplicacion o division: ", (operacion) => {

      let a = parseInt(num1);
      let b = parseInt(num2);

      calculadora(operacion, a, b);

      readline.close();
    });
  });
});

// -------------------------------
// Función principal
// -------------------------------
function calculadora(operacion, a, b) {
  let resultado;

  switch (operacion.toLowerCase()) {
    case "suma":
      resultado = a + b;
      console.log(`El resultado de la suma es: ${resultado}`);
      break;
    case "resta":
      resultado = a - b;
      console.log(`El resultado de la resta es: ${resultado}`);
      break;
    case "multiplicacion":
      resultado = a * b;
      console.log(`El resultado de la multiplicación es: ${resultado}`);
      break;
    case "division":
      if (b === 0) {
        console.log("Error: No se puede dividir por cero");
      } else {
        resultado = a / b;
        console.log(`El resultado de la división es: ${resultado}`);
      }
      break;
    default:
      console.log("Error: Operación no válida. Escribe suma, resta, multiplicacion o division.");
      break;
  }

  return resultado;
}
// -------------------------------
// Fin calculadora mejorada
// -------------------------------
