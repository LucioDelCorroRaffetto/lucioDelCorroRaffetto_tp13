console.log('---------------------------  ');

// Creo la función sin parametros
function createMultiplicationTable(){

    // Generar tablas de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++){
    console.log(`Tabla de multiplicar x${i}`);
    
    // Separador entre tablas
    console.log('---------------------------  ');

      // Imprimir cada multiplicación dentro de la tabla
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
      // Separador entre tablas
      console.log('---------------------------');
    }
}

// Llamar a la función para mostrar las tablas
createMultiplicationTable();