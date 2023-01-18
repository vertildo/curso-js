console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operando A'];
    let operandoB = forma['operando B'];
    let resultado = parseInt (operandoA.value)+ parseInt (operandoB.value);
    if(NaN(resultado))
    resultado = 'la operación no incluye números'
    document.getElementById('resultado').innerHTML ='Resultado: ${resultado}';
}