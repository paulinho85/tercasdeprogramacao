function retornaListaSemString(lista) {
    const listaDeNumeros = []

    for (let item = 0; item < lista.length; item++){
        if (typeof lista[item] == 'number') {
            listaDeNumeros.push(lista[item])
        }
    }

    return listaDeNumeros
    
}

module.exports = {
    retornaListaSemString
}