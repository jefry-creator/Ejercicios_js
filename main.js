// Ejercicio 1
function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById('resultadoEdad').innerText = mensaje;
}

// Ejercicio 2
function calcularNotaFinal() {
    const nombre = document.getElementById('nombreAlumno').value;
    const carnet = document.getElementById('carnetAlumno').value;
    const examen = parseFloat(document.getElementById('examen').value);
    const tareas = parseFloat(document.getElementById('tareas').value);
    const asistencia = parseFloat(document.getElementById('asistencia').value);
    const investigacion = parseFloat(document.getElementById('investigacion').value);
    
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    const mensaje = `Nombre: ${nombre}<br>Carnet: ${carnet}<br>Nota Final: ${notaFinal.toFixed(2)}`;
    document.getElementById('resultadoNotaFinal').innerHTML = mensaje;
}

// Ejercicio 3
function calcularAumento() {
    const nombre = document.getElementById('nombreEmpleado').value;
    const salario = parseFloat(document.getElementById('salarioEmpleado').value);
    const categoria = document.getElementById('categoriaEmpleado').value;
    
    let aumento;
    switch (categoria) {
        case 'A':
            aumento = 0.05;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            aumento = 0;
            break;
    }

    const aumentoSalarial = salario * aumento;
    const nuevoSalario = salario + aumentoSalarial;
    const mensaje = `Nombre: ${nombre}<br>Salario Actual: $${salario.toFixed(2)}<br>Categoría: ${categoria}<br>Aumento Salarial: $${aumentoSalarial.toFixed(2)}<br>Nuevo Salario: $${nuevoSalario.toFixed(2)}`;
    document.getElementById('resultadoAumento').innerHTML = mensaje;
}

// Ejercicio 4
function encontrarMayor() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const mayor = (numero1 > numero2) ? numero1 : numero2;
    document.getElementById('resultadoMayor').innerText = `El número mayor es: ${mayor}`;
}

// Ejercicio 5
function calcularDescuento() {
    const modelo = document.getElementById('modelo').value;
    const precio = parseFloat(document.getElementById('precio').value);
    let descuento;
    
    switch (modelo) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.10;
            break;
        case 'FORD ESCAPE':
            descuento = 0.20;
            break;
        default:
            descuento = 0;
            break;
    }

    const montoDescuento = precio * descuento;
    const precioFinal = precio - montoDescuento;
    const mensaje = `Precio del Coche: $${precio.toFixed(2)}<br>Descuento: $${montoDescuento.toFixed(2)}<br>Precio Final: $${precioFinal.toFixed(2)}`;
    document.getElementById('resultadoDescuento').innerHTML = mensaje;
}

// Ejercicio 6
function calcularDescuentoViaje() {
    const origen = document.getElementById('origen').value.trim().toLowerCase();
    const destino = document.getElementById('destino').value.trim().toLowerCase();
    const costo = parseFloat(document.getElementById('costo').value);
    
    let descuento;
    if (origen === 'palma') {
        switch (destino) {
            case 'la costa del sol':
                descuento = 0.05;
                break;
            case 'panchimalco':
                descuento = 0.10;
                break;
            case 'puerto el triunfo':
                descuento = 0.15;
                break;
            default:
                descuento = 0;
                break;
        }
    } else {
        descuento = 0;
    }

    const montoDescuento = costo * descuento;
    const costoFinal = costo - montoDescuento;
    const mensaje = `Costo del Viaje: $${costo.toFixed(2)}<br>Descuento: $${montoDescuento.toFixed(2)}<br>Costo Final: $${costoFinal.toFixed(2)}`;
    document.getElementById('resultadoDescuentoViaje').innerHTML = mensaje;
}

//Ejercicio 7
function calcularEstadisticas() {
    const input = document.getElementById('valores').value;
    let valores = input.split(',').map(num => parseInt(num.trim(), 10));
    
    // Tomar solo los primeros 10 valores
    if (valores.length > 10) {
        valores = valores.slice(0, 10);
    }

    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplos15 = 0;
    let valorAcumuladoPares = 0;

    valores.forEach(valor => {
        if (valor < 0) {
            cantidadNegativos++;
        } else if (valor > 0) {
            cantidadPositivos++;
        }
        if (valor % 15 === 0) {
            cantidadMultiplos15++;
        }
        if (valor % 2 === 0) {
            valorAcumuladoPares += valor;
        }
    });

    const mensaje = `
        Cantidad de valores negativos: ${cantidadNegativos}<br>
        Cantidad de valores positivos: ${cantidadPositivos}<br>
        Cantidad de múltiplos de 15: ${cantidadMultiplos15}<br>
        Valor acumulado de números pares: ${valorAcumuladoPares}
    `;
    document.getElementById('resultadoEstadisticas').innerHTML = mensaje;
}

//Ejercicio 8
function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value, 10);
    let resultadoHTML = '';

    if (isNaN(numero)) {
        resultadoHTML = 'Por favor, ingrese un número válido.';
    } else {
        for (let i = 1; i <= 10; i++) {
            resultadoHTML += `${numero} x ${i} = ${numero * i}<br>`;
        }
    }

    document.getElementById('resultadoTabla').innerHTML = resultadoHTML;
}

//Ejercicio 9
function convertirTemperatura() {
    const tempCelsius = parseFloat(document.getElementById('tempCelsius').value);
    const tempFahrenheit = (tempCelsius * 9/5) + 32;
    
    let mensaje;
    if (tempFahrenheit >= 14 && tempFahrenheit < 32) {
        mensaje = 'Temperatura baja';
    } else if (tempFahrenheit >= 32 && tempFahrenheit < 68) {
        mensaje = 'Temperatura adecuada';
    } else if (tempFahrenheit >= 68 && tempFahrenheit < 96) {
        mensaje = 'Temperatura alta';
    } else {
        mensaje = 'Temperatura desconocida';
    }

    document.getElementById('resultadoTemperatura').innerHTML = `
        Temperatura en Fahrenheit: ${tempFahrenheit.toFixed(2   )}<br>
        ${mensaje}
    `;
}

//Ejercicio 10
function calcularPromedios() {
    const cantidadM = 5;
    const cantidadT = 6;
    const cantidadN = 11;

    let sumM = 0, sumT = 0, sumN = 0;
    let edadesM = [], edadesT = [], edadesN = [];

    for (let i = 1; i <= cantidadM; i++) {
        const edad = parseInt(document.getElementById(`edadM${i}`).value, 10);
        edadesM.push(edad);
        sumM += edad;
    }

    for (let i = 1; i <= cantidadT; i++) {
        const edad = parseInt(document.getElementById(`edadT${i}`).value, 10);
        edadesT.push(edad);
        sumT += edad;
    }

    for (let i = 1; i <= cantidadN; i++) {
        const edad = parseInt(document.getElementById(`edadN${i}`).value, 10);
        edadesN.push(edad);
        sumN += edad;
    }

    const promedioM = sumM / cantidadM;
    const promedioT = sumT / cantidadT;
    const promedioN = sumN / cantidadN;

    let mayorPromedio;
    if (promedioM > promedioT && promedioM > promedioN) {
        mayorPromedio = 'Turno Mañana';
    } 
    else if (promedioT > promedioM && promedioT > promedioN) {
        mayorPromedio = 'Turno Tarde';
    } 
    else if (promedioN > promedioM && promedioN > promedioT) {
        mayorPromedio = 'Turno Noche';
    } 
    else {
        mayorPromedio = 'Hay empates entre turnos.';
    }

    const mensaje = `
        Promedio de edades en el Turno Mañana: ${promedioM.toFixed(2)}<br>
        Promedio de edades en el Turno Tarde: ${promedioT.toFixed(2)}<br>
        Promedio de edades en el Turno Noche: ${promedioN.toFixed(2)}<br>
        Turno con el mayor promedio: ${mayorPromedio}
    `;
    document.getElementById('resultadoPromedios').innerHTML = mensaje;
}
