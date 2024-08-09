function elevarDigitosAoQuadrado(digitosParaElevarAoQuadrado) {
    
    if (digitosParaElevarAoQuadrado < 0) {  
        return 0;
    };

    const stringDigitosParaElevarAoQuadrado = digitosParaElevarAoQuadrado.toString();
    const quantidadeDeDigitos = stringDigitosParaElevarAoQuadrado.length;
    const numerosElevados = []

    for ( let iterador=0 ; iterador < quantidadeDeDigitos ; iterador++){
        const digitoAtual = stringDigitosParaElevarAoQuadrado[iterador];
        const elevadoAoQuadrado = parseInt(digitoAtual) * parseInt(digitoAtual);
        numerosElevados.push(elevadoAoQuadrado);
    };

    return parseInt(numerosElevados.join(''));
};

module.exports = {
    elevarDigitosAoQuadrado
};