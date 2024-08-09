const contadorVogais = palavra => {
    const letrasDaPalavra = palavra.split('');
    const oQueSaoVogais = ['a', 'e', 'i', 'o', 'u'];
    let totalVogais = 0;

    for (let letra of letrasDaPalavra) {
        if (oQueSaoVogais.includes(letra)) {
            totalVogais++;
        };       
    };
    return totalVogais;
};

module.exports = {
    contadorVogais
};
