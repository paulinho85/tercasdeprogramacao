/* function verificaNarcisista(numero) {
    if (numero < 0) {
        return 'não narcisista';        
    }

    const numeroComoString = numero.toString();
    const quantidadeDeDigitos = numeroComoString.length;

    if (quantidadeDeDigitos == 1) {
        return 'narcisista';
    }

    let acumulador = 0;
    for (let itemDoVetor of numeroComoString.split('')) {        
        acumulador += Math.pow(itemDoVetor, quantidadeDeDigitos);        
    }

    if (acumulador == numero) {
        return 'narcisista';      
    }

    return 'não narcisista';        
        
}
 */

//versão refatorado da função acima
const verificaNarcisista = numero => {
    return (numero.toString().split('').reduce((acc, it, ind, vt) => Math.pow(it, vt.length) + acc, 0) == numero) ? 'narcisista' : 'não narcisista'
}

module.exports = {
    verificaNarcisista
}