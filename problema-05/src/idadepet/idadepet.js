function calculaIdadePets(quantidadeDeAnos) {
    if (quantidadeDeAnos <= 0) {
        return {};        
    }
    
    switch (quantidadeDeAnos) {        
        case 1: return {
            cachorro: 15,
            gato: 15
        };
        case 2: return {
            cachorro: 24,
            gato: 24
        };
        default: return {
            cachorro: 24 + ((quantidadeDeAnos - 2) * 5),
            gato: 24 + ((quantidadeDeAnos - 2) * 4)
        };
    }
}

module.exports = { calculaIdadePets };