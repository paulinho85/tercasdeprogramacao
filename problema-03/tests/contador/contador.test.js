const { contadorVogais } = require('../../src/contador/contador');
const assert = require('node:assert')

describe('Contador', () => {
    describe('#contadorVogais', () => {
        it('Valida o número total de vogais em uma única palavra, sem espaços', () => {
            const palavra = 'terças';
            const quantidadeVogais = contadorVogais(palavra);
            assert.strictEqual(quantidadeVogais, 2);            
        });

        it('Valida o número total de vogais em múltiplas palavras, com espaços', () => {
            const palavra = 'uva bonita e elegante';
            const quantidadeVogais = contadorVogais(palavra);
            assert.strictEqual(quantidadeVogais, 10);  
        });

        it('Valida o número total de vogais em uma única palavra, sem espaços e sem vogais', () => {
             const palavra = 'qhftwklmpfrz';
             const quantidadeVogais = contadorVogais(palavra);
             assert.strictEqual(quantidadeVogais, 0);
        });

        it('Valida o número total de vogais em múltiplas palavras, com espaços e sem vogais', () => {
            const palavra = 'qhftwk lmpfrz';
            const quantidadeVogais = contadorVogais(palavra);
            assert.strictEqual(quantidadeVogais, 0);  
        });
        
        it('Valida que vogais são as letras A, E, I, O e U', () => {
            const palavra = 'aeiou';
            const quantidadeVogais = contadorVogais(palavra);
            assert.strictEqual(quantidadeVogais, 5);  
        });

        it('Valida que vogais não são as letras diferentes de A, E, I, O e U', () => {
            const palavra = 'bcdfghjklmnpqrstvwxyz';
            const quantidadeVogais = contadorVogais(palavra);
            assert.strictEqual(quantidadeVogais, 0);  
        });

    });
    
});