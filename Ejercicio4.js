function numeroMayor(numero1, numero2){

    const numeroMayor = (numero1 > numero2) ? numero1:numero2;  
    return numeroMayor;
}

const numero1 = 10;
const numero2 = 15;

console.log(`El número mayor es: ${numeroMayor(numero1, numero2)}`);