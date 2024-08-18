function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {

    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    const mensaje = `Nombre: ${nombre}\nCarnet: ${carnet}\nNota Final: ${notaFinal.toFixed(2)}`;

    return mensaje;
}

const nombreAlumno = "Jefry Miranda";
const carnetAlumno = "2024ME000";
const examen = 85;
const tareas = 90;
const asistencia = 95;
const investigacion = 80;

console.log(calcularNotaFinal(nombreAlumno, carnetAlumno, examen, tareas, asistencia, investigacion));
