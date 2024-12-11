function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            if (numero2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operación no válida";
    }
    document.getElementById('resultado').textContent = resultado;
}