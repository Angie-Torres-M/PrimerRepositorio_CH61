//Calculadora mejorada if-else o switch-case
//Recibir operacion, a, b con un prompt
//Mostrar el resultado en consola
//Crear funciones para cada operación   
//Calculadora mejorada

// Calculadora básica con elección de operación
let num1 = prompt("Por favor, ingresa un número entero:");
let num2 = prompt("Por favor, ingresa otro número entero:");
let operacion = prompt("Elige una operación: suma, resta, multiplicacion o division");

let a = parseInt(num1);
let b = parseInt(num2);

function calculadora(operacion, a, b) {
    let resultado;

    switch (operacion.toLowerCase()) { // Convierte a minúsculas por si el usuario escribe 'Suma'
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

// Ejecutar la calculadora con los datos ingresados
calculadora(operacion, a, b);



//Modificación para probar git pull
