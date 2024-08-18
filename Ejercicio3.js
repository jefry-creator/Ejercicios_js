function calcularAumento(nombre, salario, categoria) {
    let aumento;

    switch (categoria) {
        case 'A':
            aumento = 0.15;
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
            return 'Categoría inválida';
    }

    const aumentoSalarial = salario * aumento;
    const nuevoSalario = salario + aumentoSalarial;

    const mensaje = `Nombre: ${nombre}\nSalario Actual: $${salario.toFixed(2)}\nCategoría: ${categoria}\nAumento Salarial: $${aumentoSalarial.toFixed(2)}\nSalario con aumento: $${nuevoSalario.toFixed(2)}`;
    return mensaje;
}

const nombreEmpleado = "Jefry Miranda";
const salarioEmpleado = 2500;
const categoriaEmpleado = "B";

console.log(calcularAumento(nombreEmpleado, salarioEmpleado, categoriaEmpleado));
