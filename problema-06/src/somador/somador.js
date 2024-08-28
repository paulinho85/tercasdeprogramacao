function somarNumeros(numeros) {
    let resultadoDaSoma = 0
    
    for (let numero of numeros) {
        if(!isNaN(numero)) {
           resultadoDaSoma += Number(numero);
        };
    };

    return resultadoDaSoma;
};

module.exports = { somarNumeros };
