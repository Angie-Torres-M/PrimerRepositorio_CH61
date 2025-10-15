//Prueba git pull agregando calculadora mejorada sin necesidad de consola.

//ejercio calculadsora mejorado
//ceclarar una funcion que recibe tres numeros
// operacion, número 1, número 2
/*
Sugerencia de Lista de operaciones
- suma
- resta
- multiplicación
- división  
*/ 
//Segun la operación seleccionada se lleva a cabo suma, resta, multiplicación o división
//Si la operación no es válida, mostrar un mensaje de error
//Si se intenta dividir por cero, mostrar un mensaje de error
//Mostrar valor en la consola

//Funciones +if-else o switch-case

function calculadora(operacion, num1, num2) {
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            console.log(`El resultado de la suma es: ${resultado}`);
            break;
        case "resta":
            resultado = num1 - num2;
            console.log(`El resultado de la resta es: ${resultado}`);
            break;  
        case "multiplicacion":
            resultado = num1 * num2;
            console.log(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case "division":
            if (num2 === 0) {
                console.log("Error: No se puede dividir por cero");
            }   else {
                    resultado = num1 / num2;
                    console.log(`El resultado de la división es: ${resultado}`);
            }
            break;
        default:    
            console.log("Error: Operación no válida");
            break;
    }
    return resultado;
}
//Pruebas de la calculadora
calculadora("suma", 5, 3);
calculadora("resta", 10, 4);
calculadora("multiplicacion", 6, 7);
calculadora("division", 20, 4);
calculadora("division", 20, 0);
calculadora("modulo", 10, 3); // Operación no válida
calculadora("suma", -5, -3); // Prueba con números negativos
calculadora("multiplicacion", 0, 100); // Prueba con cero
calculadora("resta", 5.5, 2.2); // Prueba con números decimales
calculadora("division", 7, 2); // Prueba con resultado decimal

//Fin calculadora mejorada
