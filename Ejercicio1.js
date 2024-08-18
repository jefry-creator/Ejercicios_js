function verificarEdad(edad) {
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
    return mensaje;
}

const edadUsuario = 17;
console.log(verificarEdad(edadUsuario));